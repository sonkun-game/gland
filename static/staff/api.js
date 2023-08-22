import axios from "axios";
export async function getStaffApi(status, name) {
  try {
    let url = 'http://103.142.26.40:8080/Spa/marketing/api-account/all'
    const response = await axios.get(url + status + '&name=' + name, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("jwt")
      }
    });
    return response.data.value;
  } catch (error) {
    console.error('Error fetching shop data:', error);
    throw error;
  }
}

export async function createAccountApi() {
  axios({
    method: 'post',
    url: 'http://103.142.26.40:8080/Spa/marketing/api-account/register',
    responseType: 'json',
    data: {
      name: name,
      address: address,
      phone: phone,
      status: status
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
