'use strict';

/**
 * all-built-in controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::all-built-in.all-built-in');
