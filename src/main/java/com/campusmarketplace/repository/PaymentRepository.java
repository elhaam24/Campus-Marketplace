package com.campusmarketplace.repository;

import com.campusmarketplace.entity.Payment;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    List<Payment> findByPayerIdOrReceiverIdOrderByCreatedAtDesc(Long payerId, Long receiverId);
}
