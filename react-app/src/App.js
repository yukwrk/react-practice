import React, { Component } from "react";

const App = () => (<Counter></Counter>);

class Counter extends Component {
// constructorメソッドでインスタンスに対して初期化処理をしている
  constructor(props){
    super(props)
// 初期値を設定している
    this.state = { count: 1}
  }

  handlePlusButton = () => {
// 状態を変えるときはsetStateを使う
    this.setState({ count: this.state.count + 1})
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1})
  }

  render(){
  return (
    <React.Fragment>
      <div>count: {this.state.count}</div>
      {/* 参照するときはthis.state.fooの形 */}
      <button onClick={this.handlePlusButton}>+1</button>
      <button onClick={this.handleMinusButton}>-1</button>
    </React.Fragment>
    )
  }
}

export default App;
