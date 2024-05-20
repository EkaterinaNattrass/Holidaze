import { loadFromLocalStorage } from "../utils/localStorage";

export const deleteData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${loadFromLocalStorage("token")}`,
        "X-Noroff-API-Key": process.env.REACT_APP_API_KEY
      },
    });
    if (response.ok) {
      return;} else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    }  catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};
