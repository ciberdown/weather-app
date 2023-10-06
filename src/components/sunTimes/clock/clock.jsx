import React, { Component } from "react";
import "./clock.scss";

export default class Clock extends Component {
  render() {
    return (
      <div className={"clock clock-mobile "+this.props.class} >
        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${this.props.time.getHours() * 30}deg)`,
          }}
        />
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${this.props.time.getMinutes() * 6}deg)`,
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${this.props.time.getSeconds() * 6}deg)`,
          }}
        />
      </div>
    );
  }
}
