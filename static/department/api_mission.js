import axios from "axios";

export async function getAllMissionPagingForDepart(storeId, department) {
  let url = "https://api.gland84.io.vn:8447/Spa/api-mission/all?pageNum=0&storeId=" + storeId+"&department="+department;
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
