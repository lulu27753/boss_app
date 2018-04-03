/*
* @Author: lulu27753
* @Date:   2018-04-03 22:12:24
* @Last Modified by:   lulu27753
* @Last Modified time: 2018-04-03 22:26:24
*/
const utility = require('utility');
module.exports = {
	md5pwd: function (pwd) {
		const salt = 'ruowurenpeinidianpeiliuli,bianyimengweima,suichuerqi'
		return utility.md5(utility.md5(pwd + salt))
	}
}
