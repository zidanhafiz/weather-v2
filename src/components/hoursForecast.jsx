import "../css-components/hourForecast.css";

function HourForecast({ time, temp, icon }) {
  const img = icon.icon;
  const date = new Date(time);
  return (
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
  );
}

export default HourForecast;
