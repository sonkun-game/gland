import axios from "axios";

export function createServiceMediaConfig(storeId) {
  var name = document.getElementById("editServiceValue").value;
  axios({
    method: 'post',
    url: 'http://103.142.26.40:8080/Spa/marketing/api/service-config/create',
    responseType: 'json',
    data: {
      storeId: storeId,
      name: name,
      action: 1
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
export async function getServiceMediaConfig(pageNum, storeId) {
  let url;
  if (pageNum != null)
    url = 'http://103.142.26.40:8080/Spa/marketing/api/service-config/all?pageNum=' + pageNum + '&storeId=' + storeId;
  else url = 'http://103.142.26.40:8080/Spa/marketing/api/service-config?&storeId=' + storeId;

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
export function editServiceMediaConfig(id) {
  var name = document.getElementById("SV-" + id).value;
  axios({
    method: 'put',
    url: 'http://103.142.26.40:8080/Spa/marketing/api/service-config/edit/' + id + '?name=' + name,
    responseType: 'json',
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
export function deleteServiceMediaConfig(id) {
  axios({
    method: 'post',
    url: 'http://103.142.26.40:8080/Spa/marketing/api/service-config/delete/' + id,
    responseType: 'json',
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
