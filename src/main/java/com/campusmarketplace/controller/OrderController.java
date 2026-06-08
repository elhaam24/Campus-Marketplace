package com.campusmarketplace.controller;

import com.campusmarketplace.dto.MarketplaceDtos.OrderRequest;
import com.campusmarketplace.entity.MarketplaceOrder;
import com.campusmarketplace.service.OrderService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<MarketplaceOrder> list() {
        return orderService.myOrders();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public MarketplaceOrder create(@Valid @RequestBody OrderRequest request) {
        return orderService.createOrder(request);
    }
}
