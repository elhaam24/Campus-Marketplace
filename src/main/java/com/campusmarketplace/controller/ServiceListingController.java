package com.campusmarketplace.controller;

import com.campusmarketplace.dto.MarketplaceDtos.ServiceListingRequest;
import com.campusmarketplace.entity.ServiceListing;
import com.campusmarketplace.service.ListingService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/services")
public class ServiceListingController {
    private final ListingService listingService;

    public ServiceListingController(ListingService listingService) {
        this.listingService = listingService;
    }

    @GetMapping
    public List<ServiceListing> list() {
        return listingService.activeServices();
    }

    @GetMapping("/{id}")
    public ServiceListing get(@PathVariable Long id) {
        return listingService.service(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ServiceListing create(@Valid @RequestBody ServiceListingRequest request) {
        return listingService.createService(request);
    }
}
