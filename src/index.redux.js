// 定义常量,方便多处引用
const ADD = 'increase'
const REMOVE = 'decrease'
// reducer根据老的state和action。生成新的state
export function counter(state=0, action) {
  switch (action.type) {
    case ADD:
      return state + 1;
    case REMOVE:
      return state - 1;
    default:
      return 10
  }
}
// 封装action对象
export function add() {
  return {type: ADD}
}
export function remove() {
  return {type: REMOVE}
}