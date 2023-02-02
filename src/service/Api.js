import axios from "axios";

const url = "http://localhost:4000/api/v1";

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
export const setConversetion = async (query) => {
  try {
    const { data } = await axios.post(`${url}/conversation/add`, query);
    // console.log(data)
    return data;
  } catch (error) {
    console.log(`Error from  setConversetion Api ${error.message}`);
  }
};

export const getConversation = async (query) => {
  try {
    const { data } = await axios.post(`${url}/conversation/get`, query);
    // console.log(data)
    return data;
  } catch (error) {
    console.log(`Error from  getConversationId Api ${error.message}`);
  }
};
export const newMessage = async (query) => {
  try {
    const { data } = await axios.post(`${url}/message/add`, query);
    // console.log(data)
    return data;
  } catch (error) {
    console.log(`Error from  newMessage Api ${error.message}`);
  }
};
export const getMessage = async (id) => {
  try {
    const { data } = await axios.get(`${url}/message/get/${id}`);
    // console.log(data)
    return data;
  } catch (error) {
    console.log(`Error from  getMessage Api ${error.message}`);
  }
};
export const UploadFile = async (query) => {
  try {
    const { data } = await axios.post(`${url}/file/upload`, query);
    // console.log(data)
    return data;
  } catch (error) {
    console.log(`Error from  upload file Api ${error.message}`);
  }
};
export const downloadfiles = async (fileurl) => {
  try {
    fetch(fileurl)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
      //  console.log("url",a)
      //  console.log("url",url)
        a.style.display = "none";
        a.href = url;
        const nameSplit = fileurl.split("/");
        const duplicatename = nameSplit.pop();
        a.download = "" + duplicatename + "";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.log(`error found from download file ${err}`);
      });
  } catch (error) {
    console.log(`Error from  upload file Api ${error.message}`);
  }
};

