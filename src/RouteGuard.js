import React, { Component } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
let prevLocation, location, action, unBlock;
class _GuardHelper extends Component {
  componentDidMount() {
    unBlock = this.props.history.block((newLocation, ac) => {
      prevLocation = this.props.location;
      location = newLocation;
      action = ac;
      return "";
    });
  }
  componentWillUnmount() {
    unBlock();
  }

  render() {
    return null;
  }
}

const GuardHelper = withRouter(_GuardHelper);
class RouteGuard extends Component {
  handleConfirm = (msg, commit) => {
    if (this.props.onBeforeChange) {
      this.props.onBeforeChange(
        prevLocation,
        location,
        action,
        commit,
        unBlock
      );
    } else {
      commit(true);
    }
  };
  render() {
    return (
      <Router getUserConfirmation={this.handleConfirm}>
        <GuardHelper />
        {this.props.children}
      </Router>
    );
  }
}
export default RouteGuard;
