var portfolio = angular.module('portfolio',['chart.js']);

portfolio.controller('me_portfolio', function ($scope) {

  var data = {
    labels: ["Gestion & Management projet", "Ingénierie industrielle", "Anglais", "Développement mobile", "Développement web"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [75, 50, 85, 90, 70]
        }
    ]
};

var ctx = document.getElementById("radarChart").getContext("2d");
var myRadarChart = new Chart(ctx).Radar(data,{angleLineColor : "rgba(255,255,255,.3)",scaleLineColor: "rgba(255,255,255,.3)"});
$scope.radarChart = myRadarChart;
});
