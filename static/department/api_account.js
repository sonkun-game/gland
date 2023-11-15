import axios from "axios";
export async function getAllAccounts(pageNum, storeId) {
  let url = process.env.API_URL + 'api-account/all?storeId=' + 1 + '&pageNum=' + pageNum;
  // if (pageNum != null)
  //   url = process.env.API_URL + 'api-account/all?storeId=' + 1 + '&pageNum=' + 0;
  // else url = process.env.API_URL + 'api-account?&storeId=' + 1;
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
    return [];
  }
}

export async function createAccountsForDepartment(storeId, departmentKey) {
  var username = document.getElementById("editUsernameValue").value;
  var password = document.getElementById("editPasswordValue").value;
  var name = document.getElementById("editNameValue").value;
  var phone = document.getElementById("editPhoneValue").value;
  var email = document.getElementById("editEmailValue").value;
  var position = document.getElementById("editPositionValue").value;
  axios({
    method: 'post',
    url: 'https://api.smshub.io.vn:8447/Spa/api-authen/register?storeId=' + storeId,
    responseType: 'json',
    data: {
      username: username,
      password: password,
      fullName: name,
      phone: phone,
      email: email,
      position: position,
      departmentKey: departmentKey
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  }).then(function (response) {
    console.log(response);
    alert(response.data.message);
    location.reload()
  });
}

export async function getAllAccountsPagingForDepartment(storeId,pageNum, department) {
  let url = "https://api.smshub.io.vn:8447/Spa/api-account/all"+"?storeId=1&pageNum="+pageNum+"&department="+department;
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
