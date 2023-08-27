import axios from "axios";
export async function getAllMission(storeId) {
  let url = process.env.API_URL + 'api-mission/?storeId=' + 1;
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

export async function getAllMissionPaging() {
  let url = "http://103.142.26.40:8080/Spa/api-mission/all?storeId=1&pageNum=0";
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
export async function createMissionAll(storeId) {
  var name = document.getElementById("missionNameValue").value;
  var description = document.getElementById("desMissionValue").value;
  axios({
    method: 'post',
    url: 'http://103.142.26.40:8080/Spa/api-mission/create?storeId=' + storeId,
    responseType: 'json',
    data: {
      name: name,
      description: description
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