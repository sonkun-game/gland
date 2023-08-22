import axios from "axios";
export async function getWallets(pageNum, storeId) {
  let url = 'http://103.142.26.40:8080/Spa/marketing/api-wallet/all?storeId='+storeId;
  if(pageNum!=null) url+='&pageNum='+pageNum;
  try {
    const response = await axios.get(url , {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("jwt")
      }
    });
    var resp=  response.data;
    return resp;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function getWalletWithoutPage(storeId) {
  let url = 'http://103.142.26.40:8080/Spa/marketing/api-wallet?storeId='+storeId;
  try {
    const response = await axios.get(url , {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("jwt")
      }
    });
    var resp=  response.data;
    return resp;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
