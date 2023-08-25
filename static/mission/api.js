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