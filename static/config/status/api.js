 import { sendDeleteApi, sendGetApi, sendPostApi, sendPutApi } from "../../../plugins/api";


export async function getStatusMediaConfig(pageNum, storeId) {
  let url = process.env.API_URL + 'marketing/api/status-config/all?storeId=' + storeId + (pageNum == null ? '' : '&pageNum=' + pageNum);
  const resp = await sendGetApi(url, null);
  return resp;
}

export async function getStatusList(storeId) {
  let url = process.env.API_URL + 'marketing/api/status-config/all?storeId=' + storeId;
  const resp = await sendGetApi(url, null);
  return resp
}

export function createStatusMediaConfig(storeId) {
  var name = document.getElementById("editValue").value;
  let url = process.env.API_URL + 'marketing/api/status-config/create';
  let data = {
    storeId: storeId,
    name: name,
    action: 1
  };
  return sendPostApi(url, null, data);
}

export function editStatusMediaConfig(id, name) {
  let url = process.env.API_URL + 'marketing/api/status-config/edit/' + id + '?name=' + name;
  return sendPutApi(url, null);
}


export function deleteStatusMediaConfig(id) {
  let url = process.env.API_URL + 'marketing/api/status-config/delete/' + id;
  return sendDeleteApi(url, null);
}
