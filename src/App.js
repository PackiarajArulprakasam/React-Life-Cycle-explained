import React, { Component } from "react";
import ReactDOM from "react-dom";
import DisplayCount from "./displayCount";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("******* INITIALIZATION starts here ******");
    console.log("(1)----From constructor---->", this.state);
    console.log("******* INITIALIZATION ends here ********");
  }

  componentWillMount() {
    console.log("******* MOUNTING phase starts here ******");
    /*deprecated use componentDidMount or constructor
    instead, wont work in React v17
    Dont use this one or didMount for initializing,
    always use constructor for initializing  
    */
    console.log("(2)----From componentWillMount---->", this.state);
  }

  componentDidMount() {
    //use this for any inital service calls once the component is mounted
    console.log("(4)----From componentDidMount----->", this.state);
    this.increment();
    console.log("******* MOUNTING phase end here ******");
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    /* Will be called during the update phase
    Place to decide if the update to state should be 
    rendered or not;

    By default retruns true; 
    Pure components implements a shallow comparision to check if 
    the state or props has changed, then re-render the component.

    if set to false, then componentWillUpdate, render, componentDidUpdate
    will not be called.

    This takes the nextProps, nextState, nextContext as arguments. 
    They can be used agaist the current props, state and contenxt 
    to determine if re-rendering should be done or not.

    if this method is implemented, then it must retrun a boolean value;

    */
    let updateFlag = false;
    if (this.state.count !== nextState.count) {
      console.log("******* UPDATE phase starts here******");
      console.log("(5)----From shouldComponentUpdate----");
      console.log("----Start of shouldComponentUpdate----");
      console.log("Current state", this.state);
      console.log("Next state", nextState);
      console.log("shouldComponentUpdate returns *** true *** ");
      console.log("------End of shouldComponentUpdate----- ");
      updateFlag = true;
    } else {
      console.log("******* UPDATE phase starts here******");
      console.log("(5)----From shouldComponentUpdate----");
      console.log("----Start of shouldComponentUpdate----");
      console.log("shouldComponentUpdate returns *** false *** ");
      console.log("------End of shouldComponentUpdate----- ");
    }

    return updateFlag;
  }

  componentWillUpdate() {
    console.log("(6)------From componentWillUpdate------>", this.state);
  }

  increment = () => {
    console.log("###### STATE CHANGE HAPPENS HERE ######");
    console.log("---From increment method (count=count+1) --------");
    console.log("----Updated the count in state by this.setState---");
    this.setState({ count: this.state.count + 1 });
    console.log("###########################################");
  };

  doNothing = () => {
    console.clear();
    console.log("###### setState called but state UNCHANGED ######");
    this.setState({ ...this.state });
  };

  testUnmount = () => {
    console.clear();
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    }, 5000);
  };

  render() {
    const { count } = this.state;
    if (count === 0) {
      console.log("(3)-----------From render--------->", this.state);
      return (
        <div className="App">
          <p>Initial count {count}</p>
        </div>
      );
    } else if (count === 1) {
      console.log("(7)----From render (re-rendeing)---->", this.state);
      return (
        <div className="App">
          <p className="state">State changes => {count}</p>
          <button onClick={this.increment}> Test the prop changes</button>
          <DisplayCount count />
        </div>
      );
    } else {
      console.log("(7)----From render (re-rendeing)---->", this.state);
      return (
        <div className="App">
          <p className="state">State changes => {count}</p>
          <button onClick={this.increment}> State & prop changes</button> <br />
          <button onClick={this.doNothing}> State & prop unchanged</button>{" "}
          <br />
          <button onClick={this.testUnmount}> Test unmount</button>
          <DisplayCount count={count} />
        </div>
      );
    }
  }

  componentDidUpdate() {
    console.log("(8)------From componentDidUpdate------>", this.state);
    console.log("******* UPDATE phase ends here******");
  }

  componentWillUnmount() {
    console.log("(LAST)------From componentWillUnmount------>");
  }
}
export default App;
