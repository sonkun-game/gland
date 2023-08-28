import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { sendPostApi } from "../../plugins/api";

export async function getAllMission(storeId) {
  let url = process.env.API_URL + 'api-mission/?storeId=' + 1;
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

export async function getAllMissionPaging(storeId) {
  let url = "http://103.142.26.40:8080/Spa/api-mission/all?pageNum=0&storeId=" + storeId;
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

export async function createMissionAll(storeId, misionTable) {
  var name = document.getElementById("all_mission_txtName").value;
  var description = document.getElementById("all_mission_txtDes").value;
  var keyUUID = uuidv4();
  var url = 'http://103.142.26.40:8080/Spa/api-mission/create?storeId=' + storeId;

  let data = {
    name: name,
    storeId: storeId,
    description: description,
    keyUUID: keyUUID
  }

  sendPostApi(url, null ,data);

  if(misionTable) {
    misionTable.unshift(data);
  }

  return misionTable;
}
