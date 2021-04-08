import Axios from "axios";

const axiosInstance = Axios.create({
    baseURL: "http://localhost:4000/",
    timeout: 3000,
});

// axiosInstance.interceptors.request.use(function (config) {
//     config.headers.common["X-AUTH-TOKEN"] = sessionStorage.getItem("jwt");
//     config.headers.common["LANG"]  = sessionStorage.getItem("langCd");
//     return config;
// });

// axiosInstance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         var err = {};
//         var errorObj = error.toJSON();
//         if (errorObj.code === "ECONNABORTED") {
//             err = {
//                 msg: error.toJSON().message,
//                 code: error.toJSON().code
//             };
//         }
//         else if (error.response != null)
//         {
//             err = error.response.data;
//         }
//         else
//         {
//             err = {
//                 msg: error.toJSON().message,
//                 code: error.toJSON().code
//             };
//         }
//         return Promise.reject(err);
//     }
// );

export default axiosInstance;