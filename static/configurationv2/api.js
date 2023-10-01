import axios from "axios";

export async function createConfigInfo() {
  var infoTypeName = document.getElementById("infoTypeName").value;
  var infoConfigType = document.getElementById("infoConfigType").value;
  var typeTaskId = document.getElementById("info_selectJob").value;

  return axios({
    method: 'post',
    url: 'https://api.gland84.io.vn:8447/gland/config-api/create',
    responseType: 'json',
    data: {
      name: infoTypeName,
      type: 2,
      dataType:infoConfigType,
      typeTaskId: typeTaskId
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  });
}

export async function getAllConfigInfo(pageNum, typeTask) {

  let url = "https://api.gland84.io.vn:8447/gland/config-api/all?typeTask="+1+"&pageNum="+pageNum;
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
