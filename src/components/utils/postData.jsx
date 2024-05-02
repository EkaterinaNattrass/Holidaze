
export const postData = async (url, body) => {
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
             // Authorization: `Bearer ${loadFromLocalStorage("token")}`,
            },
            body: JSON.stringify(body), });
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
          throw new Error (`The error is ${error.message}`)
        }
      };
    