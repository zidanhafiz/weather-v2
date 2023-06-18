import { useEffect, useState } from "react";
import BackNavigation from "../components/backNavigation";
import Placeholders from "../components/placeholders";
import ForecastDays from "../components/forecastDays";
import Footer from "../components/footer";

function DaysForecast({ input }) {
  const [location, setLocation] = useState({});
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const req = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=fd7f5210bd364282b1f91839231306&q=${input}&days=3&aqi=no&alerts=no`
      );
      const response = await req.json();
      setLocation(response.location);
      setDays(response.forecast.forecastday);
      setLoading(false);
    };
    getData();
  }, [input]);

  return (
    <div className="days-forecast">
      <BackNavigation link="/" />
      {loading ? (
        <Placeholders />
      ) : (
        <>
          <section className="header">
            <h4>CUACA 3 HARI KE DEPAN</h4>
            <p>
              {location.name}, {location.region}
            </p>
          </section>
          <section className="forecast-days">
            {days.map((e) => {
              return (
                <ForecastDays
                  time={e.date}
                  dayCondition={e}
                  key={e.date_epoch}
                />
              );
            })}
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default DaysForecast;
