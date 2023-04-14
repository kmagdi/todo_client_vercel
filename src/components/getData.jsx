import axios from "axios";
//const url=""
const url="https://todo-server-db4free.onrender.com"
export const getTodos = async () => {
  const response = await axios.get(url+"/all");
  return await response;
};


export const addItem = async (formdata) => {
  console.log("formdata:",formdata);
  const response = await axios.post(url+"/add",formdata);
  return  response;
};


export const delItem=async (id) => {
  const response = await axios.delete(url+"/del/"+id);
  return  response;
}
export const doneItem=async (id) => {
  const response = await axios.put(url+"/done/"+id);
  return  response;
}
export const delItems=async () => {
  const response = await axios.delete(url+"/delAll");
  return  response;
}