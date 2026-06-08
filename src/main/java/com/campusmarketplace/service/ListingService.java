package com.campusmarketplace.service;

import com.campusmarketplace.dto.MarketplaceDtos.ProductListingRequest;
import com.campusmarketplace.dto.MarketplaceDtos.ServiceListingRequest;
import com.campusmarketplace.entity.MarketplaceEnums.ItemCondition;
import com.campusmarketplace.entity.MarketplaceEnums.LocationType;
import com.campusmarketplace.entity.Category;
import com.campusmarketplace.entity.MarketplaceEnums.ListingStatus;
import com.campusmarketplace.entity.ProductListing;
import com.campusmarketplace.entity.ServiceListing;
import com.campusmarketplace.entity.User;
import com.campusmarketplace.repository.CategoryRepository;
import com.campusmarketplace.repository.ProductListingRepository;
import com.campusmarketplace.repository.ServiceListingRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class ListingService {
    private final ProductListingRepository productListingRepository;
    private final ServiceListingRepository serviceListingRepository;
    private final CategoryRepository categoryRepository;
    private final CurrentUserService currentUserService;

    public ListingService(
            ProductListingRepository productListingRepository,
            ServiceListingRepository serviceListingRepository,
            CategoryRepository categoryRepository,
            CurrentUserService currentUserService
    ) {
        this.productListingRepository = productListingRepository;
        this.serviceListingRepository = serviceListingRepository;
        this.categoryRepository = categoryRepository;
        this.currentUserService = currentUserService;
    }

    public List<ProductListing> activeProducts() {
        return productListingRepository.findByStatusOrderByCreatedAtDesc(ListingStatus.ACTIVE);
    }

    public List<ServiceListing> activeServices() {
        return serviceListingRepository.findByStatusOrderByCreatedAtDesc(ListingStatus.ACTIVE);
    }

    public ProductListing product(Long id) {
        return productListingRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Product listing not found"));
    }

    public ServiceListing service(Long id) {
        return serviceListingRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Service listing not found"));
    }

    public ProductListing createProduct(ProductListingRequest request) {
        User seller = currentUserService.getCurrentUser();
        ProductListing listing = new ProductListing();
        listing.setSeller(seller);
        listing.setTitle(request.title());
        listing.setDescription(request.description());
        listing.setPrice(request.price());
        listing.setCurrency(Optional.ofNullable(request.currency()).orElse("USD"));
        listing.setItemCondition(Optional.ofNullable(request.itemCondition()).orElse(ItemCondition.GOOD));
        listing.setCampusLocation(request.campusLocation());
        listing.setPickupLocation(request.pickupLocation());
        listing.setImageUrls(Optional.ofNullable(request.imageUrls()).orElse(List.of()));
        setCategory(request.categoryId(), listing::setCategory);
        return productListingRepository.save(listing);
    }

    public ServiceListing createService(ServiceListingRequest request) {
        User provider = currentUserService.getCurrentUser();
        ServiceListing listing = new ServiceListing();
        listing.setProvider(provider);
        listing.setTitle(request.title());
        listing.setDescription(request.description());
        listing.setHourlyRate(request.hourlyRate());
        listing.setFixedPrice(request.fixedPrice());
        listing.setCurrency(Optional.ofNullable(request.currency()).orElse("USD"));
        listing.setAvailability(request.availability());
        listing.setLocationType(Optional.ofNullable(request.locationType()).orElse(LocationType.BOTH));
        listing.setCampusLocation(request.campusLocation());
        listing.setImageUrls(Optional.ofNullable(request.imageUrls()).orElse(List.of()));
        setCategory(request.categoryId(), listing::setCategory);
        return serviceListingRepository.save(listing);
    }

    private void setCategory(Long categoryId, java.util.function.Consumer<Category> consumer) {
        if (categoryId != null) {
            consumer.accept(categoryRepository.findById(categoryId)
                    .orElseThrow(() -> new IllegalArgumentException("Category not found")));
        }
    }
}
