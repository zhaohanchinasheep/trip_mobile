/**
 * 用来存放项目接口地址
 */
const apiHost = "http://127.0.0.1:8080/api/"

/**用户账户相关的接口 */
const AccountsApis={
	loginUrl:"/",
	logoutUrl:''
}

/**系统模块的接口 */
const SystemApis={
	sliderListUrl: apiHost+'system/slider/list/'
}


/**景点模块的接口 */
const SightApis={
	sightListUrl: apiHost+'sight/sight/list/'
}
export{
	AccountsApis,
	SystemApis,
	SightApis
}