import axios from "axios";

export async function createTypeJob(scriptId) {
  var name = document.getElementById("jobTypeName").value;

  return axios({
    method: 'post',
    url: 'https://api.gland84.io.vn:8447/gland/api-type-task/create',
    responseType: 'json',
    data: {
      name: name,
      scriptId: scriptId
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  });
}

export async function getAllTypeJobs(pageNum, scriptId) {
  let url = "https://api.gland84.io.vn:8447/gland/api-type-task/all?scriptId="+scriptId+"&pageNum="+pageNum;
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
