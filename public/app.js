import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngMaterialStyles from 'angular-material/angular-material.scss';

import styles from './styles.scss';

let app = angular.module('app', ['ngMaterial']);

app.config(function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
});