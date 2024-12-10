
export default class WeatherStation {
  constructor(WeatherStationId, WeatherStationLocation, WeatherStationStatus) {
    this.WeatherStationId = WeatherStationId;
    this.WeatherStationLocation = WeatherStationLocation;
    this.WeatherStationStatus = WeatherStationStatus;
  }
  // Methods
  getLocation() {
    return this.WeatherStationLocation;
  }
  getHistoryData() {
    return this.WeatherStationStatus;
  }
  getFutureData() {
    //API KEY HERE
    return this.WeatherStationStatus;
  }
  getStatus() {
    return this.WeatherStationStatus;
  }
}