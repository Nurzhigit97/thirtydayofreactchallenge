import { Component, createRef } from "react";
import "./EventHandles.scss";
class Circle extends Component {
  render() {
    return (
      <div
        className="dragger-element"
        onMouseDown={this.props.onStart}
        onTouchStart={this.props.onStart}
      >
        {this.props.children}
      </div>
    );
  }
}

class Dragger extends Component {
  constructor(props) {
    super(props);
    this.target = null;
    this.distX = 0;
    this.distY = 0;
  }

  onStart = (e) => {
    this.target = e.target;
    const evt = e.type === "touchstart" ? e.changedTouches[0] : e;
    this.distX = Math.abs(this.target.offsetLeft - evt.clientX);
    this.distY = Math.abs(this.target.offsetTop - evt.clientY);
    this.target.style.pointerEvents = "none";
  };

  onEnd = () => {
    this.target.style.pointerEvents = "initial";
  };

  onMove = (e) => {
    if (this.target) {
      if (this.target.style.pointerEvents === "none") {
        const evt = e.type === "touchmove" ? e.changedTouches[0] : e;
        this.target.style.left = `${evt.clientX - this.distX}px`;
        this.target.style.top = `${evt.clientY - this.distY}px`;
      }
    }
  };

  render() {
    const { children } = this.props;

    return (
      <div
        className="dragger-area"
        onMouseMove={this.onMove}
        onTouchMove={this.onMove}
        onMouseUp={this.onEnd}
        onTouchEnd={this.onEnd}
        role="presentation"
      >
        {children(this.onStart)}
      </div>
    );
  }
}

const EventHandle = () => {
  return <Dragger>{(onStart) => <Circle onStart={onStart} />}</Dragger>;
};

export default EventHandle;
