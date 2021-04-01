import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div>
        <form action="">
          <input type="text"/>
          <button>追加</button>
        </form>

        <label htmlFor="">
          <input type="checkbox"/>
          全て完了にする
        </label>

        <select name="" id="">
          <option value="">全て</option>
          <option value="">未完了</option>
          <option value="">完了済み</option>
        </select>

        <ul>
          <li>
            <label htmlFor="">
              <input type="checkbox"/>
              項目
            </label>
            <button>編集</button>
            <button>削除</button>
          </li>

          <li>
            <label htmlFor="">
              <input type="checkbox"/>
              項目
            </label>
            <button>編集</button>
            <button>削除</button>
          </li>

          <li>
            <label htmlFor="">
              <input type="checkbox"/>
              項目
            </label>
            <button>編集</button>
            <button>削除</button>
          </li>

        </ul>

        <button>完了を全て削除する</button>
      </div>
    );
  }
}

// 今後はこっちの書き方が主流
// const App = () => <div>App</div>

export default App;
