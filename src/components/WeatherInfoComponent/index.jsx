
const WeatherInfoIcons = {
    // eslint-disable-next-line jsx-a11y/alt-text
    sunrise: <img src="https://img.icons8.com/fluency/48/000000/sunrise.png" />,
  humidity: (
          // eslint-disable-next-line jsx-a11y/alt-text
      <img src="https://img.icons8.com/fluency/48/000000/hygrometer.png" />
  ),
      // eslint-disable-next-line jsx-a11y/alt-text
    wind: <img src="https://img.icons8.com/fluency/48/000000/wind.png" />,
  pressure: (
          // eslint-disable-next-line jsx-a11y/alt-text
      <img src="https://img.icons8.com/fluency/48/000000/atmospheric-pressure.png" />
    ),
  };


const WeatherInfoComponent = (props) => {
    const { name, value } = props;
  
    return (
      <div>
        <div className="fs-1 mb-2">{WeatherInfoIcons[name]}</div>
        <div className="fs-6">
          {value}
          <p>{name}</p>
        </div>
      </div>
    );
};
  
export default WeatherInfoComponent;  