'use strict';

/**
 * market-intelligence service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::market-intelligence.market-intelligence');
