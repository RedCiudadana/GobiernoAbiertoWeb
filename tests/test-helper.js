import Application from 'gobiernoabierto-webpage/app';
import config from 'gobiernoabierto-webpage/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
