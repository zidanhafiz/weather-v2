import "../css-components/currentDate.css";

const dates = new Date();

function CurrentDate() {
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
    <div className="container current-date">
      <time className="date-paragraph">
        {days[day]}, {date} {months[month]} {year}
      </time>
    </div>
  );
}

export default CurrentDate;
