(function(){
  'use strict';

  angular.module('app')
        .service('messagesService', [
        '$q',
        messagesService
  ]);

  function messagesService($q){
    var messages = [
      {
        userPhoto : '/assets/images/user.svg',
        subject: '游戏方案制定',
        userName: '爱因斯坦',
        date: '2015-10-10',
        text: '制定活动游戏方案，游戏能促进团队沟通等意识'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: '场地选定',
        userName: '普朗克',
        date: '2014-9-10',
        text: '选定活动场地，场地要求开阔，交通方便'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: '活动通知',
        userName: '爱因斯坦',
        date: '2013-11-23',
        text: '发布活动通知时间，鼓励大家踊跃报名'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: '费用预算',
        userName: '波尔',
        date: '2013-11-28',
        text: '根据物品供应商报价制作本次活动的费用预算，并肩预算上传至文件库'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: '培训公司谈判',
        userName: '薛定谔',
        date: '2013-10-09',
        text: '与培训公司确定培训人员、活动方案、培训价格，并将相关资料上传至项目文件库'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: '拓展物品购买',
        userName: '波尔',
        date: '2015-09-08',
        text: '根据活动方案购买活动物品，并将相关收据上传至项目文件库'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(messages);
      }
    };
  }

})();
