import React from "react";

const Anasayfa = (props) => {
  const { data, dateChange, currentDate } = props;

  function dateChangeHandler(e) {
    console.log(e.target.value);
    dateChange(e.target.value);
  }
  if (!data) return <h3>Yükleniyor...</h3>;
  return (
    <div>
      <p>{data.date}</p>
      <label htmlFor="apodDate">Pick a date: </label>
      <input
        onChange={(e) => dateChangeHandler(e)}
        type="date"
        value={currentDate}
        name="apodDate"
      ></input>

      <p></p>
      {data.media_type === "image" && (
        <img src={data.hdurl} alt={data.title} width="500" height="600" />
      )}

      {data.media_type === "video" && (
        <iframe
          width="420"
          height="315"
          src={data.url}
          title={`Video player for ${data.title}`}
        ></iframe>
      )}
      <p>{data.explanation}</p>
    </div>
  );
};

export default Anasayfa;
