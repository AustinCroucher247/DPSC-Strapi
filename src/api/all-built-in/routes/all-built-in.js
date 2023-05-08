'use strict';

/**
 * all-built-in router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::all-built-in.all-built-in');
