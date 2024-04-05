import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Remplacez ceci par l'URL de votre backend

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Fonctions pour l'entité Book
export const fetchBooks = async () => {
  try {
    const response = await api.get('/api/books');
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return null;
  }
};

export const fetchBookById = async (id: number) => {
  try {
    const response = await api.get(`/api/books/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with id ${id}:`, error);
    return null;
  }
};

export const addBook = async (bookData: any) => {
  try {
    const response = await api.post('/api/books', bookData);
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
    return null;
  }
};

export const updateBook = async (id: number, bookData: any) => {
  try {
    const response = await api.put(`/api/books/${id}`, bookData);
    return response.data;
  } catch (error) {
    console.error(`Error updating book with id ${id}:`, error);
    return null;
  }
};

export const deleteBookById = async (id: number) => {
    try {
      await api.delete(`/api/books/${id}`);
      console.log('Book deleted successfully');
      return true; // Indique que la suppression a réussi
    } catch (error) {
      console.error(`Error deleting book with id ${id}:`, error);
      return false; // Indique que la suppression a échoué
    }
  };
  


// Fonctions pour l'entité User
export const fetchUsers = async () => {
  try {
    const response = await api.get('/api/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return null;
  }
};

export const fetchUserById = async (id: number) => {
  try {
    const response = await api.get(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    return null;
  }
};

export const addUser = async (userData: any) => {
  try {
    const response = await api.post('/api/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    return null;
  }
};

export const updateUser = async (id: number, userData: any) => {
  try {
    const response = await api.put(`/api/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error(`Error updating user with id ${id}:`, error);
    return null;
  }
};

export const deleteUserById = async (id: number) => {
  try {
    await api.delete(`/api/users/${id}`);
    console.log('User deleted successfully');
  } catch (error) {
    console.error(`Error deleting user with id ${id}:`, error);
  }
};

// Fonctions pour l'entité Empreinte
export const fetchEmpreintes = async () => {
  try {
    const response = await api.get('/api/empreintes');
    return response.data;
  } catch (error) {
    console.error('Error fetching empreintes:', error);
    return null;
  }
};

export const fetchEmpreinteById = async (id: number) => {
  try {
    const response = await api.get(`/api/empreintes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching empreinte with id ${id}:`, error);
    return null;
  }
};

export const addEmpreinte = async (empreinteData: any) => {
  try {
    const response = await api.post('/api/empreintes', empreinteData);
    return response.data;
  } catch (error) {
    console.error('Error adding empreinte:', error);
    return null;
  }
};

export const updateEmpreinte = async (id: number, empreinteData: any) => {
  try {
    const response = await api.put(`/api/empreintes/${id}`, empreinteData);
    return response.data;
  } catch (error) {
    console.error(`Error updating empreinte with id ${id}:`, error);
    return null;
  }
};

export const deleteEmpreinteById = async (id: number) => {
  try {
    await api.delete(`/api/empreintes/${id}`);
    console.log('Empreinte deleted successfully');
  } catch (error) {
    console.error(`Error deleting empreinte with id ${id}:`, error);
  }
};
