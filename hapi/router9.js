'use strict';
var fs = require('fs');
var assert = require('assert');
var JWT;
var request = require('request');
var argVector = process.argv[2];
var argKey = process.argv[3];

fs.readFile('/temp_dir/JWT.txt', 'utf8', function(err, JWT) {
    if (err) {
        return console.log(err);
    }
    console.log("JWT  " + JWT);

    if (!argVector || !argKey) {
        throw Error('must enter param');
    }

    if (argVector == 'TEST') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT
        };

        var SET_TEST = [{
                "key": "switchedON",
                "value": "YES"
            },
            {
                "key": "__TEST",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/restAPI/keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_NAME
            },
            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'TEST_IP') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT
        };

        var SET_TEST_IP = [{
                "key": "_SWITCH_ON",
                "value": "YES"
            },
            {
                "key": "__TEST_IP",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/restAPI/keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_TEST_IP
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });

    } else if (argVector == 'SUBNET_MASK') {
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWT

        };
        var SET_NET_MASK = [{
                "key": "_SWITCH_ON",
                "value": "YES"
            },
            {
                "key": "__NET_MASK",
                "value": argKey
            }
        ]

        var url = 'http://0.0.0.0/restAPI/keys'
        request.post({
                url: url,
                headers: headers,
                json: SET_SOMETHING
            },

            function(error, response) {
                console.log(response.body);
                console.log(response.statusCode);
            });
    } else {
        console.log("!! not recognized  " + argVector);
    }
});
