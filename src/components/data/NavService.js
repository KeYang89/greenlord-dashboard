(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: '控制面板',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: '个人资料',
        icon: 'person',
        sref: '.profile'
      },
      {
        name: '任务列表',
        icon: 'view_module',
        sref: '.table'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
