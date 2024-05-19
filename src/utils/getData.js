import { loadFromLocalStorage } from "../utils/localStorage";

export const getData = async (url) => {
  let response;
  const token = loadFromLocalStorage("token");
  console.log("tokening", token);
  if (token) {
    response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "X-Noroff-API-Key": process.env.REACT_APP_API_KEY
      },
     
    }); 
  } else {
    response = await fetch(url);
  }
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `Error: '${data.errors[0].message}'`
    );
  }

  return data;
};
  