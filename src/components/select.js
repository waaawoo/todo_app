import React from 'react'

class Select extends React.Component{
  render(){
    return (
      <>
      <label htmlFor="">
          <input type="checkbox"/>
          全て完了にする
      </label>

      <select name="" id="">
          <option value="">全て</option>
          <option value="">未完了</option>
          <option value="">完了済み</option>
        </select>
        </>
    );
  }
}

export default Select;
