import React from 'react'

class CheckAll extends React.Component{
  render(){

    // 全てのチェックの判定
    const { allCompleted } = this.props;

    return (
      <label htmlFor="">
          {/* allCompletedがtrueかどうかで表示が変わる */}
          {/* checkedにjsの値を渡す場合はonChangeが必要 */}
          <input type="checkbox" checked={allCompleted} onChange={this.handleChange} />
          {/* 参考演算子allCompletedが全てTrueかFalseで表示を変更 */}
          全て{ allCompleted ? "未完了" : "完了" }する
      </label>
    );
  }

  handleChange = () => {
    const { onChange, allCompleted } = this.props
    // 現在のCompletedを逆転させる
    onChange(!allCompleted)
  }
}

export default CheckAll
