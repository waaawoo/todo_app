import React from 'react';
import Form from './form'
import Select from './select'
import Todo from './Todo'
// import AllDel from './AllDel'
import CheckAll from './CheckAll'

let currentId = 0;  // ID格納用変数

class App extends React.Component{
  constructor(props){
    super(props);

    // stateの作成
    this.state = {
      // filterのデフォルト値
      filter: 'all',
      todos:  [
      ]
    }

  }
  render(){

    // todosにthis.stateを渡すthis.stateからtodosを抜き出している
    // filterのデフォルト値セットして、selectに値をセットしている
    const { todos, filter } = this.state

    // フィルター機能の用TODO
    // completedの状態を見て表示を作る
    const filteredTodos = todos.filter(({completed}) =>{
      switch(filter){
        case 'all':
          return true;
        case 'uncompleted' :
          return !completed;
        case 'completed':
          return completed;
        default:
          return true;
      }
    })
    return(
      <div>
        {/* フォーム */}
        {/* イベント設置 */}
        <Form onSubmit={this.handleSubmit} />

        {/* 全てボタン */}
        {/* everyとは 配列に対して条件を書く trueならtrueを返す１つでもfalseならfalseを返す (({ completed }) => completed) */}
        <CheckAll allCompleted={
          // everyは要素が０でもtrueを返すため、それを防ぐ
          todos.length > 0 &&
          todos.every(({ completed }) => completed )}
          onChange={this.handleChangeAllCompleted}
        />

        {/* セレクト */}
        {/* 子に渡す関数をonChangeに設定し、関数を作成する */}
        < Select filter={filter} onChange={this.handleChangeSelect}/>

        {/* ul */}
        <ul>
          {/* 動的に回す
              map: 要素分回す
              key: reactのルールで渡す必要があるもの
          */}
          {filteredTodos.map(({ id, text, completed }) => (
            <li key={id}>
              {/* イベント設置 */}
              <Todo
                id={id}
                text={text}
                completed={completed}
                onChange={this.handleChangeCompleted}
                onDelete={this.handleClickDelete}
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
        {/* <AllDel /> */}
        <button onClick={this.handleClickDeleteCompleted}>完了を全て削除する</button>
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

  // 全て完了
  handleChangeAllCompleted = completed => {
    // 新しいTodosを作って入れている
    const newTodos = this.state.todos.map(todo => ({
      ...todo,
      completed,
    }));
    this.setState({ todos: newTodos });
  }

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

  // 完了したものを一括削除
  handleClickDeleteCompleted = () => {
    // 未完了のものだけnewTodosへ入る
    const newTodos = this.state.todos.filter(({ completed }) => !completed )
    this.setState({ todos: newTodos })
  }

  //
  handleChangeSelect = filter => {
    this.setState({filter})
  }

  handleClickDelete = id => {
    // 入ってきたID以外のもので新たな配列を作成する
    const newTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos: newTodos })
  }

}

// 今後はこっちの書き方が主流
// const App = () => <div>App</div>

export default App;
