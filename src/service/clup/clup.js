const login = (data) => {
  const urı = "http://localhost:5500/api/clup/add/";

  fetch(urı, {
    method: "POST",
    headers: {
      "Content-type": "appliaction/json",
    },
    body: data,
  });
};

export default login;
