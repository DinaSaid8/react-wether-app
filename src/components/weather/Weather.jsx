import WeatherInfoComponent from "../WeatherInfoComponent";
const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <div className="container shadow p-5  text-white text-center">
      <div className="shadow-lg p-4">
        <span className=" fs-1">
          <span className=" fw-bold">{`${Math.floor(
            weather?.main?.temp - 273
          )}°C`}</span>
          {` | ${weather?.weather[0].description}`}
        </span>
      </div>
      <span className="fs-1 ">{`${weather?.name}, ${weather?.sys?.country}`}</span>
          <div className=" row">
              <div className="col-md-6 gy-4">
              <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
        />
        <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} />
              </div>
              <div className="col-md-6 gy-4">
              <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
        <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
      </div>

      </div>
    </div>
  );
};

export default WeatherComponent;
