'use strict';

/**
 * blood-inventory service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blood-inventory.blood-inventory');
