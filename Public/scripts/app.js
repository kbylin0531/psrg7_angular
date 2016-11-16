"use strict";
/**
 * basic url to access
 */
var srg_base_url = psrg_vars["basic_url"];
/**
 * You must include the dependency on 'ngMaterial'
 */
angular.module("app", ["ngMaterial"]);

angular.module("app").service("todoListService", ["$q", function (e) {
    return {
        loadAllItems: function () {
            return e.when([{text: "Continuous integration", done: !1}, {
                text: "Implement panel-widget directive",
                done: !0
            }, {text: "Add backend", done: !1}])
        }
    }
}]);
angular.module("app").service("tableService", ["$q", function (e) {
    var a = [{
        issue: "Nested views",
        progress: 100,
        status: "Done",
        "class": "md-accent"
    }, {issue: "Table component", progress: 40, status: "Feedback", "class": ""}, {
        issue: "Dashboard tiles",
        progress: 100,
        status: "Done",
        "class": "md-accent"
    }, {issue: "Panel widget", progress: 84, status: "In progress", "class": "orange"}, {
        issue: "Form",
        progress: 100,
        status: "Done",
        "class": "md-accent"
    }, {issue: "Custom CSS", progress: 20, status: "Feedback", "class": ""}, {
        issue: "Add backend",
        progress: 1,
        status: "To do",
        "class": "md-warn"
    }, {issue: "Layout with sidebar", progress: 100, status: "Done", "class": "md-accent"}];
    return {
        loadAllItems: function () {
            return e.when(a)
        }
    }
}]);
angular.module("app").service("performanceService", [
    function () {
        return {
            getPerformanceData: function (e) {
                return "week" === e ? [
                    {
                        key: "Middleware",
                        values: [[1, 11], [2, 10], [3, 14], [4, 21], [5, 13], [6, 21], [7, 21], [8, 18], [9, 11], [10, 11], [11, 18], [12, 14], [13, 10], [14, 20], [15, 21], [16, 28], [17, 12], [18, 16], [19, 22], [20, 18], [21, 21], [22, 10], [23, 11], [24, 14], [25, 9], [26, 14], [27, 10], [28, 21], [29, 11]]
                    }, {
                        key: "Ruby",
                        values: [[1, 29], [2, 36], [3, 42], [4, 25], [5, 22], [6, 34], [7, 41], [8, 19], [9, 45], [10, 31], [11, 28], [12, 36], [13, 54], [14, 41], [15, 36], [16, 39], [17, 21], [18, 20], [19, 22], [20, 44], [21, 32], [22, 20], [23, 28], [24, 24], [25, 29], [26, 19], [27, 20], [28, 31], [29, 49]]
                    }, {
                        key: "Web External",
                        values: [[1, 54], [2, 74], [3, 64], [4, 68], [5, 56], [6, 44], [7, 61], [8, 63], [9, 45], [10, 51], [11, 68], [12, 46], [13, 64], [14, 51], [15, 42], [16, 63], [17, 72], [18, 60], [19, 52], [20, 58], [21, 41], [22, 40], [23, 58], [24, 30], [25, 49], [26, 54], [27, 60], [28, 41], [29, 66]]
                    }, {
                        key: "Database",
                        values: [[1, 64], [2, 84], [3, 64], [4, 68], [5, 86], [6, 74], [7, 81], [8, 83], [9, 65], [10, 61], [11, 88], [12, 76], [13, 84], [14, 71], [15, 82], [16, 73], [17, 92], [18, 80], [19, 62], [20, 68], [21, 71], [22, 50], [23, 78], [24, 60], [25, 59], [26, 74], [27, 80], [28, 51], [29, 97]]
                    }] : [{
                    key: "Middleware",
                    values: [[1, 13], [2, 14], [3, 24], [4, 18], [5, 16], [6, 14], [7, 11], [8, 13], [9, 15], [10, 11], [11, 18], [12, 16], [13, 28], [14, 11], [15, 12], [16, 13], [17, 12], [18, 20], [19, 22], [20, 18], [21, 11], [22, 10], [23, 18], [24, 20], [25, 9], [26, 14], [27, 10], [28, 11], [29, 17]]
                }, {
                    key: "Ruby",
                    values: [[1, 29], [2, 36], [3, 42], [4, 25], [5, 22], [6, 34], [7, 41], [8, 19], [9, 45], [10, 31], [11, 28], [12, 36], [13, 54], [14, 41], [15, 36], [16, 39], [17, 21], [18, 20], [19, 22], [20, 44], [21, 32], [22, 20], [23, 28], [24, 24], [25, 29], [26, 19], [27, 20], [28, 31], [29, 49]]
                }, {
                    key: "Web External",
                    values: [[1, 54], [2, 74], [3, 64], [4, 68], [5, 56], [6, 44], [7, 61], [8, 63], [9, 45], [10, 51], [11, 68], [12, 46], [13, 64], [14, 51], [15, 42], [16, 63], [17, 72], [18, 60], [19, 52], [20, 58], [21, 41], [22, 40], [23, 58], [24, 30], [25, 49], [26, 54], [27, 60], [28, 41], [29, 66]]
                }, {
                    key: "Database",
                    values: [[1, 74], [2, 64], [3, 84], [4, 78], [5, 66], [6, 64], [7, 71], [8, 83], [9, 55], [10, 81], [11, 88], [12, 76], [13, 84], [14, 71], [15, 62], [16, 73], [17, 82], [18, 80], [19, 92], [20, 68], [21, 71], [22, 70], [23, 78], [24, 80], [25, 59], [26, 74], [27, 80], [28, 51], [29, 67]]
                }]
            }
        };
    }
]);

