# Northstar Retail - GraphQL Inventory Prototype

## Overview

This project is a prototype for **Northstar Retail Co.** to provide accurate inventory information for a support tool.

The prototype uses a warehouse inventory source, a cache, and a GraphQL API to expose product stock information.

## How It Works

The Day 3 prototype follows the original specification:

1. The system retrieves inventory data from the warehouse.
2. The inventory is polled every 5 minutes.
3. The latest stock information is stored in an in-memory cache.
4. GraphQL exposes the cached inventory to clients.
5. The frontend can query product availability.

```text
Warehouse
    ↓
Polling
    ↓
Cache
    ↓
GraphQL API
    ↓
Frontend
```

## Technologies

- Node.js
- GraphQL
- Apollo Server
- React
- JavaScript
- GitHub
- Render
- Vercel

## Product Data

The prototype contains inventory information including:

- Product ID
- Product name
- Price
- Stock status
- Stock count
- Category
- Warehouse location

## GraphQL

Example query:

```graphql
query {
  products {
    id
    name
    price
    inStock
  }
}
```

The API returns the current product inventory from the cache.

## Testing

The GraphQL endpoint was tested by querying the available products and verifying that the expected product information and stock status were returned.

Example result:

```json
{
  "data": {
    "products": [
      {
        "id": "PRD-3001",
        "name": "Wireless Earbuds Pro",
        "price": 89.99,
        "inStock": true
      }
    ]
  }
}
```

## Deployment

**Backend:**  
https://northstar-graphql-prototype.onrender.com/

**Frontend:**  
https://northstar-graphql-prototype.vercel.app/
