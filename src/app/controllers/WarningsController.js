//线表 可以表示项目某一动态数据 以下的warningFunction里三角函数是模拟 
//你们可以自己编函数表示某一维度的数据 例如销售、问题反馈等等
(function () {
    angular
        .module('app')
        .controller('WarningsController', [
            WarningsController
        ]);
    function WarningsController() {
        var vm = this;

        // TODO: move data to the service
        vm.warningsChartData = warningFunction;

        function warningFunction() {
            var sin = [];
            for (var i = 0; i < 100; i++) {
                sin.push({x: i, y: Math.abs(Math.cos(i/10) *0.25*i  - 0.4*i)});
            }
            return [ { values: sin, color: 'rgb(0, 150, 136)', area: true } ];
        }

        vm.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 210,
                margin: { top: -10, left: -20, right: -20 },
                x: function (d) { return d.x },
                y: function (d) { return d.y },
                showLabels: false,
                showLegend: false,
                title: '项目效率',
                showYAxis: false,
                showXAxis: false,
                tooltip: { contentGenerator: function (d) { return '<span class="custom-tooltip">' + Math.round(d.point.y) + '</span>' } }
            }
        };
    }
})();
