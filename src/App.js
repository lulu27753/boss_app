import React from 'react';
class App extends React.Component {
    render() {
      const store = this.props.store;
      const num = store.getState();
      const add = this.props.add;
      const remove = this.props.remove;
      const addAsync = this.props.addAsync;
      return (
        <div>
          <h1>现在{num}</h1>
          <button onClick={() => store.dispatch(add())}>增加</button>
          <button onClick={() => store.dispatch(remove())}>减少</button>
          <button onClick={() => store.dispatch(addAsync())}>拖两天再给</button>
        </div>
      )
    }
}
export default App;
