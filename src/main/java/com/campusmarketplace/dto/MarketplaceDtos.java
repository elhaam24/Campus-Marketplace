package com.campusmarketplace.dto;

import com.campusmarketplace.entity.MarketplaceEnums.ItemCondition;
import com.campusmarketplace.entity.MarketplaceEnums.LocationType;
import com.campusmarketplace.entity.MarketplaceEnums.OrderType;
import com.campusmarketplace.entity.MarketplaceEnums.PaymentMethod;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import java.math.BigDecimal;
import java.util.List;

public final class MarketplaceDtos {
    private MarketplaceDtos() {
    }

    public record ProductListingRequest(
            @NotBlank String title,
            @NotBlank String description,
            @NotNull @Positive BigDecimal price,
            String currency,
            ItemCondition itemCondition,
            Long categoryId,
            String campusLocation,
            String pickupLocation,
            List<String> imageUrls
    ) {
    }

    public record ServiceListingRequest(
            @NotBlank String title,
            @NotBlank String description,
            BigDecimal hourlyRate,
            BigDecimal fixedPrice,
            String currency,
            Long categoryId,
            String availability,
            LocationType locationType,
            String campusLocation,
            List<String> imageUrls
    ) {
    }

    public record ConversationRequest(
            Long productListingId,
            Long serviceListingId
    ) {
    }

    public record MessageRequest(
            @NotBlank String body,
            String attachmentUrl
    ) {
    }

    public record PaymentRequest(
            @NotNull Long orderId,
            PaymentMethod paymentMethod,
            String paymentProvider,
            String providerTransactionId
    ) {
    }

    public record ReviewRequest(
            @NotNull Long orderId,
            @NotNull Long revieweeId,
            @Min(1) @Max(5) Integer rating,
            String comment
    ) {
    }

    public record OrderRequest(
            @NotNull OrderType orderType,
            Long productListingId,
            Long serviceListingId
    ) {
    }
}