angular.module("app").service("navService", ["$q", function (e) {
    var a = [{name: "Dashboard", icon: "dashboard", sref: ".dashboard"}, {
        name: "Profile",
        icon: "person",
        sref: ".profile"
    }, {name: "Table", icon: "view_module", sref: ".table"}];
    return {
        loadAllItems: function () {
            return e.when(a)
        }
    }
}]);


angular.module("app").service("messagesService", ["$q", function (e) {
    var a = [{
        userPhoto: "/assets/images/user.svg",
        subject: "Electromagnetic radiation",
        userName: "Wilhelm Conrad Röntgen",
        date: "1901",
        text: "In recognition of the extraordinary services he has rendered by the discovery of the remarkable rays subsequently named after him"
    }, {
        userPhoto: "/assets/images/user.svg",
        subject: "Quantum theory",
        userName: "Max Planck",
        date: "1918",
        text: "For the services he rendered to the advancement of physics by his discovery of energy quanta."
    }, {
        userPhoto: "/assets/images/user.svg",
        subject: "Photoelectric effect",
        userName: "Albert Einstein",
        date: "1921",
        text: "For his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect"
    }, {
        userPhoto: "/assets/images/user.svg",
        subject: "Atomic structure",
        userName: "Niels Bohr",
        date: "1922",
        text: "For his services in the investigation of the structure of atoms and of the radiation emanating from them"
    }, {
        userPhoto: "/assets/images/user.svg",
        subject: "Wave equation",
        userName: "Erwin Schrödinger",
        date: "1933",
        text: "For the discovery of new productive forms of atomic theory"
    }, {
        userPhoto: "/assets/images/user.svg",
        subject: "Spin theory",
        userName: "Wolfgang Pauli",
        date: "1945",
        text: "For the discovery of the Exclusion Principle, also called the Pauli principle"
    }];
    return {
        loadAllItems: function () {
            return e.when(a)
        }
    }
}]);


