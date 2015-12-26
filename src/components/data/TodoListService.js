(function(){
  'use strict';

  angular.module('app')
        .service('todoListService', [
        '$q',
      todoList
  ]);

  function todoList($q){
    var todos = [
      {text: 'UI设计，把绿萝做得尽量高大上', done: false},
      {text: '整合前端图形资源，设计流程图', done: true},
      {text: '整合后端API，进行用户使用过程模拟', done: false}
    ];

    return {
      loadAllItems : function() {
        return $q.when(todos);
      }
    };
  }
})();
