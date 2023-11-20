import axios from 'axios';

// apiService.js
const API_URL = 'http://localhost:8080/api/auth/'; // Replace with your API URL

const apiService = {
  createCategory: async (name) => {

    try {
      const response = await axios.post(`${API_URL}create-category`, { name: name });

      if (response.status !== 200) {
        throw new Error('Failed to create category');
      }

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }

  },
  updateCategory: async (id, name) => {
    try {
      const response = await fetch(`${API_URL}/updateCategory/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        throw new Error('Failed to update category');
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  deleteCategory: async (id) => {
    try {
      const response = await fetch(`${API_URL}/deleteCategory/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete category');
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default apiService;
