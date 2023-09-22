import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { sendPostApi } from "../../plugins/api";

export async function getTaskList(storeId) {
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

export async function getTaskListPaging(department, pageNum,assignee, creator) {
  let url = "http://localhost:8082/task-api/all?pageNum=" + pageNum;
  if(department!=null){
    url+= "&department="+department
    if(assignee!=null){
      url+= "&assignee="+assignee
    }
    if(creator!= null) {
      url+= "&creator="+creator
    }
  }
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

export async function createTaskForDepartment(departmentKey) {
  var name = document.getElementById("all_mission_txtName").value;
  var description = document.getElementById("all_mission_txtDes").value;

  return axios({
    method: 'post',
    url: 'https://api.gland84.io.vn:8447/Spa/task-api/create',
    responseType: 'json',
    data: {
      name: name,
      description: description,
      departmentKey: departmentKey
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  });
}
