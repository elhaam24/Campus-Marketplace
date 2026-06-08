package com.campusmarketplace.repository;

import com.campusmarketplace.entity.MarketplaceEnums.ListingStatus;
import com.campusmarketplace.entity.ServiceListing;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceListingRepository extends JpaRepository<ServiceListing, Long> {
    List<ServiceListing> findByStatusOrderByCreatedAtDesc(ListingStatus status);

    List<ServiceListing> findByProviderIdOrderByCreatedAtDesc(Long providerId);
}
