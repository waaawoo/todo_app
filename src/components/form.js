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
      <form onSubmit={this.handleSubmit} >
          {/* valueに上で作成したstateを入れ、onChangeイベントにメソッドを指定 */}
          <input type="text" value={this.state.input} onChange={this.handleChange} />
          <button>追加</button>
        </form>
    );
  }

  // 入力をjsで取得する関数
  handleChange = e => {
    //setStateはthis.stateで作ったものにデータをセットする
    // e(イベントで)取得した入力をセット
    this.setState({ input: e.currentTarget.value })
  };

  // submitされた時の処理する関数
  handleSubmit = e =>{
    e.preventDefault(); // http送信を止めている(デフォルトの挙動を止める)
    this.props.onSubmit(this.state.input) //submitした時にApp.jsのpropsを渡す
    this.setState({input: ''}); //submitされたら中身を消す
  }
}

export default Form;