angular.module("app").service("countriesService", [function () {
    var e = [
        {name: "Afghanistan", code: "AF"}, {name: "Åland Islands", code: "AX"}, {
            name: "Albania",
            code: "AL"
        }, {name: "Algeria", code: "DZ"}, {name: "American Samoa", code: "AS"}, {
            name: "AndorrA",
            code: "AD"
        }, {name: "Angola", code: "AO"}, {name: "Anguilla", code: "AI"}, {
            name: "Antarctica",
            code: "AQ"
        }, {name: "Antigua and Barbuda", code: "AG"}, {name: "Argentina", code: "AR"}, {
            name: "Armenia",
            code: "AM"
        }, {name: "Aruba", code: "AW"}, {name: "Australia", code: "AU"}, {
            name: "Austria",
            code: "AT"
        }, {name: "Azerbaijan", code: "AZ"}, {name: "Bahamas", code: "BS"}, {
            name: "Bahrain",
            code: "BH"
        }, {name: "Bangladesh", code: "BD"}, {name: "Barbados", code: "BB"}, {
            name: "Belarus",
            code: "BY"
        }, {name: "Belgium", code: "BE"}, {name: "Belize", code: "BZ"}, {name: "Benin", code: "BJ"}, {
            name: "Bermuda",
            code: "BM"
        }, {name: "Bhutan", code: "BT"}, {name: "Bolivia", code: "BO"}, {
            name: "Bosnia and Herzegovina",
            code: "BA"
        }, {name: "Botswana", code: "BW"}, {name: "Bouvet Island", code: "BV"}, {
            name: "Brazil",
            code: "BR"
        }, {name: "British Indian Ocean Territory", code: "IO"}, {
            name: "Brunei Darussalam",
            code: "BN"
        }, {name: "Bulgaria", code: "BG"}, {name: "Burkina Faso", code: "BF"}, {
            name: "Burundi",
            code: "BI"
        }, {name: "Cambodia", code: "KH"}, {name: "Cameroon", code: "CM"}, {
            name: "Canada",
            code: "CA"
        }, {name: "Cape Verde", code: "CV"}, {name: "Cayman Islands", code: "KY"}, {
            name: "Central African Republic",
            code: "CF"
        }, {name: "Chad", code: "TD"}, {name: "Chile", code: "CL"}, {
            name: "China",
            code: "CN"
        }, {name: "Christmas Island", code: "CX"}, {name: "Cocos (Keeling) Islands", code: "CC"}, {
            name: "Colombia",
            code: "CO"
        }, {name: "Comoros", code: "KM"}, {name: "Congo", code: "CG"}, {
            name: "Congo, The Democratic Republic of the",
            code: "CD"
        }, {name: "Cook Islands", code: "CK"}, {name: "Costa Rica", code: "CR"}, {
            name: "Cote D'Ivoire",
            code: "CI"
        }, {name: "Croatia", code: "HR"}, {name: "Cuba", code: "CU"}, {
            name: "Cyprus",
            code: "CY"
        }, {name: "Czech Republic", code: "CZ"}, {name: "Denmark", code: "DK"}, {
            name: "Djibouti",
            code: "DJ"
        }, {name: "Dominica", code: "DM"}, {name: "Dominican Republic", code: "DO"}, {
            name: "Ecuador",
            code: "EC"
        }, {name: "Egypt", code: "EG"}, {name: "El Salvador", code: "SV"}, {
            name: "Equatorial Guinea",
            code: "GQ"
        }, {name: "Eritrea", code: "ER"}, {name: "Estonia", code: "EE"}, {
            name: "Ethiopia",
            code: "ET"
        }, {name: "Falkland Islands (Malvinas)", code: "FK"}, {name: "Faroe Islands", code: "FO"}, {
            name: "Fiji",
            code: "FJ"
        }, {name: "Finland", code: "FI"}, {name: "France", code: "FR"}, {
            name: "French Guiana",
            code: "GF"
        }, {name: "French Polynesia", code: "PF"}, {name: "French Southern Territories", code: "TF"}, {
            name: "Gabon",
            code: "GA"
        }, {name: "Gambia", code: "GM"}, {name: "Georgia", code: "GE"}, {name: "Germany", code: "DE"}, {
            name: "Ghana",
            code: "GH"
        }, {name: "Gibraltar", code: "GI"}, {name: "Greece", code: "GR"}, {
            name: "Greenland",
            code: "GL"
        }, {name: "Grenada", code: "GD"}, {name: "Guadeloupe", code: "GP"}, {
            name: "Guam",
            code: "GU"
        }, {name: "Guatemala", code: "GT"}, {name: "Guernsey", code: "GG"}, {
            name: "Guinea",
            code: "GN"
        }, {name: "Guinea-Bissau", code: "GW"}, {name: "Guyana", code: "GY"}, {
            name: "Haiti",
            code: "HT"
        }, {name: "Heard Island and Mcdonald Islands", code: "HM"}, {
            name: "Holy See (Vatican City State)",
            code: "VA"
        }, {name: "Honduras", code: "HN"}, {name: "Hong Kong", code: "HK"}, {
            name: "Hungary",
            code: "HU"
        }, {name: "Iceland", code: "IS"}, {name: "India", code: "IN"}, {
            name: "Indonesia",
            code: "ID"
        }, {name: "Iran, Islamic Republic Of", code: "IR"}, {name: "Iraq", code: "IQ"}, {
            name: "Ireland",
            code: "IE"
        }, {name: "Isle of Man", code: "IM"}, {name: "Israel", code: "IL"}, {
            name: "Italy",
            code: "IT"
        }, {name: "Jamaica", code: "JM"}, {name: "Japan", code: "JP"}, {name: "Jersey", code: "JE"}, {
            name: "Jordan",
            code: "JO"
        }, {name: "Kazakhstan", code: "KZ"}, {name: "Kenya", code: "KE"}, {
            name: "Kiribati",
            code: "KI"
        }, {name: "Korea, Democratic People'S Republic of", code: "KP"}, {
            name: "Korea, Republic of",
            code: "KR"
        }, {name: "Kuwait", code: "KW"}, {name: "Kyrgyzstan", code: "KG"}, {
            name: "Lao People'S Democratic Republic",
            code: "LA"
        }, {name: "Latvia", code: "LV"}, {name: "Lebanon", code: "LB"}, {name: "Lesotho", code: "LS"}, {
            name: "Liberia",
            code: "LR"
        }, {name: "Libyan Arab Jamahiriya", code: "LY"}, {name: "Liechtenstein", code: "LI"}, {
            name: "Lithuania",
            code: "LT"
        }, {name: "Luxembourg", code: "LU"}, {
            name: "Macao",
            code: "MO"
        }, {name: "Macedonia, The Former Yugoslav Republic of", code: "MK"}, {
            name: "Madagascar",
            code: "MG"
        }, {name: "Malawi", code: "MW"}, {name: "Malaysia", code: "MY"}, {name: "Maldives", code: "MV"}, {
            name: "Mali",
            code: "ML"
        }, {name: "Malta", code: "MT"}, {name: "Marshall Islands", code: "MH"}, {
            name: "Martinique",
            code: "MQ"
        }, {name: "Mauritania", code: "MR"}, {name: "Mauritius", code: "MU"}, {
            name: "Mayotte",
            code: "YT"
        }, {name: "Mexico", code: "MX"}, {
            name: "Micronesia, Federated States of",
            code: "FM"
        }, {name: "Moldova, Republic of", code: "MD"}, {name: "Monaco", code: "MC"}, {
            name: "Mongolia",
            code: "MN"
        }, {name: "Montserrat", code: "MS"}, {name: "Morocco", code: "MA"}, {
            name: "Mozambique",
            code: "MZ"
        }, {name: "Myanmar", code: "MM"}, {name: "Namibia", code: "NA"}, {name: "Nauru", code: "NR"}, {
            name: "Nepal",
            code: "NP"
        }, {name: "Netherlands", code: "NL"}, {name: "Netherlands Antilles", code: "AN"}, {
            name: "New Caledonia",
            code: "NC"
        }, {name: "New Zealand", code: "NZ"}, {name: "Nicaragua", code: "NI"}, {
            name: "Niger",
            code: "NE"
        }, {name: "Nigeria", code: "NG"}, {name: "Niue", code: "NU"}, {
            name: "Norfolk Island",
            code: "NF"
        }, {name: "Northern Mariana Islands", code: "MP"}, {name: "Norway", code: "NO"}, {
            name: "Oman",
            code: "OM"
        }, {name: "Pakistan", code: "PK"}, {name: "Palau", code: "PW"}, {
            name: "Palestinian Territory, Occupied",
            code: "PS"
        }, {name: "Panama", code: "PA"}, {name: "Papua New Guinea", code: "PG"}, {
            name: "Paraguay",
            code: "PY"
        }, {name: "Peru", code: "PE"}, {name: "Philippines", code: "PH"}, {
            name: "Pitcairn",
            code: "PN"
        }, {name: "Poland", code: "PL"}, {name: "Portugal", code: "PT"}, {
            name: "Puerto Rico",
            code: "PR"
        }, {name: "Qatar", code: "QA"}, {name: "Reunion", code: "RE"}, {
            name: "Romania",
            code: "RO"
        }, {name: "Russian Federation", code: "RU"}, {name: "RWANDA", code: "RW"}, {
            name: "Saint Helena",
            code: "SH"
        }, {name: "Saint Kitts and Nevis", code: "KN"}, {
            name: "Saint Lucia",
            code: "LC"
        }, {name: "Saint Pierre and Miquelon", code: "PM"}, {
            name: "Saint Vincent and the Grenadines",
            code: "VC"
        }, {name: "Samoa", code: "WS"}, {name: "San Marino", code: "SM"}, {
            name: "Sao Tome and Principe",
            code: "ST"
        }, {name: "Saudi Arabia", code: "SA"}, {name: "Senegal", code: "SN"}, {
            name: "Serbia and Montenegro",
            code: "CS"
        }, {name: "Seychelles", code: "SC"}, {name: "Sierra Leone", code: "SL"}, {
            name: "Singapore",
            code: "SG"
        }, {name: "Slovakia", code: "SK"}, {name: "Slovenia", code: "SI"}, {
            name: "Solomon Islands",
            code: "SB"
        }, {name: "Somalia", code: "SO"}, {
            name: "South Africa",
            code: "ZA"
        }, {name: "South Georgia and the South Sandwich Islands", code: "GS"}, {
            name: "Spain",
            code: "ES"
        }, {name: "Sri Lanka", code: "LK"}, {name: "Sudan", code: "SD"}, {
            name: "Suriname",
            code: "SR"
        }, {name: "Svalbard and Jan Mayen", code: "SJ"}, {name: "Swaziland", code: "SZ"}, {
            name: "Sweden",
            code: "SE"
        }, {name: "Switzerland", code: "CH"}, {
            name: "Syrian Arab Republic",
            code: "SY"
        }, {name: "Taiwan, Province of China", code: "TW"}, {
            name: "Tajikistan",
            code: "TJ"
        }, {name: "Tanzania, United Republic of", code: "TZ"}, {name: "Thailand", code: "TH"}, {
            name: "Timor-Leste",
            code: "TL"
        }, {name: "Togo", code: "TG"}, {name: "Tokelau", code: "TK"}, {
            name: "Tonga",
            code: "TO"
        }, {name: "Trinidad and Tobago", code: "TT"}, {name: "Tunisia", code: "TN"}, {
            name: "Turkey",
            code: "TR"
        }, {name: "Turkmenistan", code: "TM"}, {name: "Turks and Caicos Islands", code: "TC"}, {
            name: "Tuvalu",
            code: "TV"
        }, {name: "Uganda", code: "UG"}, {name: "Ukraine", code: "UA"}, {
            name: "United Arab Emirates",
            code: "AE"
        }, {name: "United Kingdom", code: "GB"}, {
            name: "United States",
            code: "US"
        }, {name: "United States Minor Outlying Islands", code: "UM"}, {
            name: "Uruguay",
            code: "UY"
        }, {name: "Uzbekistan", code: "UZ"}, {name: "Vanuatu", code: "VU"}, {
            name: "Venezuela",
            code: "VE"
        }, {name: "Viet Nam", code: "VN"}, {name: "Virgin Islands, British", code: "VG"}, {
            name: "Virgin Islands, U.S.",
            code: "VI"
        }, {name: "Wallis and Futuna", code: "WF"}, {name: "Western Sahara", code: "EH"}, {
            name: "Yemen",
            code: "YE"
        }, {name: "Zambia", code: "ZM"}, {name: "Zimbabwe", code: "ZW"}];
    return {
        loadAll: function () {
            return e.map(function (e) {
                return {value: e.name.toLowerCase(), display: e.name, code: e.code}
            })
        }
    }
}]);
angular.module("app").directive("panelWidget", function () {
    return {
        restrict: "E",
        replace: !0,
        transclude: !0,
        scope: {title: "@", template: "@", options: "@"},
        template: '<section layout-margin class="md-whiteframe-z1 panel-widget">  ' +
        '<md-toolbar md-theme="custom" class="md-hue-1 panel-widget-toolbar">    ' +
        '<div class="md-toolbar-tools">      ' +
        '<h3 class="panel-widget-tittle">{{title}}</h3>      ' +
        '<span flex></span>      ' +
        '<md-button ng-show="options" ng-click="$showOptions = !$showOptions" class="md-icon-button" aria-label="Show options">        ' +
        '<i class="material-icons">more_vert</i>      ' +
        '</md-button>    ' +
        '</div>  ' +
        '</md-toolbar>  ' +
        '<div ng-include="template"/>' +
        '</section>',
        compile: function (e, a, t) {
            return function (e, a) {
                t(e, function (e) {
                    a.append(e)
                })
            }
        }
    }
});

