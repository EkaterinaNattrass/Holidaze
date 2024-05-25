import { loadFromLocalStorage } from "./localStorage";

export const postData = async (url, body) => {
  try {
    const token = loadFromLocalStorage("token");
    const headers = {
      "Content-Type": "application/json",
      "X-Noroff-API-Key": process.env.REACT_APP_API_KEY,
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`The server responded with status ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};
