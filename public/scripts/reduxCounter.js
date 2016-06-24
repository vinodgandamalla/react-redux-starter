
//Reducer

function counter (state = 0, action) {
  switch (action.type){
    case "INC":
       return state + 1;
    case "DEC":
      return state - 1 ;
    default:
      return state;
    }
}

const store = Redux.createStore (counter);

var Counter = React.createClass ({
  render: function () {
    return (
      <div>
      <div>{this.props.data}</div>
      <input type="button" value="+" onClick={this.props.inc} />
      <input type="button" value="-" onClick={this.props.dec} />
      </div>
     );
  }
});


function renderMe () {

ReactDOM.render(
  <Counter
    data= {store.getState()}
    inc = {function () {
      store.dispatch({type: "INC"});
    }}
    dec = {function () {
      store.dispatch({type: "DEC"});
    }}/>,
  document.getElementById('content')
);
}

store.subscribe(renderMe);
renderMe();
