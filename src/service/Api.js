import axios from "axios";

const url = "http://localhost:5000/api/v1";

export const adduser = async (data) => {
  try {
    // console.log("data", data);
    await axios.post(`${url}/adduser`, JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(`Error from adduser Api ${error.message}`);
  }
};
export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${url}/getusers`);
    return data;
  } catch (error) {
    console.log(`Error from adduser Api ${error.message}`);
  }
};
export const setConversetion=async(query)=>{
  try{
    const {data}=await axios.post(`${url}/conversation/add`,query)
    // console.log(data)
    return data;

  }catch(error){

    console.log(`Error from  setConversetion Api ${error.message}`);

  }
}