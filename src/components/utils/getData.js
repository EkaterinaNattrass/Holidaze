import { loadFromLocalStorage } from "../utils/localStorage";

export const getData = async (url) => {
    try {
      let response;
      const token = loadFromLocalStorage("token");
      if (token) {
        response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        response = await fetch(url);
      }
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(
          `The API server responded with ${response.status}`
        );
      }
  
      return data;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  };
  