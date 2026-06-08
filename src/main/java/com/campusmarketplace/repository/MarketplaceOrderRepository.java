package com.campusmarketplace.repository;

import com.campusmarketplace.entity.MarketplaceOrder;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarketplaceOrderRepository extends JpaRepository<MarketplaceOrder, Long> {
    List<MarketplaceOrder> findByBuyerIdOrSellerIdOrderByCreatedAtDesc(Long buyerId, Long sellerId);
}
