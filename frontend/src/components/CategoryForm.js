import React, { useState } from 'react';
import apiService from '../apiService';

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');

  const handleInputChange = (event) => {
    setCategoryName(event.target.value);
    console.log(categoryName);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call the API service to create a category
      const createdCategory = await apiService.createCategory(categoryName);
      console.log('Category created:', createdCategory);

    } catch (error) {
      console.error('Error creating category:', error.message);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Category Name:
        <input
          type='text'
          value={categoryName}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type='submit'>Add Category</button>
    </form>
  );
};

export default CategoryForm;
