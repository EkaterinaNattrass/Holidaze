export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
export const loadFromLocalStorage = (key) => {
    try {
      const value = localStorage.getItem(key);
      return JSON.parse(value);
    } catch {
      return null;
    }
  };

export const removeFromLocalStorage = () => {
    localStorage.clear();
    window.location.href = "/";
  };