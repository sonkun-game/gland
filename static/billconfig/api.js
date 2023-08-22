import axios from "axios";
import moment from "moment";

export async function getAllOutcomeBillConfig(selectOption) {
  var url = 'http://103.142.26.40:8080/Total/api-billconfig/all-avail?status='+1+'&type='+0;
  axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  })
    .then(response => {
      // xóa dữ liệu cũ đi
      selectOption = [];
      var resArray = response.data;
      // gán giá trị mới
      resArray.forEach( (item) => {
        var newOption = {
          name : item.name,
          value : item.id
        }
        selectOption.push(newOption);
      });
      localStorage.setItem("billConfigOuts", JSON.stringify(selectOption));
    })
    .catch(error => {
      console.error(error)
    })
}

export async function getAllIncomeBillConfig(selectOption) {
  var url = 'http://103.142.26.40:8080/Total/api-billconfig/all-avail?status='+1+'&type='+1;
  // Gửi yêu cầu API và gán dữ liệu vào table.body
  axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  })
    .then(response => {
      // xóa dữ liệu cũ đi
      selectOption = [];
      var resArray = response.data;
      // gán giá trị mới
      resArray.forEach( (item) => {
        var newOption = {
          name : item.name,
          value : item.id
        }
        selectOption.push(newOption);
      });
      localStorage.setItem("billConfigIns", JSON.stringify(selectOption));
    })
    .catch(error => {
      console.error(error)
    })
}

export async function getAllBillConfig(pageNum, typConfig, statusConfig, body){
  var url = 'http://103.142.26.40:8080/Total/api-billconfig/all?pageNum=' + pageNum;
  if (typConfig!=null){
    url+="&type="+typConfig;
  }
  if (statusConfig!=null){
    url+="&status="+statusConfig;
  }

  // Gửi yêu cầu API và gán dữ liệu vào table.body
  axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  })
    .then(response => {
      body.splice(0, body.length);
      var resArray = response.data.content;

      resArray.forEach(item => {
        var row = [];
        row.push(moment(item.createdAt).format('YYYY-MM-DD HH:mm'));
        row.push(item.creator);
        row.push(item.billConfigName);
        var typeDisplay = "Phiếu thu";
        if(item.type === false){
          typeDisplay = "Phiếu chi";
        }
        row.push(typeDisplay);
        var billStatusDisplay = '1';
        if(item.billConfigStatus === false){
          billStatusDisplay = '0';
        }
        row.push(billStatusDisplay);
        row.push(item.billConfigId)
        console.log("row : ", row);
        body.push(row);
      });
      //return body;
    })
    .catch(error => {
      console.error(error)
    })
}

export async function createBillConfig(billName, billType){
  axios({
    method: 'post',
    url: 'http://103.142.26.40:8080/Total/api-billconfig/create?name=' + billName + '&type=' + billType,
    responseType: 'json',
    data: {
      name:billName,
      type:billType
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  }).then(function (response) {
    alert(response.data.message);
    window.location.reload();

  });
}