angular.module("app").directive("messagesSection", function () {
    return {
        restrict: "E",
        scope: {title: "@", theme: "@", messages: "="},
        template: '<section>  ' +
        '<md-subheader ng-class="theme">{{title}}</md-subheader>  ' +
        '<md-list>    ' +
        '<md-list-item class="md-3-line" ng-repeat="message in messages">    ' +
        '<img class="md-avatar" ng-src="' + srg_base_url + 'assets/images/einstein.jpg">    ' +
        '<div class="md-list-item-text">      ' +
        '<h3>{{message.subject}}</h3>      ' +
        '<h4>{{message.userName}}</h4>      ' +
        '<p>{{message.text}}</p>    ' +
        '</div>    ' +
        '</md-list-item>  ' +
        '</md-list>' +
        '</section>',
        link: function () {
        }
    }
});

angular.module("app").controller("WarningsController", [function () {


    var a = this;
    a.warningsChartData = function () {
        for (var e = [], a = 0; 100 > a; a++)e.push({
            x: a,
            y: Math.abs(.25 * Math.cos(a / 10) * a + .9 - .4 * a)
        });
        return [{values: e, color: "rgb(0, 150, 136)", area: !0}]
    };
    a.chartOptions = {
        chart: {
            type: "lineChart",
            height: 210,
            margin: {top: -10, left: -20, right: -20},
            x: function (e) {
                return e.x
            },
            y: function (e) {
                return e.y
            },
            showLabels: !1,
            showLegend: !1,
            title: "Over 9K",
            showYAxis: !1,
            showXAxis: !1,
            tooltip: {
                contentGenerator: function (e) {
                    return '<span class="custom-tooltip">' + Math.round(e.point.y) + "</span>"
                }
            }
        }
    }
}]);
angular.module("app").controller("VisitorsController", [function () {
    var e = this;
    e.visitorsChartData = [{key: "Mobile", y: 5264}, {
        key: "Desktop",
        y: 3872
    }];
    e.chartOptions = {
        chart: {
            type: "pieChart",
            height: 210,
            donut: !0,
            x: function (e) {
                return e.key
            },
            y: function (e) {
                return e.y
            },
            valueFormat: d3.format(".0f"),
            color: ["rgb(0, 150, 136)", "#E75753"],
            showLabels: !1,
            showLegend: !1,
            title: "Over 9K",
            margin: {top: -10}
        }
    }
}]);
angular.module("app").controller("UsageController", [function () {
    var e = this;
    e.ramChartData = [{key: "Memory", y: 768660}, {key: "Cache", y: 367404}, {
        key: "Swap",
        y: 41924
    }];
    e.storageChartData = [{key: "System", y: 126560}, {
        key: "Other",
        y: 224365
    }];
    e.chartOptions = {
        chart: {
            type: "pieChart",
            height: 130,
            donut: !0,
            x: function (e) {
                return e.key
            },
            y: function (e) {
                return e.y
            },
            valueFormat: d3.format(".0f"),
            color: ["rgb(0, 150, 136)", "#E75753", "rgb(235, 235, 235)"],
            showLabels: !1,
            showLegend: !1,
            title: "83%",
            margin: {top: -10, left: -20, right: -20}
        }
    }
}]);
angular.module("app").controller("TodoController", ["todoListService", function (e) {
    function a() {
        if (i.todoText) {
            i.todos.push({text: i.todoText, done: !1});
            i.todoText = "";
        }
    }

    function t() {
        var e = 0;
        angular.forEach(i.todos, function (a) {
            e += a.done ? 0 : 1
        });
        return e;
    }

    function n(e) {
        e.preventDefault();
        var a = i.todos;
        i.todos = [];
        angular.forEach(a, function (e) {
            e.done || i.todos.push(e)
        })
    }

    function o() {
        0 == t() ? angular.forEach(i.todos, function (e) {
            e.done = !1
        }) : angular.forEach(i.todos, function (e) {
            e.done = !0
        })
    }

    var i = this;
    i.addTodo = a;
    i.remaining = t;
    i.archive = n;
    i.toggleAll = o;
    i.todos = [];
    e.loadAllItems().then(function (e) {
        i.todos = [].concat(e)
    })
}]);

