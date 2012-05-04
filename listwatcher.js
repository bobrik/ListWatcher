(function() {
    var fs          = require("fs"),
        path        = require("path"),
        init        = require("init"),
        ListWatcher = require("ListWatcher/ListWatcher"),
        signals     = ["SIGTERM", "SIGINT", "SIGQUIT"],
        pidFile     = path.join(process.cwd(), "pid", "listwatcher.pid"),
        configFile  = path.join(process.cwd(), "config.json");

    // hello there, php^Wnodejs hacks
    require("https").globalAgent.maxSockets = 50000;

    path.exists(configFile, function(exists) {
        if (!exists) {
            console.log("config.json is missing!");
            console.log("create it from config.json.example first");
            return;
        }

        fs.readFile(configFile, "utf8", function(error, data) {
            var config;

            if (error) {
                console.log("Could not load config: " + e.message);
                return;
            }

            try {
                config = JSON.parse(data);
            } catch (e) {
                console.log("Could not load config: " + e.message);
                return;
            }

            init.simple({
                run     : function() {
                    var Watcher = ListWatcher.create(config);

                    signals.forEach(function(signal) {
                        process.on(signal, Watcher.getProcessSignalHandler());
                    });

                    Watcher.start();
                },
                command : process.argv[3],
                pidfile : pidFile,
                killer  : init.softKiller()
            });
        });
    });
})();
