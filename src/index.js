import { createStore } from 'redux';


// reducer根据老的state和action。生成新的state
function counter(state=0, action) {
  switch (action.type) {
    case 'increase':
      return state + 1;
    case 'decrease':
      return state - 1;
    default:
      return 10
  }
}
// 新建store,将reducer传入进去
const store = createStore(counter)
// 可以通过getState()获取store的状态
const init = store.getState()
console.log(init);

// 定义一个监听事件，获取当前store的状态
function listener() {
  const current = store.getState()
  console.log(current);
}
// 订阅一下该事件
store.subscribe(listener);
// 通过dispatch派发事件来更改store的状态,传递action对象
store.dispatch({type: 'increase'})
store.dispatch({type: 'increase'})
store.dispatch({type: 'decrease'})
store.dispatch({type: 'decrease'})
store.dispatch({type: 'decrease'})
store.dispatch({type: 'decrease'})


