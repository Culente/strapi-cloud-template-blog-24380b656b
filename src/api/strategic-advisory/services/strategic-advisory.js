'use strict';

/**
 * strategic-advisory service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strategic-advisory.strategic-advisory');
