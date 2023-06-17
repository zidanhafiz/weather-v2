import { Link } from "react-router-dom";
import "../css-components/hourForecast.css";

function HourForecast({ time, temp, icon, id }) {
  const img = icon.icon;
  const date = new Date(time);
  return (
    <Link className="hour-details-link" to={`${id}`}>
      <div className="hour-forecast">
        <p>
          {date.toLocaleTimeString("en-US", {
            hour12: false,
            timeStyle: "short",
          })}
        </p>
        <img src={img} style={{ width: "38px" }} />
        <p>{Math.floor(temp)}&deg;</p>
      </div>
    </Link>
  );
}

export default HourForecast;