angular.module("app").controller("TableController", ["tableService", function (e) {
    L.load([
        'build-in/datatables/media/css/dataTables.bootstrap.min.css',
        'http://cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css',
        'build-in/jquery.js',
        'http://cdn.bootcss.com/bootstrap/3.3.6/js/bootstrap.js',
        'build-in/datatables/media/js/jquery.dataTables.min.js',
        'build-in/datatables/media/js/dataTables.bootstrap.min.js'
    ]).use('datatables',function () {
        L.P.datatables.create('#example');
        // a.tableData = [];
        // e.loadAllItems().then(function (e) {
        //     a.tableData = [].concat(e)
        // })
    });
}]);

angular.module("app").controller("SearchController", ["$timeout", "$q", "countriesService", function (e, a, t) {
    function n(t) {
        var n, r = t ? i.countries.filter(o(t)) : [];
        n = a.defer();
        e(function () {
            n.resolve(r)
        }, 1e3 * Math.random(), !1);
        return n.promise
    }

    function o(e) {
        var a = angular.lowercase(e);
        return function (e) {
            return 0 === e.value.indexOf(a)
        }
    }

    var i = this;
    i.countries = t.loadAll();
    i.selectedCountry = null;
    i.searchText = null;
    i.querySearch = n;
    i.disableCaching = !0
}]);

