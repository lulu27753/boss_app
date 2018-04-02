/*
* @Author: lulu27753
* @Date:   2018-04-02 17:18:56
* @Last Modified by:   lulu27753
* @Last Modified time: 2018-04-02 17:43:24
*/
const express = require('express')
const Router = express.Router()

Router.get('/info', function (req, res) {
	// 判断用户有没有cookie
	return res.json({code: 1})
})

module.exports = Router;
