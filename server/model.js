/*
* @Author: lulu27753
* @Date:   2018-04-02 17:33:38
* @Last Modified by:   lulu27753
* @Last Modified time: 2018-04-06 15:13:17
*/

// 数据库模型
const mongoose = require('mongoose');
// 链接mongo,并且使用kefu这个集合
const DB_URL = `mongodb://127.0.0.1:27017/kefu`;
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
  console.log(`mongo connect success`);
});

// 类似于mysql的表，mongo里有文档、字段的概念
// 通过mongoose操作mongodb，存储的就是json，相对mysql来说，要易用很多
const models = {
	user: {
		'user': {type: String, require: true}, // 用户名
		'pwd': {type: String, require: true}, // 密码
		'role': {type: String, require: true}, // 角色
		'avatar': {type: String}, // 头像
		'desc': {type: String}, // 简介
		'state': {type: String}, // 状态：在线online | 挂起offline | 小休rest
 	},
	chat: {

	},
	product: {

	}

};
for (m in models) {
	if (models.hasOwnProperty(m)) {
		mongoose.model(m, new mongoose.Schema(models[m]))
	}
}

module.exports = {
	getModel: function (name) {
		// 直接读取相应的模块
		return mongoose.model(name)
	}
};

