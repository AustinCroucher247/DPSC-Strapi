'use strict';

/**
 * wood-turning service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wood-turning.wood-turning');
