`
       <messages-section theme="md-accent" title="New Orders" messages="vm.messages"></messages-section>
        <messages-section theme="md-primary" title="Delivered" messages="vm.messages"></messages-section>
        <messages-section theme="md-warn" title="Problems reported" messages="vm.messages"></messages-section>
`
`

angular.module("app").directive("messagesSection", function () {
    return {
        restrict: "E",
        scope: {title: "@", theme: "@", messages: "="},
        template: '<section>  ' +
        '<md-subheader ng-class="theme">{{title}}</md-subheader>  ' +
        '<md-list>    ' +
        '<md-list-item class="md-3-line" ng-repeat="message in messages">    ' +
        '<img class="md-avatar" ng-src="' + srg_base_url + 'assets/images/einstein.jpg">    ' +
        '<div class="md-list-item-text">      ' +
        '<h3>{{message.subject}}</h3>      ' +
        '<h4>{{message.userName}}</h4>      ' +
        '<p>{{message.text}}</p>    ' +
        '</div>    ' +
        '</md-list-item>  ' +
        '</md-list>' +
        '</section>',
        link: function () {
        }
    }
});

`

`
    angular.module("app").controller("MessagesController", ["messagesService", function (e) {
        var a = this;
        a.messages = [];
        e.loadAllItems().then(function (e) {
            a.messages = [].concat(e)
        });
    }]);
`