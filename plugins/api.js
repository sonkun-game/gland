import axios from "axios";

const defaultData = {
    url: "",
    header: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjkwOTUzNzI2LCJleHAiOjE3NTE0MzM3MjZ9.pvVOd6xKmwSYalPlO9SUyumsWJeimJaENY5X3a15wCHcqfqseImWXCE0DHRqdpMvPLX8iRUUCaUILG-iiCG6Yw'
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
/**
 * Send a GET api for collecting data
 * @param {*} url
 * @param {*} header
 * @returns
 */
export const sendGetApi = async function (url, header) {

    const test = validateAPI(url, header);
    // send api
    if (test.check) {
        try {
            const response = await axios.get(url, {
                headers: defaultData.header
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
    if (test.check) {
        axios({
            method: 'post',
            url: url ? url : defaultData.url,
            responseType: 'json',
            data: data,
            headers: defaultData.header
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
    if (test.check) {
        axios({
            method: 'put',
            url: url ? url : defaultData.url,
            responseType: 'json',
            headers: defaultData.header
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
    if (test.check) {
        axios({
            method: 'delete',
            url: url ? url : defaultData.url,
            responseType: 'json',
            headers: defaultData.header
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



