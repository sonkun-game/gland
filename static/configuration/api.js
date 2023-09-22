import axios from "axios";

export async function getAllConfigPagingForDepart(department, pageNum, type) {
  let url = "https://api.gland84.io.vn:8447/Spa/config-api/all?pageNum=" + pageNum + "&department=" + department;
  if (type != null) url += "&type=" + type;
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
  }
}

export async function createConfigForDepartment(type, departmentKey) {
  var name = document.getElementById("editValue").value;
  var hours = document.getElementById("editJobHourValue").value;
  var days = document.getElementById("editJobDaysValue").value;

  return axios({
    method: 'post',
    url: 'https://api.gland84.io.vn:8447/Spa/config-api/create',
    responseType: 'json',
    data: {
      name: name,
      type: type,
      hours: hours,
      days: days,
      departmentKey: departmentKey
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  });
}
