'use strict';

/**
 * built-in1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::built-in1.built-in1');
