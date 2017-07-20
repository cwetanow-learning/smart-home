    var exec = require('child_process').exec;

    module.exports = () => {
        return new Promise((resolve, reject) => {
            exec("cat /sys/bus/w1/devices/28-01162538c0ee | sed -n 2p | cut -d ' ' -f 10", function (err, stdout, stderr) {
                if (err || stderr) {
                    reject(err);
                }

                let temp = (+stdout.slice(2, stdout.length)) / 1000;
                console.log(stdout);

                resolve(temp);
            });
        });
    };