angular.module("app").controller("ProfileController", [function () {
    this.user = {
        title: "Admin",
        email: "contact@flatlogic.com",
        firstName: "",
        lastName: "",
        company: "FlatLogic Inc.",
        address: "Fabritsiusa str, 4",
        city: "Minsk",
        state: "",
        biography: "We are young and ambitious full service design and technology company. Our focus is JavaScript development and User Interface design.",
        postalCode: "220007"
    };
}]);

angular.module("app").controller("PerformanceController", ["performanceService", "$q", function (e, a) {
    function t() {
        var e = [n()];
        a.all(e)
    }

    function n() {
        i.performanceChartData = e.getPerformanceData(i.performancePeriod)
    }

    function o() {
        n()
    }

    var i = this;
    i.chartOptions = {
        chart: {
            type: "stackedAreaChart",
            height: 350,
            margin: {left: -15, right: -15},
            x: function (e) {
                return e[0]
            },
            y: function (e) {
                return e[1]
            },
            showLabels: !1,
            showLegend: !1,
            title: "Over 9K",
            showYAxis: !1,
            showXAxis: !1,
            color: ["rgb(0, 150, 136)", "rgb(204, 203, 203)", "rgb(149, 149, 149)", "rgb(44, 44, 44)"],
            tooltip: {
                contentGenerator: function (e) {
                    return '<div class="custom-tooltip">' + e.point.y + '%</div>' +
                        '<div class="custom-tooltip">' + e.series[0].key + "</div>"
                }
            },
            showControls: !1
        }
    };
    i.performanceChartData = [];
    i.performancePeriod = "week";
    i.changePeriod = o;
    t()
}]);

