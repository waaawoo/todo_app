import React from 'react';
import Form from './form'
import Select from './select'
import Todo from './Todo'
import AllDel from './AllDel'

let currentId = 0;  // ID格納用変数

class App extends React.Component{
  constructor(props){
    super(props);

    // stateの作成
    this.state = {
      todos:  [
      ]
    }

  }
  render(){
    return(
      <div>
        {/* フォーム */}
        {/* イベント設置 */}
        <Form onSubmit={this.handleSubmit} />

        {/* セレクト */}
        < Select  />

        {/* ul */}
        <ul>
          {/* 動的に回す
              map: 要素分回す
              key: reactのルールで渡す必要があるもの
          */}
          {this.state.todos.map(({ id, text }) => (
            <li key={id}>
              <Todo text={text} />
            </li>

          ))}

          {/* componentの再利用ができる */}
          {/* <li> */}
            {/* textでpropsを渡せる *Todo.jsでthis.propsで受け取れる */}
            {/* <Todo id={0} text="項目1" /> */}
          {/* </li> */}
          {/* <li>
            <Todo id={0} text="項目2" />
          </li>
          <li>
            <Todo id={0} text="項目3" />
          </li> */}
        </ul>


        {/* allDel */}
        <AllDel />
      </div>
    );
  }

  handleSubmit = text =>{
    const newTodo = {
      id: currentId,
      text,
    }

    // ...this~ の書き方は一個ずつ配列を取り出し、最後に新しい要素をいれる書き方
    const newTodos = [...this.state.todos, newTodo]

    // stateを更新
    this.setState( { todos: newTodos } )
    currentId++;
  }
}

// 今後はこっちの書き方が主流
// const App = () => <div>App</div>

export default App;
