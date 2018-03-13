import React from 'react';
import { add } from './index.redux';
class App extends React.Component {
    render() {
      const store = this.props.store;
      const num = store.getState();
      const add = this.props.add;
      const remove = this.props.remove;
      return (
        <div>
          <h1>现在{num}</h1>
          <button onClick={() => store.dispatch(add())}>增加</button>
          <button onClick={() => store.dispatch(remove())}>减少</button>
        </div>
      )
    }
}
export default App;
