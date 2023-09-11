import axios from "axios";

export async function getAllStaffsPaging(storeId, pageNum) {
  let url = "https://103.142.26.40:8445/gland/api-account/all?storeId="+storeId+"&pageNum="+pageNum;
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


export async function createStaffsAll(storeId) {
  var username = document.getElementById("staffName").value;
  var password = document.getElementById("staffPassword").value;
  /*var name = document.getElementById("editNameValue").value;
  var phone = document.getElementById("editPhoneValue").value;*/
  var email = document.getElementById("staffEmail").value;

  return axios({
    method: 'post',
    url: 'https://103.142.26.40:8445/gland/api-authen/register',
    responseType: 'json',
    data: {
      username: username,
      password: password,
      email: email,
      storeId: storeId
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  });
}
