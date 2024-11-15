import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:8080/mensajeria' });

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





export const getMensajes = async (remitenteId) => {
  const response = await instance.get(`/${remitenteId}`)
  console.log("getMessages", response)
  return response.data;
}


export const sendMessage = async (obj) => {
  const response = await instance.post('/send', obj);
  console.log('mensaje:', response)
return response.data;
}

export const getUsers = async () => {
    const response = await instance.get('/users');
    return response.data; 
  }
