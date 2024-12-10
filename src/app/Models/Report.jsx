export default class Report {
    constructor(reportId, weatherStationLocation, weatherData, trackLocation,trackStatus, feedback, author, date) {
        this.reportId = reportId;
        this.weatherData = weatherData;
        this.weatherStationLocation = weatherStationLocation;
        this.trackLocation = trackLocation;
        this.trackStatus = trackStatus;
        this.feedback = feedback;
        this.author = author;
        this.date = date;
    }
    // Methods
    generateReport() {}
    exportReport() {}
}
