import "../css-components/footer.css";

function Footer() {
  return (
    <div className="container footer">
      <p className="footer-paragraph">
        Powered by{" "}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
      </p>
    </div>
  );
}

export default Footer;
