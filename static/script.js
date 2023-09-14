import axios from "axios";

export async function createScript(departmentId) {
  var scriptName = document.getElementById("scriptName").value;

  return axios({
    method: 'post',
    url: 'https://103.142.26.40:8445/gland/api-script/create',
    responseType: 'json',
    data: {
      name: scriptName,
      departmentId: departmentId
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  });
}

export async function getAllScripts(pageNum, departmentId) {
  let url = "https://103.142.26.40:8445/gland/api-script/all?departmentId="+departmentId+"&pageNum="+pageNum;
  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("jwt")
      }
    });
    var resp = response.data;
    return resp;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
