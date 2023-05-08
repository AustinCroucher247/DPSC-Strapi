'use strict';

/**
 * built-in router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::built-in.built-in');
