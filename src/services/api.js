import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/mensajeria' });

export const getMensajes = async (remitenteId) => {
  const response = await instance.get(`/${remitenteId}`)
  console.log("getMessages", response)
  return response.data;
}



export const login = async (username, password) => {
  console.log(1111,username, password);
  const token = btoa(username + ":" + password);
  const response = await instance.post("/login",{},
  {
      headers: {
          "Content-Type": "application/json",
          Authorization: "basic " + token,
      },
  });


  console.log("aaaaaaaaaaaa",response)
  if(response.data.resp === "Login exitoso"){
      setAuth(token);
      return {token, id: response.data.id};
  }
  return null;
}


export const setAuth = async (token) => {
  instance.defaults.headers.common.Authorization = `basic ${token}`;
};