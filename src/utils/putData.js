import { loadFromLocalStorage } from "../utils/localStorage";

const putData = async (url, body) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${loadFromLocalStorage("token")}`,
        "X-Noroff-API-Key": process.env.REACT_APP_API_KEY
      },
      body: JSON.stringify(body),
    });
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

export default putData;
