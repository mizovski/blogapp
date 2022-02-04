import React, {Component} from "react";

class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  counter = (counter) => {
    this.setState((prevState) => ({
      [counter]: prevState[counter] ? prevState[counter] + 1 : 1,
    }));
  };

  render() {
    return (
      <>
       
      </>
    );
  }
}

export default Likes;