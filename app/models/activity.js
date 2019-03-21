"use strict";

app.factory("Activity", function ($timeout,$log) {

    function Activity(person, taetigkeit) {
        this.person = person || "";
        this.taetigkeit = taetigkeit || "";
        this.startTime = 0;
        this.dauer = 0;

        this.startActivity = () => {
            $log.debug("Zeit läuft.");
            this.startTime = new Date();
        };

        this.stopAcitivty = () => {
            $log.debug("Zeit gestoppt.");

            this.dauer += Date.now() - this.startTime;
            this.startTime = 0;

        };

        this.zeitBerechnen = () => {

            if (this.startTime != 0){
                return this.dauer + Date.now() - this.startTime; //wenn läuft --> DAZU GEBEN
            } else {
                return this.dauer; //wenn nicht läuft --> GESAMTDAUER
            }
        };

    }

    return Activity;
});
