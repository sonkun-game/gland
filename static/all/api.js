import axios from "axios";
export async function getAllAccounts(pageNum, storeId) {
  let url;
  if (pageNum != null)
    url = 'http://103.142.26.40:8080/Spa/api-account/all?storeId=' + storeId + '&pageNum=' + pageNum;
  else url = 'http://103.142.26.40:8080/Spa/api-account?&storeId=' + storeId;

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