angular.module("app").controller("MessagesController", ["messagesService", function (e) {
    var a = this;
    a.messages = [];
    e.loadAllItems().then(function (e) {
        a.messages = [].concat(e)
    });
}]);

angular.module("app").controller("MemoryController", [function () {
    var e = this;
    e.memoryChartData = [{key: "memory", y: 42}, {key: "free", y: 58}];
    e.chartOptions = {
        chart: {
            type: "pieChart",
            height: 210,
            donut: !0,
            pie: {
                startAngle: function (e) {
                    return e.startAngle / 2 - Math.PI / 2
                }, endAngle: function (e) {
                    return e.endAngle / 2 - Math.PI / 2
                }
            },
            x: function (e) {
                return e.key
            },
            y: function (e) {
                return e.y
            },
            valueFormat: d3.format(".0f"),
            color: ["rgb(0, 150, 136)", "rgb(191, 191, 191)"],
            showLabels: !1,
            showLegend: !1,
            tooltips: !1,
            title: "42%",
            titleOffset: -10,
            margin: {bottom: -80, left: -20, right: -20}
        }
    }
}]);

angular.module("app").controller("MainController",
    ["navService", "$mdSidenav", "$mdBottomSheet", "$log", "$q", "$state", "$mdToast", function (e, a, t, n, o, i, r) {
        function d() {
            a("right").toggle()
        }

        function s() {
            var e = t.hide() || o.when(!0);
            e.then(function () {
                a("left").toggle()
            })
        }

        function l(e) {
            u.title = e.name;
            u.toggleItemsList();
            u.showSimpleToast(u.title)
        }

        function m(e) {
            function a(e) {
                var a = this;
                a.actions = [{
                    name: "Share",
                    icon: "share",
                    url: "https://twitter.com/intent/tweet?text=Angular%20Material%20Dashboard%20https://github.com/flatlogic/angular-material-dashboard%20via%20@flatlogicinc"
                }, {
                    name: "Star",
                    icon: "star",
                    url: "https://github.com/flatlogic/angular-material-dashboard/stargazers"
                }];
                a.performAction = function (a) {
                    e.hide(a)
                }
            }

            t.show({
                parent: angular.element(document.getElementById("content")),
                templateUrl: srg_base_url + "app/views/partials/bottomSheet.html",
                controller: ["$mdBottomSheet", a],
                controllerAs: "vm",
                bindToController: !0,
                targetEvent: e
            }).then(function (e) {
                e && n.debug(e.name + " clicked!")
            })
        }

        function c(e) {
            r.show(r.simple().content(e).hideDelay(2e3).position("bottom right"))
        }

        var u = this;
        //assign template vars
        u.baseurl = srg_base_url;
        u.menuItems = [];
        u.selectItem = l;
        u.toggleItemsList = s;
        u.showActions = m;
        u.title = i.current.data.title;
        u.showSimpleToast = c;
        u.toggleRightSidebar = d;
        e.loadAllItems().then(function (e) {
            u.menuItems = [].concat(e)
        })
    }]);
