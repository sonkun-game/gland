import axios from "axios";

export async function createTypeJob(scriptId, jobTypeNameId) {

  console.log(scriptId);
  console.log(jobTypeNameId);
  if(scriptId && jobTypeNameId) {
  var name = document.getElementById(jobTypeNameId).value;
  
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
  } else {
    console.error(`${jobTypeNameId} or ${scriptId}  is not defined !`);
  }
  
}

export async function getAllTypeJobs(pageNum, scriptId) {

  if(!scriptId) return null;
  pageNum = pageNum ? pageNum : 0;
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
