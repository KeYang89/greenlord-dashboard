(function(){
  'use strict';

  angular.module('app')
    .service('countriesService', [
      countriesService
    ]);

  function countriesService(){
    var allCountries = [
      {name: '游戏方案制定', code: '爱因斯坦：制定活动游戏方案，游戏能促进团队沟通等意识'},
      {name: '费用预算', code: '波尔：根据物品供应商报价制作本次活动的费用预算，并肩预算上传至文件库'},
      {name: '活动通知', code: '爱因斯坦：发布活动通知时间，鼓励大家踊跃报名'},
      {name: '培训公司谈判', code: '薛定谔：与培训公司确定培训人员、活动方案、培训价格，并将相关资料上传至项目文件库'},
      {name: '拓展物品购买', code: '波尔：根据活动方案购买活动物品，并将相关收据上传至项目文件库'},
      {name: '场地选定', code: '普朗克：选定活动场地，场地要求开阔，交通方便'}
    ];

    return {
      loadAll : function() {
        return allCountries.map(function(country) {
          return {
            value: country.name.toLowerCase(),
            display: country.name,
            code: country.code
          };
        });
      }
    };
  }

})();
