angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapimp-env.eba-2zmp26zy.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);