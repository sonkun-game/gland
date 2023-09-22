import axios from "axios";
export async function getShopsFromApi(status, name) {
  console.log("getShopsFromApi is being commented !!")
  if (false) {
    try {
      const response = await axios.get('https://api.gland84.io.vn:8447/Total/api-store/all?status=' + status + '&name=' + name, {
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

export async function createShop(name, address, phone, status) {
  axios({
    method: 'post',
    url: 'https://api.gland84.io.vn:8447/Total/api-store/create',
    responseType: 'json',
    data: {
      name: name,
      address: address,
      phone: phone,
      status: status
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  }).then(function (response) {
    console.log(response);
    alert(response.data.message);
    location.reload()
  });
}

export async function editShop(name, address, phone, status, id) {
  axios({
    method: 'put',
    url: 'https://api.gland84.io.vn:8447/Total/api-store/edit/' + id,
    responseType: 'json',
    data: {
      name: name,
      address: address,
      phone: phone,
      status: status
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("jwt")
    }
  }).then(function (response) {
    console.log(response);
    alert(response.data.message);
    location.reload()
  });
}
