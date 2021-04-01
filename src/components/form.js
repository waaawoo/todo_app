import React from 'react'

class Form extends React.Component{
  // jsで入力値の取得するために記述していく

  // constructorはクラスをインスタンスかした時に呼ばれる処理
  constructor(props){
    // React.Componentのpropsを呼んでいる（親クラス）
    super(props);

    // 状態を作る
    this.state = {
      input: ''
    }
  }
  render(){
    return (
      <form action="">
          {/* valueに上で作成したstateを入れ、onChangeイベントにメソッドを指定 */}
          <input type="text" value={this.state.input} onChange={this.handleChange} />
          <button>追加</button>
        </form>
    );
  }

  handleChange = e => {
    //setStateはthis.stateで作ったものにデータをセットする
    // e(イベントで)取得した入力をセット
    this.setState({ input: e.currentTarget.value })
  };
}

export default Form;
