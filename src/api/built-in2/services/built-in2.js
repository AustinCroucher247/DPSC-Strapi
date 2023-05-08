'use strict';

/**
 * built-in2 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::built-in2.built-in2');
