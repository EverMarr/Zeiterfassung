"use strict";

app.component("info", {
    templateUrl: "components/info.html",
    controller: "InfoController",
    bindings: {}
});


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "info",
        url: "/info",
        component: "info"
    });

    // $urlRouterProvider.otherwise("/info");
});


app.controller("InfoController", function ($log) {

    $log.debug("InfoController()");

});
