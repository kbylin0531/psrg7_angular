// static page cache
// e.put(srg_base_url+"app/views/partials/visitors.html",
//     '<md-content ng-controller="VisitorsController as vm" layout="row" layout-align="center center"><nvd3 options="vm.chartOptions" data="vm.visitorsChartData"></nvd3></md-content>');
// angular.module("app").controller("VisitorsController", [function () {
//     var e = this;
//     e.visitorsChartData = [{key: "Mobile", y: 5264}, {
//         key: "Desktop",
//         y: 3872
//     }];
//     e.chartOptions = {
//         chart: {
//             type: "pieChart",
//             height: 210,
//             donut: !0,
//             x: function (e) {
//                 return e.key
//             },
//             y: function (e) {
//                 return e.y
//             },
//             valueFormat: d3.format(".0f"),
//             color: ["rgb(0, 150, 136)", "#E75753"],
//             showLabels: !1,
//             showLegend: !1,
//             title: "Over 9K",
//             margin: {top: -10}
//         }
//     }
// }]);