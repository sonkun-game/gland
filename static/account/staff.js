import axios from "axios";

export async function getAllStaffsPaging(storeId, pageNum, departmentId) {
  let url = "https://api.gland84.io.vn:8447/gland/api-account/all?storeId="+storeId+"&pageNum="+pageNum;
  if(departmentId!= null) url+="&departmentId="+departmentId;
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


export async function createStaffsAll(storeId, departmentId) {
  var username = document.getElementById("staffName").value;
  var password = document.getElementById("staffPassword").value;
  /*var name = document.getElementById("editNameValue").value;
  var phone = document.getElementById("editPhoneValue").value;*/
  var email = document.getElementById("staffEmail").value;

  return axios({
    method: 'post',
    url: 'https://api.gland84.io.vn:8447/gland/api-authen/register',
    responseType: 'json',
    data: {
      username: username,
      password: password,
      email: email,
      departmentId: departmentId,
      storeId: storeId
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  });
}
