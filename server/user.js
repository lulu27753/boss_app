/*
* @Author: lulu27753
* @Date:   2018-04-02 17:18:56
* @Last Modified by:   lulu27753
* @Last Modified time: 2018-04-05 17:42:46
*/
const express = require('express');
const utils = require('./utils.js');

const models = require('./model.js');

const Router = express.Router();

const User = models.getModel('user');

const _filter = { 'pwd': 0, '__v': 0 }; // 用于过滤掉一些不发送到前端的字段

Router.get('/list', function (req, res) {
	// 查询用户列表
	User.find({}, function (err, doc) {
		return res.json(doc);
	});
});
// 点击登录按钮后跳转页面
Router.post('/login', function (req, res) {
	const { user, pwd } = req.body;
	// 第一个参数是查询条件，第二个是返回数据条件，属性设置为0，即不返回该字段
	User.findOne({user, pwd: utils.md5pwd(pwd)}, _filter, function (err, doc) {
		if (!doc) {
			return res.json({code: 1, msg: '用户名或者密码错误'});
		} else {
			res.cookie('userid', doc._id);
			return res.json({code: 0, data: doc});
		}
	});
});
// 点击注册按钮后跳转页面
Router.post('/register', function (req, res) {
	// 用户注册信息提交
	console.log(req.body); // @TODO SHANCHU
	const { user, pwd, role } = req.body;
	// 保证每个用户只注册一次
	User.findOne({user}, function (err, doc) {
		// 用户已注册
		if (doc) {
			return res.json({code: 1, msg: '用户已注册'});
		} else {
			// 用户未注册，则新增一条数据
			const userModel = new User({ user, role, pwd: utils.md5pwd(pwd), });
			userModel.save(function (err, doc) {
				if (err) {
					return res.json({code: 1, msg: '后端出错了！'});
				} else {
					// 数据新增成功，则直接授权显示用户已登录，并且将数据存储到cookie中
					const { user, type, _id } = doc;
					res.cookie('userid', _id);
					return res.json({code: 0, data: { user, type, _id}});
				}
			})
			// User.create({ user, pwd: utils.md5pwd(pwd), role }, function (err, doc) {
			// 	if (err) {
			// 		return res.json({code: 1, msg: '后端出错了！'});
			// 	} else {
			// 		// 数据新增成功，则直接授权显示用户已登录，并且将数据存储到cookie中
			// 		return res.json({code: 0});
			// 	}
			// });
		}
	});
});
Router.get('/info', function (req, res) {
	// 判断用户有没有cookie
	const {userid} = req.cookies;
	if (!userid) {
		// 用户ID不存在
		return res.json({code: 1});
	}
	User.findOne({_id: userid}, _filter, function (err, doc) {
		if (err) {
			return res.json({code: 1, msg: '后端出错了！'});
		}
		if (doc) {
			return res.json({code: 0, data: doc});
		}
	});
});

module.exports = Router;
