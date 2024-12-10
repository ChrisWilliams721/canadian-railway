import WeatherStation from "./WeatherStation";
export default class TrackStation {
    constructor(trackId, trackName, trackLocation, trackStatus, trackDetails) {
        this.trackId = trackId; 
        this.trackName = trackName;
        this.trackLocation = trackLocation;
        this.trackStatus = trackStatus;
        this.trackDetails = trackDetails;
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
    getTrackDetails() {
        return this.trackDetails;
    }
}