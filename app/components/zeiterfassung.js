"use strict";

app.component("zeiterfassung", {
    templateUrl: "components/zeiterfassung.html",
    controller: "ZeiterfassungController",
    bindings: {}
});


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "zeiterfassung",
        url: "/zeiterfassung",
        component: "zeiterfassung"
    });

    $urlRouterProvider.otherwise("/zeiterfassung");
});


app.controller("ZeiterfassungController", function ($log, Activity) {

    $log.debug("ZeiterfassungController()");

    this.show_input = false;

    this.showInputActivity = () => {
        $log.debug('Show Activity-Input');
        this.show_input = !this.show_input;
        //this.activity = new Activity();
    }
});
