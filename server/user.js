/*
* @Author: lulu27753
* @Date:   2018-04-02 17:18:56
* @Last Modified by:   lulu27753
* @Last Modified time: 2018-04-03 16:26:47
*/
const express = require('express')
const models = require('./model.js')

const Router = express.Router()

const User = models.getModel('user')

Router.get('/list', function (req, res) {
	// 查询用户列表
	User.find({}, function (err, doc) {
		return res.json(doc)
	})
});
Router.get('/info', function (req, res) {
	// 判断用户有没有cookie
	return res.json({code: 1})
});

module.exports = Router;
