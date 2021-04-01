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
          {this.state.todos.map(({ id, text, completed }) => (
            <li key={id}>
              {/* イベント設置 */}
              <Todo
                id={id}
                text={text}
                completed={completed}
                onChange={this.handleChangeCompleted}
               />
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

  // TODOのカラムのようなもの
  handleSubmit = text =>{
    const newTodo = {
      id: currentId,
      text,
      completed: false
    }

    // ...this~ の書き方は一個ずつ配列を取り出し、最後に新しい要素をいれる書き方
    const newTodos = [...this.state.todos, newTodo]

    // stateを更新
    this.setState( { todos: newTodos } )
    currentId++;
  };

  handleChangeCompleted = (id, completed) => {

    // mapで一個一個回して
    const newTodos = this.state.todos.map(todo => {
      // todoのIDとIDが一致したら
      if(todo.id === id){

        return {
          // id,text,completedを埋め込んだオブジェクトを作成している
          ...todo,
          // 変更する値だけ切り出している
          // completed: completed, keyとvalueが一緒なら省略可能
          completed,
          //
        }
      }
      // 変更がないものはそのまま返す
      return todo
    });

    // todosにnewTodos（定数）を代入
    this.setState({ todos: newTodos })
  };
}

// 今後はこっちの書き方が主流
// const App = () => <div>App</div>

export default App;
