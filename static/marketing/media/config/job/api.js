import axios from "axios";

export function createJobMediaConfig(storeId) {
  var name = document.getElementById("editJobValue").value;
  var days = document.getElementById("editJobDaysValue").value;
  var hour = document.getElementById("editJobHourValue").value;
  var status = document.getElementById("editJobStatusValue").value;
  axios({
    method: 'post',
    url: 'http://103.142.26.40:8080/Spa/marketing/api/job-config/create',
    responseType: 'json',
    data: {
      name: name,
      action: 1,
      storeId: storeId,
      days: days,
      hour: hour,

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
export async function getJobMediaConfig(pageNum, storeId) {
  let url;
  if (pageNum != null)
    url = 'http://103.142.26.40:8080/Spa/marketing/api/job-config/all?pageNum=' + pageNum + '&storeId=' + storeId;
  else url = 'http://103.142.26.40:8080/Spa/marketing/api/job-config?&storeId=' + storeId;

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
export function deleteStatusMediaConfig(id) {
  axios({
    method: 'post',
    url: 'http://103.142.26.40:8080/Spa/marketing/api/job-config/delete/' + id,
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
