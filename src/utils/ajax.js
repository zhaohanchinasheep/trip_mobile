import axios from 'axios'
export const ajax = axios.create({
	// 设置自定义请求头
	headers: {
		source: 'h5',
		icode: 'J55891F0A09C45D43',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	withCredentials: true
})

ajax.interceptors.request.use(function (config) {
	console.log('发送请求之前做的事情')
	return config;
}, function (error) {
	console.log('error！发送请求之前的错误信息')
	return Promise.reject(error);
});

ajax.interceptors.response.use(function (response) {
	console.log('对响应数据做的事情')
	return response;
}, function (error) {
	//统一错误处理
	if (error.response) {
		if (error.response.status === 401) {
			window.alert('未登陆')
		}
	}
	console.log('error！响应数据的错误信息')
	return Promise.reject(error);
});
