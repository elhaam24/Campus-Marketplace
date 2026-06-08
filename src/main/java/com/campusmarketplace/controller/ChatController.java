package com.campusmarketplace.controller;

import com.campusmarketplace.dto.MarketplaceDtos.ConversationRequest;
import com.campusmarketplace.dto.MarketplaceDtos.MessageRequest;
import com.campusmarketplace.entity.Conversation;
import com.campusmarketplace.entity.Message;
import com.campusmarketplace.service.ChatService;
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
@RequestMapping("/api/chat")
public class ChatController {
    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @GetMapping("/conversations")
    public List<Conversation> conversations() {
        return chatService.myConversations();
    }

    @PostMapping("/conversations")
    @ResponseStatus(HttpStatus.CREATED)
    public Conversation start(@RequestBody ConversationRequest request) {
        return chatService.startConversation(request);
    }

    @GetMapping("/conversations/{conversationId}/messages")
    public List<Message> messages(@PathVariable Long conversationId) {
        return chatService.messages(conversationId);
    }

    @PostMapping("/conversations/{conversationId}/messages")
    @ResponseStatus(HttpStatus.CREATED)
    public Message send(@PathVariable Long conversationId, @Valid @RequestBody MessageRequest request) {
        return chatService.sendMessage(conversationId, request);
    }
}
