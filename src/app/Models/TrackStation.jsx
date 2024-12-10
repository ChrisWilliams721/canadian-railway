import WeatherStation from "./WeatherStation";
export default class TrackStation {
    constructor(trackId, trackName, trackLocation, trackStatus) {
        this.trackId = trackId; 
        this.trackName = trackName;
        this.trackLocation = trackLocation;
        this.trackStatus = trackStatus;
    }
    // Methods
    getLocation() {
        return this.trackLocation;
    }
    getStatus() {
        return this.trackStatus;
    }
    getClosestWeatherStation() {
        return WeatherStation.getClosestWeatherStation(this.trackLocation);
    }
}