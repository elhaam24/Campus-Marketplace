package com.campusmarketplace.service;

import com.campusmarketplace.dto.MarketplaceDtos.ConversationRequest;
import com.campusmarketplace.dto.MarketplaceDtos.MessageRequest;
import com.campusmarketplace.entity.Conversation;
import com.campusmarketplace.entity.Message;
import com.campusmarketplace.entity.ProductListing;
import com.campusmarketplace.entity.ServiceListing;
import com.campusmarketplace.entity.User;
import com.campusmarketplace.repository.ConversationRepository;
import com.campusmarketplace.repository.MessageRepository;
import com.campusmarketplace.repository.ProductListingRepository;
import com.campusmarketplace.repository.ServiceListingRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class ChatService {
    private final ConversationRepository conversationRepository;
    private final MessageRepository messageRepository;
    private final ProductListingRepository productListingRepository;
    private final ServiceListingRepository serviceListingRepository;
    private final CurrentUserService currentUserService;

    public ChatService(
            ConversationRepository conversationRepository,
            MessageRepository messageRepository,
            ProductListingRepository productListingRepository,
            ServiceListingRepository serviceListingRepository,
            CurrentUserService currentUserService
    ) {
        this.conversationRepository = conversationRepository;
        this.messageRepository = messageRepository;
        this.productListingRepository = productListingRepository;
        this.serviceListingRepository = serviceListingRepository;
        this.currentUserService = currentUserService;
    }

    public List<Conversation> myConversations() {
        User user = currentUserService.getCurrentUser();
        return conversationRepository.findByBuyerIdOrSellerIdOrderByUpdatedAtDesc(user.getId(), user.getId());
    }

    public Conversation startConversation(ConversationRequest request) {
        User buyer = currentUserService.getCurrentUser();
        Conversation conversation = new Conversation();
        conversation.setBuyer(buyer);

        if (request.productListingId() != null) {
            ProductListing product = productListingRepository.findById(request.productListingId())
                    .orElseThrow(() -> new IllegalArgumentException("Product listing not found"));
            conversation.setProductListing(product);
            conversation.setSeller(product.getSeller());
        } else if (request.serviceListingId() != null) {
            ServiceListing service = serviceListingRepository.findById(request.serviceListingId())
                    .orElseThrow(() -> new IllegalArgumentException("Service listing not found"));
            conversation.setServiceListing(service);
            conversation.setSeller(service.getProvider());
        } else {
            throw new IllegalArgumentException("A productListingId or serviceListingId is required");
        }

        return conversationRepository.save(conversation);
    }

    public Message sendMessage(Long conversationId, MessageRequest request) {
        User sender = currentUserService.getCurrentUser();
        Conversation conversation = conversationRepository.findById(conversationId)
                .orElseThrow(() -> new IllegalArgumentException("Conversation not found"));

        Message message = new Message();
        message.setConversation(conversation);
        message.setSender(sender);
        message.setBody(request.body());
        message.setAttachmentUrl(request.attachmentUrl());
        return messageRepository.save(message);
    }

    public List<Message> messages(Long conversationId) {
        return messageRepository.findByConversationIdOrderByCreatedAtAsc(conversationId);
    }
}
