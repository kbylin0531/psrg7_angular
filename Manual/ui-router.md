# Instrument
AngularUI库提供的最有用的库之一便是 ui-router 。它是一个路由框架,允许你通过状态机组织接口,而不是简单的URL路由。

# Install
要确保你已经全局安装了Bower: npm install bower -g
然后你就可以使用Bower安装 angular-ui 库了: bower install angular-ui-router --save
你还要确保在视图中链接这个库:
    <script src="app/bower_components/angular-ui-router/release/angular-ui-router.js"></script>
同时还需要将 ui.router 作为依赖注入到你的应用中:
    angular.module('myApp', ['ui.router']);
    
# Usage
为了定义路由,你可以使用 .config 方法,和常见的方式一样,但不是将路由设置在$routeProvider 上,而是将状态设置在 $stateProvider 上。
.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider.state('start', {
        url: '/start',
        templateUrl: 'partials/start.html'
    });
});
在每个视图上设置模板的方式有三种。
- template :一个HTML内容字符串或者返回HTML的函数。
- templateUrl :一个模板URL路径字符串或者是返回URL路径字符串的函数。
- templateProvider :一个返回HTML内容字符串的函数。

if required to assign vars in outer template,
make a controller and assign data is usable.

    // to build an controller named 'Common'
    angular.module("app").controller("CommonController",
        [function () {
            this.baseurl = srg_base_url;
        }]);
    // set controller for this template
    // it will go the absolute path if templateUrl is begin with '/'
    stateProvider.state("home", {
        url: "",
        templateUrl: "/app/views/main.html",
        controller: "CommonController",
        controllerAs: "vm",//alias for controller in template file
        "abstract": !0
    });
    //then you can use this var in template like:
    //<panel-widget flex title="TODO list" template="{{cc.baseurl}}/app/views/partials/checkboxes.html"></panel-widget>
    //  or
    //<div ng-include src="vm.baseurl+'/app/views/partials/messages.html'"/>
    
    