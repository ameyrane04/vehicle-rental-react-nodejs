// src/hooks/useAuth.js
export function useAuth() {
    // Check if 'userToken' exists in localStorage
    const token = localStorage.getItem('userToken');
    return {
      isAuthenticated: !!token, // Convert to boolean: true if token exists, false otherwise
      logout: () => {
        localStorage.removeItem('userToken'); // Add a logout function
      }
    };
  }
  