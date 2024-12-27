export async function fetchData(host, data) {
  try {
    console.log(data);
    const response = await sendRequest(host, data);
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error to be handled by the calling function
  }
}

async function sendRequest(host, data) {
  console.log("Sending request to server");
  return fetch(host, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error; // Re-throw the error
    });
}
