export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);

  if (value === null) {
    return null;
  }

  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

export const removeFromLocalStorage = () => {
  localStorage.clear();
  window.location.href = "/";
};
