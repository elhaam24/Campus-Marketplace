package com.campusmarketplace.controller;

import com.campusmarketplace.dto.MarketplaceDtos.ProductListingRequest;
import com.campusmarketplace.entity.ProductListing;
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
@RequestMapping("/api/products")
public class ProductListingController {
    private final ListingService listingService;

    public ProductListingController(ListingService listingService) {
        this.listingService = listingService;
    }

    @GetMapping
    public List<ProductListing> list() {
        return listingService.activeProducts();
    }

    @GetMapping("/{id}")
    public ProductListing get(@PathVariable Long id) {
        return listingService.product(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductListing create(@Valid @RequestBody ProductListingRequest request) {
        return listingService.createProduct(request);
    }
}
