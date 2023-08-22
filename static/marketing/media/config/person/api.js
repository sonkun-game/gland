import axios from "axios";

export function createPersonMediaConfig(storeId) {
  var name = document.getElementById("editPersonMediaValue").value;
  axios({
    method: 'post',
    url: 'http://103.142.26.40:8080/Spa/marketing/api/person-config/create',
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

export async function getPersonMediaConfig(pageNum, storeId) {
  let url;
  if (pageNum != null)
    url = 'http://103.142.26.40:8080/Spa/marketing/api/person-config/all?pageNum=' + pageNum + '&storeId=' + storeId;
  else url = 'http://103.142.26.40:8080/Spa/marketing/api/person-config?&storeId=' + storeId;

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
export function editPersonMediaConfig(id) {
  var name = document.getElementById("MP-" + id).value;
  axios({
    method: 'put',
    url: 'http://103.142.26.40:8080/Spa/marketing/api/person-config/edit/' + id + '?name=' + name,
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
