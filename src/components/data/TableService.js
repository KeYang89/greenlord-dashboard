(function(){
  'use strict';

  angular.module('app')
        .service('tableService', [
        '$q',
      tableService
  ]);

  function tableService($q){
    var tableData = [
      {
        issue: '响应式设计',
        progress: 100,
        status: 'Done',
        class: 'md-accent'
      },
      {
        issue: 'Material Design',
        progress: 40,
        status: 'Feedback',
        class: ''
      },
      {
        issue: '卡片化重新设计',
        progress: 100,
        status: 'Done',
        class: 'md-accent'
      },
      {
        issue: '功能修改，使控制面板更简洁',
        progress: 84,
        status: 'In progress',
        class: 'orange'
      },
      {
        issue: '数据可视化',
        progress: 100,
        status: 'Done',
        class: 'md-accent'
      },
      {
        issue: 'CSS修改',
        progress: 20,
        status: 'Feedback',
        class: ''
      },
      {
        issue: 'API接入',
        progress: 1,
        status: 'To do',
        class: 'md-warn'
      },
      {
        issue: '色板选择',
        progress: 100,
        status: 'Done',
        class: 'md-accent'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(tableData);
      }
    };
  }
})();
