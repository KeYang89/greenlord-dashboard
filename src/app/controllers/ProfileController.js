(function(){

  angular
    .module('app')
    .controller('ProfileController', [
      ProfileController
    ]);

  function ProfileController() {
    var vm = this;

    vm.user = {
      title: '杨可',
      email: 'demo@greenlord.cn',
      firstName: '',
      lastName: '' ,
      company: '茫丁数据系统公司' ,
      address: '合肥市某某街' ,
      city: '合肥' ,
      state: '安徽省' ,
      biography: '深度耕耘企业市场，为广大企业主提供最给力、最好的服务.',
      postalCode : '230022'
    };
  }

})();
