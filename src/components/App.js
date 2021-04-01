import React from 'react';
import Form from './form'
import Select from './select'
import List from './list'
import AllDel from './AllDel'
class App extends React.Component{
  render(){
    return(
      <div>
        {/* フォーム */}
        <Form />

        {/* セレクト */}
        < Select  />

        {/* ul */}
        < List  />


        {/* allDel */}
        <AllDel />
      </div>
    );
  }
}

// 今後はこっちの書き方が主流
// const App = () => <div>App</div>

export default App;
