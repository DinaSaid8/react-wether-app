
const CityComponent = (props) => {
    const { updateCity, fetchWeather } = props;
  
    return (
      <>
        <div className="container shadow p-5">
          <h2 className="fw-bold fs-2 mb-4 text-dark">
            Find Weather of your city
          </h2>
          <form onSubmit={fetchWeather}>
            <input
              className="form-control mb-2 fs-5"
              placeholder="Enter City....."
              onChange={(event) => updateCity(event.target.value)}
            />
            <button className="form-control text-dark fw-bold" type="submit">
              Search
            </button>
          </form>
        </div>
      </>
    );
};
  
export default CityComponent;