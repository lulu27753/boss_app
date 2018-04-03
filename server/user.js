/*
* @Author: lulu27753
* @Date:   2018-04-02 17:18:56
* @Last Modified by:   lulu27753
* @Last Modified time: 2018-04-03 22:36:58
*/
const express = require('express');
const utils = require('./utils.js');

const models = require('./model.js');

const Router = express.Router();

const User = models.getModel('user');

Router.get('/list', function (req, res) {
	// 查询用户列表
	User.find({}, function (err, doc) {
		return res.json(doc);
	});
});
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
			User.create({ user, pwd: utils.md5pwd(pwd), role }, function (err, doc) {
				if (err) {
					res.json({code: 1, msg: '后端出错了！'});
				} else {
					// 数据新增成功，则直接授权显示用户已登录，并且将数据存储到cookie中
					res.json({code: 0});
				}
			});
		}
	});
});
Router.get('/info', function (req, res) {
	// 判断用户有没有cookie
	return res.json({code: 1})
});

module.exports = Router;
