'use strict';

/**
 * about-kdc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-kdc.about-kdc');
