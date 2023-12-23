import axios from "axios";

export async function getTaskListPaging(department, pageNum,assignee, creator) {
  let url = "https://api.random-otp.io.vn:8450/gland/task-api/all?pageNum=" + pageNum;
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
    url: 'https://api.random-otp.io.vn:8450/Spa/task-api/create',
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
