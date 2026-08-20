const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { getStockCache } = require('./cache');

require('./poller');

const typeDefs = `#graphql
    type Product {
        id: ID!
        name: String!
        price: Float!
        inStock: Boolean!
        }

        type Query {
            products: [Product!]!
        }
    `;

  const resolvers = {
    Query: {
        products: () => {
            return getStockCache().map(product => ({
                id: product.product_id,
                name: product.product_name,
                price: product.price,
                inStock: product.in_stock
            }));
        }
    }
};

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    startStandaloneServer(server, {
        listen: { port: process.env.PORT || 4000 },
    }).then(({ url }) => {
        console.log(`Server ready at ${url}`);
    });