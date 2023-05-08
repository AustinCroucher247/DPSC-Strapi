'use strict';

/**
 * all-built-in service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-built-in.all-built-in');
