import axios from "axios";
export async function getShopsFromApi(status, name) {
  console.log("getShopsFromApi is being commented !!")
  if (false) {
    try {
      const response = await axios.get('https://api.random-otp.io.vn:8450/Total/api-store/all?status=' + status + '&name=' + name, {
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
}
