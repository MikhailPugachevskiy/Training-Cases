const figlet = require("figlet");
const colors = require("colors");

figlet('Hello World!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.green)
});


/*Im GitBash eingeben: npm i figlet (ohne colors => const colors = require("colors");)
=> added 2 packages, and audited 3 packages in 3s
found 0 vulnerabilities

Im GitBash eingeben: touch index.js
                    node index.js
=>   _   _      _ _        __        __         _     _ _ _
 | | | | ___| | | ___   \ \      / /__  _ __| | __| | | |
 | |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | | |
 |  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|_|
 |_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_|_)


Im GitBash eingeben: $ npm i colors (mit colors => const colors = require("colors");)
=> added 1 package, and audited 4 packages in 2s
found 0 vulnerabilities

$ node index.js
=>   _   _      _ _        __        __         _     _ _ _
 | | | | ___| | | ___   \ \      / /__  _ __| | __| | | |
 | |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | | |
 |  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|_|
 |_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_|_)   <- in grün angezeigt.*/