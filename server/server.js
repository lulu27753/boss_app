const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const models = require('./model.js');
const User = models.getModel('user');
const Chat = models.getModel('chat');

// 新建app
const app = express();

// io 和 express结合，则需要统一http端口
const server = require('http').Server(app);
// 将其传入io对象，则io 与 express 关联
const io = require('socket.io')(server);

// socket.io的代码：on 监听；emit 触发；
// io是全局的连接，socket是当前的连接
io.on('connection', function (socket) {
	// 当前端发起联调成功后，后台会显示该条信息
	console.log('user login success');
	socket.on('sendmsg', function (data) {
		const { from, to, msgs } = data;
		const chatid = [from, to].sort().join('_');
		Chat.create({chatid, from, to, content: msgs}, function (err, doc) {
			io.emit('receiveMsg', Object.assign({}, doc._doc))
		})
		// console.log(data);
		// // 后台接收到前台发送的信息后广播到全局
		// io.emit('receiveMsg', data)
	})
})


const userRouter = require('./user');



// 可以接收post请求传过来的数据
app.use(bodyParser.json());

app.use(cookieParser());

// 只要与“/user”相关的子路由设置为userRouter
app.use('/user/', userRouter);


// app.listen(9093, function () {
//   console.log('Node app start at port 9093');
// })
// 将app改成server
server.listen(9093, function () {
  console.log('Node app start at port 9093');
})
