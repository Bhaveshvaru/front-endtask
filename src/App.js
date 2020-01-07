import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class App extends Component {
  render() {
    return (
      <LineChart
        width={500}
        height={400}
        data={this.state.items}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="createdAt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="avgSpeed" stroke="#25CCF7" />
      </LineChart>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://intern-task-api.herokuapp.com/products")
      .then(res => res.json())
      .then(data => {
        this.setState({ items: data });
      })
      .catch(console.log);
  }
}

export default App;
