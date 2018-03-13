import React from 'react';
import { add } from './index.redux';
class App extends React.Component {
    render() {
      const store = this.props.store;
      const num = store.getState()
      return (
        <div>
          <h1>现在{num}</h1>
          <button onClick={() => store.dispatch(add())}>增加</button>
          <button>减少</button>
        </div>
      )
    }
}
export default App;
