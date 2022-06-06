'use strict';

/**
 * receptor service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::receptor.receptor');
