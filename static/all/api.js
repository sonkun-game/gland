import axios from "axios";
export async function getAllAccounts(pageNum, storeId) {
  let url = process.env.API_URL + 'api-account/all?storeId=' + 1 + '&pageNum=' + 0;
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
    throw error;
  }
}
export async function getAllAccountsPaging() {
  let url = "https://api.random-otp.io.vn:8450/Spa/api-account/all?storeId=1&pageNum=0";
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
export async function createAccountsAll(storeId) {
  var username = document.getElementById("editUsernameValue").value;
  var password = document.getElementById("editPasswordValue").value;
  var name = document.getElementById("editNameValue").value;
  var phone = document.getElementById("editPhoneValue").value;
  var email = document.getElementById("editEmailValue").value;
  axios({
    method: 'post',
    url: 'https://api.random-otp.io.vn:8450/Spa/api-authen/register?storeId=' + storeId,
    responseType: 'json',
    data: {
      username: username,
      password: password,
      fullName: name,
      phone: phone,
      email: email,
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  }).then(function (response) {
    alert(response.data.message);
    location.reload()
  });
}
