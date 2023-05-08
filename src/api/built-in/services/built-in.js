'use strict';

/**
 * built-in service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::built-in.built-in');
