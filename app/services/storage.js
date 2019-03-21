app.service("StorageService", function ($log) {

    $log.debug("StorageService()");

    const ACTIVITY_KEY = 'activities';

    this.speichern = (activites) => {
        localStorage.setItem(ACTIVITY_KEY, JSON.stringify(activites));
    };

    this.laden = () => {
        let a = JSON.parse(localStorage.getItem(ACTIVITY_KEY));
        $log.debug(a);
        return (a != null) ? a : [];
    };

});
