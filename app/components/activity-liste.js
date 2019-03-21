"use strict";

app.component("activityListe", {
    templateUrl: "components/activity-liste.html",
    controller: "ActivityListeController",
    bindings: {}
});


app.controller("ActivityListeController", function ($log, Activity, $timeout, StorageService) {


    //this.activities = StorageService.laden();
    this.activities = [];

    this.addNewActivity = (activity) => {
        this.activities.unshift(activity);
        StorageService.speichern(this.activities);
    };

    this.deleteActivity = (activity) => {
        let index = this.activities.indexOf(activity);
        this.activities.splice(index, 1);
        StorageService.speichern(this.activities);
    };

    this.show_input = false;

    this.showInputActivity = () => {
        this.show_input = !this.show_input;
    };


    this.gesamtDauer = () => {
        if(this.activities.length > 0){
            let sum = 0;
            for (let a of this.activities) sum += a.zeitBerechnen();
            return sum;
        }

        return 0;
    }

    (function aktualisieren() {
        $timeout(aktualisieren, 1000);
    })();


});
