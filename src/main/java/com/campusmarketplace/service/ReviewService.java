package com.campusmarketplace.service;

import com.campusmarketplace.dto.MarketplaceDtos.ReviewRequest;
import com.campusmarketplace.entity.MarketplaceOrder;
import com.campusmarketplace.entity.Review;
import com.campusmarketplace.entity.User;
import com.campusmarketplace.repository.MarketplaceOrderRepository;
import com.campusmarketplace.repository.ReviewRepository;
import com.campusmarketplace.repository.UserRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final MarketplaceOrderRepository orderRepository;
    private final UserRepository userRepository;
    private final CurrentUserService currentUserService;

    public ReviewService(
            ReviewRepository reviewRepository,
            MarketplaceOrderRepository orderRepository,
            UserRepository userRepository,
            CurrentUserService currentUserService
    ) {
        this.reviewRepository = reviewRepository;
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
        this.currentUserService = currentUserService;
    }

    public Review createReview(ReviewRequest request) {
        MarketplaceOrder order = orderRepository.findById(request.orderId())
                .orElseThrow(() -> new IllegalArgumentException("Order not found"));
        User reviewer = currentUserService.getCurrentUser();
        User reviewee = userRepository.findById(request.revieweeId())
                .orElseThrow(() -> new IllegalArgumentException("Reviewee not found"));

        Review review = new Review();
        review.setOrder(order);
        review.setReviewer(reviewer);
        review.setReviewee(reviewee);
        review.setRating(request.rating());
        review.setComment(request.comment());
        return reviewRepository.save(review);
    }

    public List<Review> reviewsForUser(Long userId) {
        return reviewRepository.findByRevieweeIdOrderByCreatedAtDesc(userId);
    }
}
