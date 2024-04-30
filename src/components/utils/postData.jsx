
export const postData = async (url, body) => {
        let response;
        let data;
        
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
             // Authorization: `Bearer ${loadFromLocalStorage("token")}`,
            },
            body: JSON.stringify(body), });
            const data = await response.json();
            console.log(data);
        } catch (err) {
          throw new Error (`${response.status} The error is ${data.errors[0].message}`)
        }
          return data;
      };
    