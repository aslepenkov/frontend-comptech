angular.module('templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./components/login-form/login-form.html',
    "<form name=\"form\" ng-submit=\"$ctrl.doLogin()\" role=\"form\"><div class=\"\" ng-class=\"{ 'has-error': form.login.$dirty && form.login.$error.required }\"><label for=\"login\">{{$ctrl.i18n.loginLabelText}}</label><input type=\"text\" name=\"login\" id=\"login\" class=\"\" ng-model=\"$ctrl.login\" required> <span ng-show=\"form.login.$dirty && form.login.$error.required\" class=\"\">{{$ctrl.i18n.loginRequiredText}}</span></div><div class=\"\" ng-class=\"{ 'has-error': form.password.$dirty && form.password.$error.required }\"><label for=\"password\">{{$ctrl.i18n.passwordLabelText}}</label><input type=\"password\" name=\"password\" id=\"password\" class=\"\" ng-model=\"$ctrl.password\" required> <span ng-show=\"form.password.$dirty && form.password.$error.required\" class=\"\">{{$ctrl.i18n.passwordRequiredText}}</span></div><div class=\"\"><button type=\"submit\" ng-disabled=\"form.$invalid || $ctrl.dataLoading\" class=\"\">{{$ctrl.i18n.loginButtonText}}</button> <img src=\"{{$ctrl.dataLoadingImg}}\" ng-if=\"$ctrl.dataLoading\"> <a ng-href=\"#/register\" class=\"\">{{$ctrl.i18n.registerLinkText}}</a></div></form>"
  );


  $templateCache.put('./components/questions-list/questions-list.html',
    "<ul class=\"questionsList\"><li class=\"questionsList__item\" ng-repeat=\"question in $ctrl.items\"><a ui-sref=\"app.questionsItem({ id: question.id })\" class=\"questionsList__link\">{{question.question}}</a>&nbsp; <span class=\"questionsList__delete\" ng-click=\"$ctrl.delete(question.id)\">X</span></li></ul>"
  );


  $templateCache.put('./dashboard/dashboard.html',
    "<div class=\"dashboard\"><div class=\"row\" style=\"margin-top: -40px\"><border-panel><div class=\"row\"><div class=\"border-header\">{{'system_dashboard_show_events' | translate}}</div></div></border-panel></div><div class=\"row\" style=\"margin-top: 20px\"><div class=\"row\"><div class=\"col-sm-2\"><div class=\"border\" style=\"height: 75vh\"><p>{{'system_dashboard_average' |translate |lowercase}}</p></div></div><div class=\"col-sm-10\"><div class=\"row\"><div class=\"col-sm-8\"><div class=\"border\" style=\"height: 40vh\"><p>{{'system_dashboard_current_situation' |translate |lowercase}}</p></div></div><div class=\"col-sm-4\"><div class=\"border\" style=\"height: 40vh\"><p>{{'system_dashboard_notifications' |translate |lowercase}}</p><div style=\"position: absolute; bottom: 10px; left: 0; text-align: center; width: 100%\"><a>{{'system_dashboard_want_more_notifications' |translate |lowercase}}</a></div></div></div></div></div><div class=\"col-sm-10\"><div style=\"height: 35vh; position: relative\"><div style=\"position: absolute; bottom: 0; width: 100%\"><div class=\"row\"><div class=\"col-sm-3\">{{'system_dashboard_rule_top' |translate}}</div><div class=\"col-sm-3\">{{'system_dashboard_rule_offenders' |translate}}</div><div class=\"col-sm-3\">{{'system_dashboard_category_top' |translate}}</div><div class=\"col-sm-3\">{{'system_dashboard_address_top' |translate}}</div></div></div></div></div></div></div></div>"
  );


  $templateCache.put('./index.html',
    "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Example App</title><link rel=\"icon\" type=\"image/png\" href=\"favicon.png\"></head><body><div ui-view></div><link rel=\"stylesheet\" href=\"./css/app.css\"><script src=\"./js/libs.js\"></script><script src=\"./js/app.js\"></script></body></html>"
  );


  $templateCache.put('./layout/layout.html',
    "<div class=\"layout\"><h1 class=\"layout__title\">Questions App</h1><div ui-view></div></div>"
  );


  $templateCache.put('./login/login.html',
    "<div class=\"\"><h2>Login</h2><login-form items=\"$ctrl.strings\"></login-form><debugger model=\"$ctrl.strings\"></debugger></div>"
  );


  $templateCache.put('./questions/question.html',
    "<div class=\"question\"><h2>{{$ctrl.question.question}}</h2><a ui-sref=\"app.questions\" class=\"question__link\">Questions list</a><ul class=\"question__choices\"><li class=\"question__choicesItem\" ng-repeat=\"choice in $ctrl.question.choices\">{{choice.choice}}: {{choice.votes}} votes</li></ul><debugger model=\"$ctrl.questions\"></debugger></div>"
  );


  $templateCache.put('./questions/questions.html',
    "<div class=\"questions\"><h2>Questions</h2><questions-list items=\"$ctrl.questions\"></questions-list><debugger model=\"$ctrl.questions\"></debugger></div>"
  );

}]);