angular.module("app").controller("ControlPanelController", ["$mdDialog", "$interval", function (e, a) {
    function t() {
        o.showProgress = !0;
        var interval = a(function () {
            o.determinateValue += 1;
            if (o.determinateValue > 100) {
                o.determinateValue = 10;
                o.showProgress = !1;
                n();
                a.cancel(interval);
            }
        }, 50, 0, !0)
    }

    function n() {
        var alert = e.alert({
            title: "Reloading done!",
            content: o.reloadServer + " server reloaded.",
            ok: "Close"
        });
        e.show(alert).finally(function () {
            alert = void 0
        })
    }

    var o = this;
    o.buttonEnabled = !1;
    o.showProgress = !1;
    o.reloadServer = "Staging";
    o.performProgress = t;
    o.determinateValue = 10;
}]);
angular.module("app").controller("CommonController",
    [function () {
        this.baseurl = srg_base_url;
    }]);
angular.module("angularMaterialAdmin",
    ["ngAnimate", "ngCookies", "ngTouch", "ngSanitize", "ui.router", "ngMaterial", "nvd3", "app"])
    .config(["$stateProvider", "$urlRouterProvider", "$mdThemingProvider", "$mdIconProvider",
        function (stateProvider, urlRouterProvider, mdThemingProvider, mdIconProvider) {
            stateProvider.state("home", {
                url: "",
                templateUrl: srg_base_url + "app/views/main.html",
                controller: "MainController",
                controllerAs: "vm",
                "abstract": !0
            }).state("home.profile", {
                url: "/profile",
                templateUrl: srg_base_url + "app/views/profile.html",
                controller: "ProfileController",
                controllerAs: "vm",
                data: {title: "Profile"}
            }).state("home.dashboard", {
                // while access "#/dashboard"
                url: "/dashboard",
                templateUrl: srg_base_url + "app/views/dashboard.html",
                controller: "CommonController",
                controllerAs: "cc",
                data: {title: "Dashboard"}
            }).state("home.table", {
                url: "/table",
                controller: "TableController",
                controllerAs: "vm",
                templateUrl: srg_base_url + "app/views/table.html",
                data: {title: "Table"}
            });
            urlRouterProvider.otherwise("/dashboard");
            mdThemingProvider.theme("default").primaryPalette("grey", {"default": "600"}).accentPalette("teal", {"default": "500"}).warnPalette("defaultPrimary");
            mdThemingProvider.theme("dark", "default").primaryPalette("defaultPrimary").dark();
            mdThemingProvider.theme("grey", "default").primaryPalette("grey");
            mdThemingProvider.theme("custom", "default").primaryPalette("defaultPrimary", {"hue-1": "50"});
            var e75853 = "#E75753";
            mdThemingProvider.definePalette("defaultPrimary", {
                50: "#FFFFFF",
                100: "rgb(255, 198, 197)",
                200: e75853,
                300: e75853,
                400: e75853,
                500: e75853,
                600: e75853,
                700: e75853,
                800: e75853,
                900: e75853,
                A100: e75853,
                A200: e75853,
                A400: e75853,
                A700: e75853
            });
            mdIconProvider.icon("user", "assets/images/user.svg", 64)
        }]).run(["$templateCache", function (e) {
    // static page cache
    // e.put(srg_base_url+"app/views/partials/visitors.html",
    //     '<md-content ng-controller="VisitorsController as vm" layout="row" layout-align="center center"><nvd3 options="vm.chartOptions" data="vm.visitorsChartData"></nvd3></md-content>');
}]);