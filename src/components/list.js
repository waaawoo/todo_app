import React from 'react'

class List extends React.Component{
  render(){
    return (
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
    );
  }
}

export default List;
