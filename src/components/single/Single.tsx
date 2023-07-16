import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: {
      name: string;
      color: string;
    }[];
    data: object[];
  };
  activities?: {
    id: number;
    text: string;
    time: string;
  }[];
};

const Single = (props: Props) => {
  return (
    <div className="single">
      <div className="left">
        <div className="info">
          {props.img && <img src={props.img} alt="image" />}
          <span className="name">{props.title}</span>
          <button className="update">Update</button>
        </div>
        <div className="details">
          {Object.entries(props.info).map((item) => (
            <div className="item" key={item[0]}>
              <span className="title">{item[0]}</span>
              <span className="value">{item[1]}</span>
            </div>
          ))}
        </div>
        <div className="chart">
          {props.chart && (
            <ResponsiveContainer width="99%" height={400}>
              <LineChart
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((item) => (
                  <Line
                    key={item.name}
                    type="monotone"
                    dataKey={item.name}
                    stroke={item.color}
                  />
                ))}
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
      <div className="right">
        <h2>Latest Activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity) => (
              <li key={activity.id}>
                <div className="activity">
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;
