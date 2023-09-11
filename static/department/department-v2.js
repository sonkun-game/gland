import axios from "axios";

export async function getAllDepartPagingV2(storeId, pageNum) {
  let url = "https://103.142.26.40:8445/gland/api-department/all?storeId="+storeId+"&pageNum="+pageNum;
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

export async function createDepartmentsAll(storeId) {
  var departmentName = document.getElementById("departmentName").value;

  return axios({
    method: 'post',
    url: 'https://103.142.26.40:8445/gland/api-department/create',
    responseType: 'json',
    data: {
      name: departmentName,
      storeId: storeId
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  });
}
