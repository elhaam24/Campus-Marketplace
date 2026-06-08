package com.campusmarketplace.service;

import com.campusmarketplace.dto.MarketplaceDtos.PaymentRequest;
import com.campusmarketplace.entity.MarketplaceEnums.PaymentMethod;
import com.campusmarketplace.entity.MarketplaceEnums.PaymentStatus;
import com.campusmarketplace.entity.MarketplaceOrder;
import com.campusmarketplace.entity.Payment;
import com.campusmarketplace.repository.MarketplaceOrderRepository;
import com.campusmarketplace.repository.PaymentRepository;
import java.time.Instant;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {
    private final PaymentRepository paymentRepository;
    private final MarketplaceOrderRepository orderRepository;
    private final CurrentUserService currentUserService;

    public PaymentService(
            PaymentRepository paymentRepository,
            MarketplaceOrderRepository orderRepository,
            CurrentUserService currentUserService
    ) {
        this.paymentRepository = paymentRepository;
        this.orderRepository = orderRepository;
        this.currentUserService = currentUserService;
    }

    public List<Payment> myPayments() {
        Long userId = currentUserService.getCurrentUser().getId();
        return paymentRepository.findByPayerIdOrReceiverIdOrderByCreatedAtDesc(userId, userId);
    }

    public Payment createPayment(PaymentRequest request) {
        MarketplaceOrder order = orderRepository.findById(request.orderId())
                .orElseThrow(() -> new IllegalArgumentException("Order not found"));

        Payment payment = new Payment();
        payment.setOrder(order);
        payment.setPayer(order.getBuyer());
        payment.setReceiver(order.getSeller());
        payment.setAmount(order.getTotalAmount());
        payment.setCurrency(order.getCurrency());
        PaymentMethod method = request.paymentMethod() != null ? request.paymentMethod() : PaymentMethod.CARD;
        payment.setPaymentMethod(method);
        payment.setPaymentProvider(request.paymentProvider());
        payment.setProviderTransactionId(request.providerTransactionId());

        if (method == PaymentMethod.CASH) {
            payment.setStatus(PaymentStatus.PAID);
            payment.setPaidAt(Instant.now());
        }

        return paymentRepository.save(payment);
    }
}
