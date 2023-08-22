import axios from "axios";
export async function getAccountsFromApi(status, name, officeId, positionId, createdDate, pageNum, storeId, selectOption) {
  const url = `http://103.142.26.40:8080/Spa/marketing/api-account/all?storeId=`+storeId+`&pageNum=${pageNum}${status ? `&status=${status}` : ''}${name ? `&name=${name}` : ''}${officeId !== 0 ? `&officeId=${officeId}` : ''}${positionId !== 0 ? `&positionId=${positionId}` : ''}${createdDate ? `&createdDate=${createdDate}` : ''}`;

  try {
    const response = await axios.get(url , {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("jwt")
      }
    });
    var resp=  response.data.value;
    return resp;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
