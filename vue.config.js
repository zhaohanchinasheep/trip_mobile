module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:9527',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
					//需要重写的url
				}
			},
			'/test': {
				target: 'http://127.0.0.1:9527',
				changeOrigin: true,
				pathRewrite: {
					'^/test': ''
					//需要重写的url
				}
			}
		}

	}
}

// Node.js里面的模块
// module.exports = {
// 	// http://localhost:8080/api/test
// 	// =>
// 	// http://localhost:8000/test

// 	devServer: {
// 		proxy: {
// 			'/api': {
// 				// target: 'http://localhost:8000',
// 				target: 'http://django.t.mukewang.com',
// 				changeOrigin: true,
// 				pathRewrite: {
// 					// '^/api': ''   //需要rewrite重写的URL
// 				},
// 				'/test': {
// 					// target: 'http://localhost:8000',
// 					target: 'http://localhost:9527',
// 					changeOrigin: true,
// 					pathRewrite: {
// 						'^/test': '' //需要rewrite重写的URL
// 					}
// 				}
// 			}
// 		}
// 	}
// }