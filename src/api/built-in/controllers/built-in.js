'use strict';

/**
 * built-in controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::built-in.built-in');
