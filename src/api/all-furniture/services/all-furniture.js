'use strict';

/**
 * all-furniture service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-furniture.all-furniture');
