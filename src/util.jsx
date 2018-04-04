export function getRedirectPath({role, avator}) {
	// 根据用户信息，返回跳转页面地址
	// user.role 分别跳转到'/custom' | '/service'
	// user.avator 分别跳转到'/custominfo' | '/serviceinfo'
	let url;
	if (!avator) {
		url = `/${role}info`;
	}
	return url;
}