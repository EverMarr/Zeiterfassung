"use strict";

app.filter("zeitDiff", function (dateFilter) {

    function zeitDiff(zeitpunkt) {
        let diff = zeitpunkt;

        diff = Math.abs(diff);

        return dateFilter(new Date(diff), 'HH:mm:ss', 'UTC');
    }

    return zeitDiff;
});
