import "../css-components/forecastDay.css";

function ForecastDays({ time, dayCondition }) {
  const dayInfo = dayCondition.day;
  const condition = dayCondition.day.condition;
  const dates = new Date(time);
  const date = dates.getDate();
  const day = dates.getDay();
  const days = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ];
  const month = dates.getMonth();
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const year = dates.getFullYear();

  return (
    <div className="forecast-day">
      <h4 className="date">
        {days[day]}, <br></br>
        {date} {months[month]} {year}
      </h4>
      <div className="line"></div>
      <h4 className="temp">{Math.floor(dayInfo.avgtemp_c)} &deg; C</h4>
      <h4 className="forecast">{condition.text}</h4>
      <img src={condition.icon} alt={condition.text} />
    </div>
  );
}

export default ForecastDays;
