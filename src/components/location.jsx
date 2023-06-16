import "../css-components/location.css";

function Location({ data }) {
  return (
    <div className="container location-title">
      <h4>{data.name},</h4>
      <h4>{data.region},</h4>
      <h4>{data.country}</h4>
    </div>
  );
}

export default Location;
