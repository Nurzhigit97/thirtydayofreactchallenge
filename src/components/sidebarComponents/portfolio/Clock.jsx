// function FormattedDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }
import { Component } from "react";
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  // обновляем state и вызываем date каждую секунду
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  // удаляем state
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // вызывает
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        {/*Вызываем this.state from constructor*/}{" "}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
