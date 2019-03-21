"use strict";

app.component("activityItem", {
    templateUrl: "components/activity-item.html",
    controller: "ActivityItemController",
    bindings: { activityItem : "<", activityBeendet : "&" } //ausgang time hinzufügen
});


app.controller("ActivityItemController", function ($log, Activity, $timeout) {

    $log.debug("ActivityItemController()");

    this.deleteActivity = () => {
        this.activityBeendet({activityItem : this.activityItem});
        $log.debug(this.activityItem);
    };

    this.start = () => {
        $log.debug(this.timeStarted);
        this.activityItem.startActivity();
    };

    this.stop = () => {
        this.activityItem.stopAcitivty();
    };


});
