import "../css-components/otherDetails.css"

function OtherDetails({ icon, name, value }) {
  return (
    <div className="other-details">
      <div className="col-a">
        <p className="icon">{icon}</p>
      </div>
      <div className="col-b">
        <p className="name">{name}</p>
        <p className="value">{value}</p>
      </div>
    </div>
  );
}

export default OtherDetails;
