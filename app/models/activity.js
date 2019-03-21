"use strict";

app.factory("Activity", function ($timeout,$log) {

    function Activity(person, taetigkeit) {
        this.person = person || "";
        this.taetigkeit = taetigkeit || "";
        this.startTime = 0;
        this.sum = 0;
        this.time_running = false;

        this.startActivity = () => {
            $log.debug("Zeit läuft.");

            this.time_running = true;
            this.startTime = new Date();
        };

        this.stopAcitivty = () => {
            $log.debug("Zeit gestoppt.");

            this.time_running = false;
            this.sum += Date.now() - this.startTime;
            this.startTime = 0;

        };

        this.zeitBerechnen = () => {

            if (this.startTime != 0){
                return this.sum + Date.now() - this.startTime; //wenn läuft --> DAZU GEBEN
            } else {
                return this.sum; //wenn nicht läuft --> GESAMTsum
            }
        };

    }

    return Activity;
});
