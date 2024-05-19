import { loadFromLocalStorage } from "../Utility/localStorage";

export const deleteData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loadFromLocalStorage("token")}`,
      },
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(
        `The API server responded with ${response.status}`
      );
    }

    return response.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};
