export const reqOptions = (data) => {
  const jsonObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-App-Key": "matija"
    },
    body: JSON.stringify(data),
  };
  return jsonObject;
};


