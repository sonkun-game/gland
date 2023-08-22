import axios from "axios";
import moment from "moment";
import numeral from "numeral";

export async function getAllBill(type, activity, purpose, departmentId, pageNum, fromDate, toDate, body) {
  var url = 'http://103.142.26.40:8080/Total/api-bill/pay/all?type=' + type + '&purpose=' +
    purpose + '&departmentId=' + departmentId + '&pageNum=' + pageNum;
  if (fromDate != null) {
    url += '&fromDate=' + fromDate;
  }
  if (toDate != null) {
    url += '&toDate=' + toDate;
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
      var resArray = response.data.value.content;

      resArray.forEach(item => {
        var row = [];
        row.push(moment(item.createdAt).format('YYYY-MM-DD HH:mm'));
        row.push(item.creator);
        row.push(item.payPerson);
        row.push(item.billConfigName);
        row.push(numeral(item.amount).format('0,0'));
        row.push(item.creator);
        row.push(item.nameDepartment)
        row.push(item.status);
        row.push(item.note);
        row.push(item.billId) // bill id sẽ là row cuối cùng
        body.push(row);
      });
      //console.log("resArray : ", resArray);
    })
    .catch(error => {
      console.error(error)
    })
}
