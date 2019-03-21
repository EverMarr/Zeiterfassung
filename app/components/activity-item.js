"use strict";

app.component("activityItem", {
    templateUrl: "components/activity-item.html",
    controller: "ActivityItemController",
    bindings: { activityItem : "<", activityBeendet : "&" }
});


app.controller("ActivityItemController", function ($log, Activity, $timeout) {

    $log.debug("ActivityItemController()");



    this.newActivity = () => {
        this.activity = new Activity(this.person, this.taetigkeit);
        $log.debug(this.activity);
        this.newActivity({ activity: this.activity});

    };

    this.deleteActivity = () => {
        this.activityBeendet({activityItem : this.activityItem});
        $log.debug(this.activityItem);
    };

    this.time_running = false;

    this.showPlayIcon = () => {
        this.time_running = true;
        this.activityItem.startActivity()
    };

    this.showPauseIcon = () => {
        this.time_running = false;
        this.activityItem.stopAcitivty();
    };


});
