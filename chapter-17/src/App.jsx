import React, { Component } from "react";

class Hello extends Component {
  constructor(props) {
    // cara memanggil props di class component
    super(props);
  }

  componentDidMount() {
    console.log("Component did mount dipanggil di komponen Hello");
    // fetch data dari API
  }

  componentDidUpdate() {
    console.log("Component did update dipanggil di komponen Hello");
    // ketika state elemet diperbarui
  }

  componentWillUnmount() {
    console.log("Component will unmount dipanggil di komponen Hello");
    // membersihkan event listener untuk hindari memory leak
  }
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, React!",
      showHello: true, // flag untuk show hide komponen hello
    };

    console.log("Contructor dipanggil dan komponen sudah siap");
  }

  changeMessage = () => {
    this.setState({ message: "Hello, Handsome!" });
  };

  showHideHello = () => {
    this.setState((prevState) => ({
      showHello: !prevState.showHello,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Change Message</button>
        <button onClick={this.showHideHello} style={{ marginLeft: "12px" }}>
          {this.state.showHello ? "Hide Hello" : "Show Hello"}
        </button>
        {this.state.showHello && <Hello message={this.state.message} />}
      </div>
    );
  }
}

export default App;
