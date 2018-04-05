import angular from 'angular';
import uirouter from 'angular-ui-router';
import config from './config';
import dataService from './dataService';
import './css/bootstrap.css';
import './css/style.css';
angular.module("app",[uirouter])
    .config(config)
    .factory("dataService",dataService)