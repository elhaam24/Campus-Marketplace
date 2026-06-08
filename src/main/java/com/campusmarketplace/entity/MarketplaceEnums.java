package com.campusmarketplace.entity;

public final class MarketplaceEnums {
    private MarketplaceEnums() {
    }

    public enum Role {
        STUDENT, MODERATOR, ADMIN
    }

    public enum VerificationStatus {
        PENDING, VERIFIED, REJECTED
    }

    public enum AccountStatus {
        ACTIVE, SUSPENDED, DELETED
    }

    public enum ListingStatus {
        DRAFT, ACTIVE, RESERVED, SOLD, PAUSED, REMOVED, EXPIRED
    }

    public enum ItemCondition {
        NEW, LIKE_NEW, GOOD, FAIR, POOR
    }

    public enum LocationType {
        ONLINE, IN_PERSON, BOTH
    }

    public enum ConversationStatus {
        ACTIVE, ARCHIVED, BLOCKED
    }

    public enum MessageType {
        TEXT, IMAGE, FILE, SYSTEM
    }

    public enum OrderType {
        PRODUCT, SERVICE
    }

    public enum OrderStatus {
        PENDING, ACCEPTED, COMPLETED, CANCELLED, DISPUTED
    }

    public enum PaymentMethod {
        CARD, BANK_TRANSFER, CASH, WALLET
    }

    public enum PaymentStatus {
        PENDING, PAID, FAILED, REFUNDED
    }
}
