package com.campusmarketplace.repository;

import com.campusmarketplace.entity.MarketplaceEnums.ListingStatus;
import com.campusmarketplace.entity.ProductListing;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductListingRepository extends JpaRepository<ProductListing, Long> {
    List<ProductListing> findByStatusOrderByCreatedAtDesc(ListingStatus status);

    List<ProductListing> findBySellerIdOrderByCreatedAtDesc(Long sellerId);
}
