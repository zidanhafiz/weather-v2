import { useParams } from "react-router-dom";
import BackNavigation from "../components/backNavigation";
import CurrentDate from "../components/currentDate";
import Location from "../components/location";
import { useEffect, useState } from "react";
import Placeholders from "../components/placeholders";
import WeatherDisplay from "../components/weatherDisplay";
import OtherDetails from "../components/otherDetails";
import Footer from "../components/footer";

function HourDetailsPage({ input }) {
  const [hours, setHours] = useState([]);
  const [hour, setHour] = useState({});
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  function getTime(time) {
    const date = new Date(time);
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      timeStyle: "short",
    });
  }

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const req = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=fd7f5210bd364282b1f91839231306&q=${input}&days=1&aqi=no&alerts=no`
      );
      const response = await req.json();
      setLocation(response.location);
      setHours(response.forecast.forecastday[0].hour);
      setLoading(false);
    };
    getData();
  }, [params]);

  return (
    <div className="hour-details-page">
      <BackNavigation link="/" />
      {loading ? (
        <Placeholders />
      ) : (
        <>
          <Location data={location} />
          <CurrentDate />
          {hours.map((e) => {
            if (e.time_epoch == params.id) {
              return (
                <>
                  <time className="time">{getTime(e.time)}</time>
                  <WeatherDisplay data={e} />
                  <div className="background"></div>
                  <section className="hour-other-details">
                    <div className="col-a">
                      <OtherDetails
                        icon={
                          <i
                            className="fa-solid fa-droplet"
                            style={{ color: "#ffffff" }}
                          ></i>
                        }
                        name="Kelembapan"
                        value={[e.humidity, <span> %</span>]}
                      />
                      <OtherDetails
                        icon={
                          <i
                            className="fa-solid fa-cloud"
                            style={{ color: "#ffffff" }}
                          ></i>
                        }
                        name="Berawan"
                        value={[e.cloud, <span> %</span>]}
                      />
                      <OtherDetails
                        icon={
                          <i
                            className="fa-solid fa-cloud-rain"
                            style={{ color: "#ffffff" }}
                          ></i>
                        }
                        name="Peluang Hujan"
                        value={[e.chance_of_rain, <span> %</span>]}
                      />
                      <OtherDetails
                        icon={
                          <i
                            className="fa-solid fa-compass"
                            style={{ color: "#ffffff" }}
                          ></i>
                        }
                        name="Derajat Angin"
                        value={[e.wind_degree, <span>&deg;</span>]}
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
                        value={[e.wind_kph, <span> Kpj</span>]}
                      />
                      <OtherDetails
                        icon={
                          <i
                            className="fa-solid fa-sun"
                            style={{ color: "#ffffff" }}
                          ></i>
                        }
                        name="Indeks UV"
                        value={[e.uv, <span> dari 10</span>]}
                      />
                      <OtherDetails
                        icon={
                          <i
                            className="fa-solid fa-snowflake"
                            style={{ color: "#ffffff" }}
                          ></i>
                        }
                        name="Peluang Salju"
                        value={[e.chance_of_snow, <span> %</span>]}
                      />
                      <OtherDetails
                        icon={
                          <i
                            className="fa-solid fa-eye"
                            style={{ color: "#ffffff" }}
                          ></i>
                        }
                        name="Jarak Pandang"
                        value={[e.vis_km, <span> Km</span>]}
                      />
                    </div>
                  </section>
                </>
              );
            }
          })}
          <Footer></Footer>
        </>
      )}
    </div>
  );
}

export default HourDetailsPage;
