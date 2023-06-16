import { useEffect, useState } from "react";
import Footer from "./footer";
import SearchBar from "./searcBar";
import Location from "./location";
import CurrentDate from "./currentDate";
import WeatherDisplay from "./weatherDisplay";
import OtherDetails from "./otherDetails";
import HourForecast from "./hoursForecast";
import Placeholders from "./placeholders";
import Error400 from "./error400";

function HomeWelcome() {
  const [input, setInput] = useState();
  const [location, setLocation] = useState({});
  const [condition, setCondition] = useState({});
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getInput = (value) => {
    setInput(value);
  };

  useEffect(() => {
    if (input) {
      setLoading(true);
      const getData = async () => {
        try {
          const req = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=fd7f5210bd364282b1f91839231306&q=${input}&days=1&aqi=no&alerts=no`
          );
          const response = await req.json();
          setLocation(response.location);
          setCondition(response.current);
          setForecast(response.forecast.forecastday[0].hour);
          setLoading(false);
          setError(false);
        } catch (err) {
          setLoading(false);
          setError(true);
        }
      };
      getData();
    }
  }, [input]);
  return (
    <div className="container welcome">
      {!input && (
        <div className="welcome-text">
          <h1 className="welcome-title">SELAMAT DATANG DI</h1>
          <div className="highlight">
            <h1 className="welcome-title">MEGUMI WEATHER</h1>
          </div>
        </div>
      )}
      <SearchBar getInput={getInput} />
      {input &&
        (loading ? (
          <Placeholders />
        ) : error ? (
          <Error400 />
        ) : (
          <>
            <section className="home-header">
              <Location data={location} />
              <CurrentDate />
            </section>

            <section className="home-content">
              <WeatherDisplay data={condition} />
            </section>

            <section className="home-other-details">
              <div className="col-a">
                <OtherDetails
                  icon={
                    <i
                      className="fa-solid fa-droplet"
                      style={{ color: "#ffffff" }}
                    ></i>
                  }
                  name="Kelempaban"
                  value={[condition.humidity, <span> %</span>]}
                />
                <OtherDetails
                  icon={
                    <i
                      className="fa-solid fa-cloud"
                      style={{ color: "#ffffff" }}
                    ></i>
                  }
                  name="Berawan"
                  value={[condition.cloud, <span> %</span>]}
                />
              </div>
              <div className="col-b">
                <OtherDetails
                  icon={
                    <i
                      className="fa-solid fa-wind"
                      style={{ color: "#ffffff" }}
                    ></i>
                  }
                  name="Angin"
                  value={[Math.floor(condition.wind_kph), <span> Kpj</span>]}
                />

                <OtherDetails
                  icon={
                    <i
                      className="fa-solid fa-sun"
                      style={{ color: "#ffffff" }}
                    ></i>
                  }
                  name="Indeks UV"
                  value={[Math.floor(condition.uv), <span> dari 10</span>]}
                />
              </div>
            </section>

            <section className="hours-forecast">
              <div className="hours">
                {forecast.map((e) => {
                  return (
                    <HourForecast
                      time={e.time}
                      temp={e.temp_c}
                      icon={e.condition}
                      key={e.time_epoch}
                    />
                  );
                })}
              </div>
              <div className="nav-bottom">
                <p>Hari Ini</p>
                <p>3 Hari Kedepan</p>
              </div>
              <Footer />
            </section>
          </>
        ))}
      {!input && <Footer />}
    </div>
  );
}

export default HomeWelcome;
