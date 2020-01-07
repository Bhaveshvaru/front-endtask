import React, { Component } from "react";
import "./App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 90 },
  { name: "Group B", value: 70 },
  { name: "Group C", value: 30 }
];
const COLORS = ["#E8290B", "#FFF222", "#2ecc72"];

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div>
              <p class="hh"> ROAD SAFTY ANALYTICS</p>
            </div>
          </div>

          <div>
            <div>
              <LineChart
                width={700}
                height={450}
                data={this.state.items}
                margin={{
                  top: 25,
                  right: 30,
                  left: 10,
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
            </div>
            <div>
              <PieChart
                className="bb"
                width={800}
                height={400}
                onMouseEnter={this.onPieEnter}
              >
                <Pie
                  data={this.state.items}
                  cx={120}
                  cy={200}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="total_travel_duration"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>{" "}
            </div>
          </div>
        </div>
      </div>
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
