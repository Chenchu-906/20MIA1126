// src/pages/ProductsList.js
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/products';
import Product from '../components/Product';
import { Link } from 'react-router-dom'; 

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
  });
  const [pagination, setPagination] = useState({
    currentPage: 1, 
    pageSize: 10, 
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProducts(
        filters.category,
        filters.company,
        {
          
          page: pagination.currentPage,
          limit: pagination.pageSize,
        }
      );
      setProducts(fetchedProducts);
    };

    fetchData();
  }, [filters, pagination]);

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handlePageChange = (pageNumber) => {
    setPagination({ ...pagination, currentPage: pageNumber });
  };

  return (
    <div className="products-list">
      <form>
     
        <button type="submit">Apply Filters</button>
      </form>

      <div className="product-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <div className="pagination">

        <button onClick={() => handlePageChange(pagination.currentPage - 1)} disabled={pagination.currentPage === 1}>
          Previous
        </button>
        <button onClick={() => handlePageChange(pagination.currentPage + 1)}>Next</button>
      </div>
      <Link to="/all-products">View All Products</Link>
    </div>
  );
};

export default ProductsList;
