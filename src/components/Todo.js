import React from 'react'

class Todo extends React.Component{
  render(){

    // propsを受け取る
    const { text } = this.props
    return (
      <div>
        <label htmlFor="">
          <input type="checkbox"/>
          {/* jsxで変数を使用する場合は{}を使う */}
          {text}
        </label>
        <button>編集</button>
        <button>削除</button>
      </div>
    );
  }
}

export default Todo;
