import { useState, useEffect } from 'react';
import axios from 'axios';
interface Product {
    id: number;
    name: string;
    imageUrl: string;
}
export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('There was an error fetching the products!', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.imageUrl} alt={product.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  )
}
