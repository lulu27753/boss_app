import React from 'react';
import { connect } from 'react-redux';

import { add, remove, addAsync } from './index.redux';

class App extends React.Component {
    render() {
      const num = this.props.num;
      const add = this.props.add;
      const remove = this.props.remove;
      const addAsync = this.props.addAsync;
      return (
        <div>
          <h1>现在{num}</h1>
          <button onClick={() => add()}>增加</button>
          <button onClick={() => remove()}>减少</button>
          <button onClick={() => addAsync()}>拖两天再给</button>
        </div>
      )
    }
}
// 从store里面提取你需要的数据
const mapStatetoProp = (state) => {
  return { num : state }
}
const actionCreators = { add, remove, addAsync };
// connect()会把store中的state和action映射到props中
App = connect(mapStatetoProp, actionCreators)(App);
export default App;
