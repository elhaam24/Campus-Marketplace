package com.campusmarketplace.service;

import com.campusmarketplace.dto.MarketplaceDtos.OrderRequest;
import com.campusmarketplace.entity.MarketplaceEnums.OrderType;
import com.campusmarketplace.entity.MarketplaceOrder;
import com.campusmarketplace.entity.ProductListing;
import com.campusmarketplace.entity.ServiceListing;
import com.campusmarketplace.entity.User;
import com.campusmarketplace.repository.MarketplaceOrderRepository;
import com.campusmarketplace.repository.ProductListingRepository;
import com.campusmarketplace.repository.ServiceListingRepository;
import java.math.BigDecimal;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    private final MarketplaceOrderRepository orderRepository;
    private final ProductListingRepository productListingRepository;
    private final ServiceListingRepository serviceListingRepository;
    private final CurrentUserService currentUserService;

    public OrderService(
            MarketplaceOrderRepository orderRepository,
            ProductListingRepository productListingRepository,
            ServiceListingRepository serviceListingRepository,
            CurrentUserService currentUserService
    ) {
        this.orderRepository = orderRepository;
        this.productListingRepository = productListingRepository;
        this.serviceListingRepository = serviceListingRepository;
        this.currentUserService = currentUserService;
    }

    public List<MarketplaceOrder> myOrders() {
        Long userId = currentUserService.getCurrentUser().getId();
        return orderRepository.findByBuyerIdOrSellerIdOrderByCreatedAtDesc(userId, userId);
    }

    public MarketplaceOrder createOrder(OrderRequest request) {
        User buyer = currentUserService.getCurrentUser();
        MarketplaceOrder order = new MarketplaceOrder();
        order.setBuyer(buyer);
        order.setOrderType(request.orderType());

        if (request.orderType() == OrderType.PRODUCT) {
            ProductListing product = productListingRepository.findById(request.productListingId())
                    .orElseThrow(() -> new IllegalArgumentException("Product listing not found"));
            order.setProductListing(product);
            order.setSeller(product.getSeller());
            order.setTotalAmount(product.getPrice());
            order.setCurrency(product.getCurrency());
        } else {
            ServiceListing service = serviceListingRepository.findById(request.serviceListingId())
                    .orElseThrow(() -> new IllegalArgumentException("Service listing not found"));
            order.setServiceListing(service);
            order.setSeller(service.getProvider());
            order.setTotalAmount(service.getFixedPrice() != null ? service.getFixedPrice() : BigDecimal.ZERO);
            order.setCurrency(service.getCurrency());
        }

        return orderRepository.save(order);
    }
}
