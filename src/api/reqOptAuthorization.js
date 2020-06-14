export const reqOptions = (data, token) => {
  const jsonObject = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-App-Key": "dino"
    },
    body: JSON.stringify(data),
  };
  return jsonObject;
};


