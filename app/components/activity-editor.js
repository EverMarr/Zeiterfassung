"use strict";

app.component("activityEditor", {
    templateUrl: "components/activity-editor.html",
    controller: "ActivityEditorController",
    bindings: {newActivity : "&"}
});


app.controller("ActivityEditorController", function ($log, Activity) {

    $log.debug("ActivityEditorController()");

    this.activity = new Activity();

    this.addActivity = () => {
        this.activity = new Activity(this.person, this.taetigkeit, new Date());
        $log.debug(this.activity);
        this.newActivity({ activity: this.activity});
        this.cancelActivity();

    }


    this.cancelActivity = () => {
        this.person = "";
        this.taetigkeit = "";
        this.form.$setUntouched();
    };

});
