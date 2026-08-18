import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import './App.css';

const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      price
      inStock
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <p className="message">Loading products...</p>;
  }

  if (error) {
    return <p className="message error">Error: {error.message}</p>;
  }

  return (
    <main className="app">
      <header className="header">
        <h1>Northstar Product Availability</h1>
        <p>Check product availability and pricing at a glance.</p>
      </header>

      <section className="product-grid">
        {data.products.map((product) => (
          <article className="product-card" key={product.id}>
            <div>
              <h2>{product.name}</h2>
              <p className="price">${product.price.toFixed(2)}</p>
            </div>

            <span
              className={`stock-badge ${
                product.inStock ? 'in-stock' : 'out-of-stock'
              }`}
            >
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;