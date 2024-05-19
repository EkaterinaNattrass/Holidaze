import { loadFromLocalStorage } from "./localStorage";

export const postData = async (url, body) => {
  try {
    let response;
    const token = loadFromLocalStorage("token");
    if (token) {
      console.log('body', body)
      response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${loadFromLocalStorage("token")}`,
          "X-Noroff-API-Key": process.env.REACT_APP_API_KEY
        },
        body: JSON.stringify(body),
      });
    } else {
      console.log('body', body)
      response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
    }
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error(`The server responded with status ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};
