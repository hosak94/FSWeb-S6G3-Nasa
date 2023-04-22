import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Anasayfa from "./components/Anasayfa";

function App() {
  const [apodData, setApodData] = useState();
  const [datePicker, setDatePicker] = useState(
    new Date().toISOString().slice(0, 10)
  );

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "xqL8oTf9iDL3I22fyxweRmT3psPRHMO6ZklA8muT",
          date: datePicker,
        },
      })
      .then(function (response) {
        console.log(response);
        setApodData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    console.log("render");
  }, [datePicker]);

  return (
    <div className="App">
      <Anasayfa
        data={apodData}
        dateChange={setDatePicker}
        currentDate={datePicker}
      />
    </div>
  );
}

export default App;
