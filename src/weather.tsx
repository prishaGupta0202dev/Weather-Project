import "./forecast.css";
import img from "./assets/ray.jpeg";
function Weather() {
  return (
    <>
      <div>
        <div>
          <div style={{ padding: 10 }}>
            <button
              type="button"
              className="btn btn-dark"
              style={{ backgroundColor: "rgb(${21, 21, 21})" }}
            >
              Today
            </button>
            <button
              type="button"
              className="btn btn-dark"
              style={{ backgroundColor: "rgb(${21, 21, 21})" }}
            >
              Tomorrow
            </button>
            <button
              type="button"
              className="btn btn-dark"
              style={{ backgroundColor: "rgb(${21, 21, 21})" }}
            >
              Next 7 days
            </button>
          </div>
        </div>
        <div className="col-1">
          <div className="row" style={{ padding: 10 }}>
            <div className="weekdays">
              <div className="day1"> Tue</div>
              <img src={img} alt=""></img>
              <div className="temp">10°</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <iframe
              style={{
                padding: 10,
                border: 5,
                width: "100%",
                height: 350,
                borderRadius: 10,
              }}
              src="https://embed.windy.com/embed2.html?lat=21.997&lon=79.001&detailLat=21.997&detailLon=79.001&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
            ></iframe>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
}
export default Weather;
