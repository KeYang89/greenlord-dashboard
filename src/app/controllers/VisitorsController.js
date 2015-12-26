//圈状对比表 以下是圈状对比表的使用范例 比如可以表示已经完成的项目和未完成的项目
//或者是任意两种数据的对比
(function () {
    angular
        .module('app')
        .controller('VisitorsController', [
            VisitorsController
        ]);

    function VisitorsController() {
        var vm = this;

        // TODO: move data to the service
        vm.visitorsChartData = [ {key: '已完成', y: 24}, { key: '未完成', y: 62} ];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(0, 150, 136)', '#2196F3'],
                showLabels: false,
                showLegend: false,
                title: '任务',
                margin: { top: -10 }
            }
        };
    }
})();
