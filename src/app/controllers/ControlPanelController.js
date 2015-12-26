//可以用来分组切换 当某用户同时属于多个任务组时 可以用于多组切换
//当多人操作时 可以使用此功能 刷新页面 时时更新 这是更新的可视化设计
(function () {

    angular
        .module('app')
        .controller('ControlPanelController', [
            '$mdDialog', '$interval',
            ControlPanelController
        ]);

    function ControlPanelController($mdDialog, $interval) {
        var vm = this;

        vm.buttonEnabled = false;
        vm.showProgress = false;
        vm.reloadServer = '程序组';
        vm.performProgress = performProgress;
        vm.determinateValue = 10;

        function performProgress() {
            vm.showProgress = true;
            interval = $interval(function() {
                vm.determinateValue += 1;
                if (vm.determinateValue > 100) {
                    vm.determinateValue = 10;
                    vm.showProgress = false;
                    showAlert();
                    $interval.cancel(interval)
                }
            }, 50, 0, true);
        }

        function showAlert() {
            alert = $mdDialog.alert({
                title: '加载完毕!',
                content: vm.reloadServer + " 刷新完毕.",
                ok: '关闭'
            });
            $mdDialog
                .show(alert)
                .finally(function () {
                    alert = undefined;
                });
        }
    }

})();
