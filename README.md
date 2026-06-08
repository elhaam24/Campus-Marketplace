# Student Marketplace Backend

Spring Boot REST API for a university student marketplace.



## Project Structure

```text
src/main/java/com/campusmarketplace
  config/        Security and API exception handling
  controller/    REST controllers
  dto/           Request and response DTOs
  entity/        JPA entities and enums
  repository/    Spring Data JPA repositories
  security/      JWT filter, JWT service, user details service
  service/       Business logic
```

## Main APIs

```text
POST   /api/auth/register
POST   /api/auth/login

GET    /api/products
GET    /api/products/{id}
POST   /api/products

GET    /api/services
GET    /api/services/{id}
POST   /api/services

GET    /api/chat/conversations
POST   /api/chat/conversations
GET    /api/chat/conversations/{conversationId}/messages
POST   /api/chat/conversations/{conversationId}/messages

GET    /api/orders
POST   /api/orders

GET    /api/payments
POST   /api/payments

GET    /api/reviews/users/{userId}
POST   /api/reviews

GET    /api/notifications
PATCH  /api/notifications/{id}/read
```

## Frontend

The Next.js frontend lives in `frontend/`.

Included screens:

```text
/             Homepage
/products     Product listing page
/services     Service marketplace page
/profile      User profile
/chat         Chat page
/dashboard    Student seller dashboard
```

