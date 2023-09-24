import axios from "axios";

const defaulToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjkwOTUzNzI2LCJleHAiOjE3NTE0MzM3MjZ9.pvVOd6xKmwSYalPlO9SUyumsWJeimJaENY5X3a15wCHcqfqseImWXCE0DHRqdpMvPLX8iRUUCaUILG-iiCG6Yw';

const defaultData = {
    url: "",
    header: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + defaulToken 
    }
}

const validateAPI = function (url, header) {
    let check = true;
    let message = "";

    if (!url) {
        check = false;
        message += ", url is Null!";
    }

    return {
        check: check,
        message: message,
    };
}

const checkJwT = function() {
    const jwt = localStorage.getItem('jwt');
    if(jwt) {
        let data = {
            url: "",
            header: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwt 
            }
        }
        return data;
    }
    return defaultData;
}
/**
 * Send a GET api for collecting data
 * @param {*} url
 * @param {*} header
 * @returns
 */
export const sendGetApi = async function (url, header) {
    const test = validateAPI(url, header);
    let dataAuthen = checkJwT();
    // send api
    if (test.check) {
        try {
            const response = await axios.get(url, {
                headers: dataAuthen.header
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    } else {
        console.error(test.message)
    }
    return [];
};

/**
 * Send a POST api for update data
 * @param {*} url
 * @param {*} header
 * @returns
 */
export const sendPostApi = async function (url, header, data) {
    const test = validateAPI(url, header);
    let dataAuthen = checkJwT();
    if (test.check) {
        axios({
            method: 'post',
            url: url ? url : dataAuthen.url,
            responseType: 'json',
            data: data,
            headers: dataAuthen.header
        }).then(function (response) {
            console.log(response);
            return response;
        }).catch((error) => {
            console.error(error)
        });
    } else {
        console.error(test.message)
    }
    return {
        status: "fail",
        message: test.message
    };
};


export const sendPutApi = async function (url, header) {
    const test = validateAPI(url, header);
    let dataAuthen = checkJwT();
    if (test.check) {
        axios({
            method: 'put',
            url: url ? url : dataAuthen.url,
            responseType: 'json',
            headers: dataAuthen.header
        }).then(function (response) {
            console.log(response);
            return response;
        }).catch((error) => {
            console.error(error)
        });
    } else {
        console.error(test.message)
    }
    return {
        status: "fail",
        message: test.message
    };
};

export const sendDeleteApi = async function (url, header) {
    const test = validateAPI(url, header);
    let dataAuthen = checkJwT();
    if (test.check) {
        axios({
            method: 'delete',
            url: url ? url : dataAuthen.url,
            responseType: 'json',
            headers: dataAuthen.header
        }).then(function (response) {
            console.log(response);
            return response;
        }).catch((error) => {
            console.error(error)
        });
    } else {
        console.error(test.message)
    }
    return {
        status: "fail",
        message: test.message
    };
};



