'use strict';

/**
 * all-kitchen service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-kitchen.all-kitchen');
