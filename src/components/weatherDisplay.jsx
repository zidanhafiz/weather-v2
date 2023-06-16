import "../css-components/weatherDisplay.css";

function WeatherDisplay({ data }) {
  const condition = data.condition;
  return (
    <div className="container weather-display">
      <section className="section-a">
        <img src={condition.icon} alt="weather" />
      </section>
      <section className="section-b">
        <h4>
          {Math.floor(data.temp_c)} <span>&deg; C</span>
        </h4>
        <p>{condition.text}</p>
      </section>
    </div>
  );
}

export default WeatherDisplay;
