

var data = ["siva", "vinod" , "sai"];

var HelloWorld = React.createClass ({
  render: function () {
    return (
      <div> Hello World  {this.props.name}</div>
     );
  }
});

var ShowWish = React.createClass ({
  render: function () {
    var wishes = this.props.data.map(function (i) {
      return (<HelloWorld name={i} />);
    });
    return (
      <div> {wishes} </div>
    );
  }
});

ReactDOM.render(
  <ShowWish data={data} />,
  document.getElementById('content')
);
