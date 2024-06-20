'use strict';

/**
 * blood-bank service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blood-bank.blood-bank');
