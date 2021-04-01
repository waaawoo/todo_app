import React from 'react'

class Todo extends React.Component{
  render(){

    // propsを受け取る
    const { text, completed } = this.props
    return (
      <div>
        <label htmlFor="">
          {/* checkedに状態を渡す */}
          <input
            type="checkbox"
            checked={completed}
            onChange={this.handleChangeCompleted}
          />
          {/* jsxで変数を使用する場合は{}を使う */}
          {text}
        </label>
        <button>編集</button>
        <button>削除</button>
      </div>
    );
  }

  // check boxの状態をjsで管理する関数
  handleChangeCompleted = () => {
    // 親からonChangeを渡す（TODOに記載している）
    // リストのIdを渡す
    const { onChange, id, completed } = this.props
    // クリックするとBooleanが反転する
    onChange(id, !completed);

  }
}

export default Todo;
