import React, { Component } from "react";

class DisplayCount extends Component {
  componentWillReceiveProps() {
    console.log("###### Child component life cycle methods ######", this.props);
    console.log("(1C)----- From componentWillReceiveProp ----->", this.props);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    let updateFlag = false;
    if (this.props.count !== nextProps.count) updateFlag = true;
    console.log("(2C)------From shouldComponentUpdate------>", this.props);
    console.log("----Start of shouldComponentUpdate----");
    console.log("Current props", this.props);
    console.log("Next props", nextProps);
    console.log("shouldComponentUpdate returns *** true *** ");
    console.log("----End of shouldComponentUpdate----");
    return updateFlag;
  }

  componentWillUpdate() {
    console.log("(3C)------From componentWillUpdate------>", this.props);
  }

  render() {
    const { count } = this.props;

    if (count === true) {
      console.log("(4C)------From Child render (INITIAL) ------>", this.props);
    } else console.log("(4C)------From Child render  ------>", this.props);
    return <p className="props"> Prop changes => {count}</p>;
  }

  componentDidUpdate() {
    console.log("(5C)------From componentDidUpdate------>", this.props);
    console.log("******* UPDATE phase ends here******");
    console.log(
      "###### Child component life cycle methods ends here ######",
      this.props
    );

    console.log(
      "###### Anything below is due to the updates done to Parent component ######",
      this.props
    );
  }
}

export default DisplayCount;
