/**
 * date         : 2021.09.10
 * creater      : suyeong.yoo
 * description  : common ajax network
 **/
import axios from "axios";  // ajax network

/* config */
// const DOMAIN = "http://localhost";
const DOMAIN = "http://"+window.location.hostname;
console.log(window.location.hostname);

/* axios config */
// header
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.post['accept'] = 'application/json';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Authorization'] = 'Basic Og==';
// etc
axios.defaults.withCredentials = true; // cookie data response
axios.defaults.responseType = 'json';
// access token change
axios.interceptors.request.use((res) => {
    const access_token = window.sessionStorage.getItem('access_token');
    res.headers.Authorization =  access_token ? `Bearer ${access_token}` : '';
    return res;
});

/* component */
//@ from data default
export const _ajaxForm = (_method, _url, _data, _success, _fail) => {
    return axios({
        method: _method,
        url: DOMAIN + _url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: _data
    });
    // .catch((err) => {
    //   if (err.response) {
    //     // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
    //     console.log(err.response.data);
    //     console.log(err.response.status);
    //     console.log(err.response.headers);
    //   }
    //   else if (err.request) {
    //     // 요청이 이루어 졌으나 응답을 받지 못했습니다.
    //     // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
    //     // Node.js의 http.ClientRequest 인스턴스입니다.
    //     console.log(err.request);
    //   }
    //   else {
    //     // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
    //     console.log('Error', err.message);
    //   }
    //   console.log(err.config);
    // });
};

//@ from data async
export const _ajaxFormAsync = async (_method, _url, _data, _success, _fail) => {
    return axios({
        method: _method,
        url: DOMAIN + _url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: _data
    })
        .then((res) => ({
            type: _success,
            payload: res.data
        }))
        .catch((err) => ({
            type: _fail,
            payload: err.response.data
        }));
};

//@ get params default
export const _ajaxGetJson = (_method, _url, _data, _success, _fail) => {
    return axios({
        method: _method,
        url: DOMAIN + _url,
        headers: {
            'Content-Type': 'applicapplication/json'
        },
        params: _data
    });
};

//@ get params async
export const _ajaxGetJsonAsync = async (_method, _url, _data, _success, _fail) => {
    return axios({
        method: _method,
        url: DOMAIN + _url,
        headers: {
            'Content-Type': 'applicapplication/json'
        },
        params: _data
    })
        .then((res) => ({
            type: _success,
            payload: res.data
        }))
        .catch((err) => ({
            type: _fail,
            payload: err.response.data
        }));
};

//@ post data default
export const _ajaxPostJson = (_method, _url, _data, _success, _fail) => {
    return axios({
        method: _method,
        url: DOMAIN + _url,
        headers: {
            'Content-Type': 'applicapplication/json'
        },
        data: _data
    });
};

//@ post data async
export const _ajaxPostJsonAsync = async (_method, _url, _data, _success, _fail) => {
    return axios({
        method: _method,
        url: DOMAIN + _url,
        headers: {
            'Content-Type': 'applicapplication/json'
        },
        data: _data
    })
        .then((res) => ({
            type: _success,
            payload: res.data
        }))
        .catch((err) => ({
            type: _fail,
            payload: err.response.data
        }));
};

//@ post data async
export const _ajaxPostFormDataAsync = async (_method, _url, _data, _success, _fail) => {
    return axios({
        method: _method,
        url: DOMAIN + _url,
        headers: {
            'accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        data: _data
    })
        .then((res) => ({
            type: _success,
            payload: res.data
        }))
        .catch((err) => ({
            type: _fail,
            payload: err.response.data
        }));
};

//@ post data async
// Excel File Download Popup Activate
export const _ajaxPostExcelDataAsync = async (_method, _url, _data, _fail) => {
    return axios({
        method: _method,
        url: DOMAIN + _url,
        headers: {
            "Content-Type": "application/octet-stream",
            "Content-Disposition": "attachment;filename=excel_download.xlsx"
        },
        data: _data,
        responseType: 'blob'
    })
        .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "excel_download.xlsx");
            document.body.appendChild(link);
            link.click();
        })
        .catch((err) => ({
            type: _fail,
            payload: err.response.data,
        }));
};