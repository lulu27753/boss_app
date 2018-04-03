const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRouter = require('./user');

// 新建app
const app = express()

// 可以接收post请求传过来的数据
app.use(bodyParser.json())

app.use(cookieParser())

// 只要与“/user”相关的子路由设置为userRouter
app.use('/user/', userRouter);
app.listen(9093, function () {
  console.log('Node app start at port 9093');
})
