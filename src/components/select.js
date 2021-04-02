import React from 'react'

class Select extends React.Component{
  render(){
    // 変数作成 親要素で受け取った値を入れている
    const { filter } = this.props
    return (
      // onChangeで呼ばれる関数を指定
      <select value={filter} name="" id="" onChange={this.handleChange}>
          <option value="All">全て</option>
          <option value="uncompleted">未完了</option>
          <option value="completed">完了済み</option>
      </select>
    );
  }

  handleChange = e =>{
    console.log(e.currentTarget.value)
    // 親から渡されたonChangeの関数を呼ぶようにする
    this.props.onChange(e.currentTarget.value);
  }
}

export default Select;
