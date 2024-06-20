'use strict';

/**
 * `is-owner` policy
 */

module.exports = async (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In is-owner policy.');

    // Get the ID of the resource from the request parameters
    const { id } = policyContext.request.params;
    // Get the current authenticated user
    const { user } = policyContext.state;

    // Check if the user is authenticated
    if (!user) {
        return policyContext.unauthorized(`You're not logged in!`);
    }

    // Retrieve the entity (resource) from the database
    const entity = await strapi.service('api::donor.donor').findOne({ id });

    // Check if the entity exists
    if (!entity) {
        return policyContext.notFound(`No donor found with ID ${id}`);
    }

    // Check if the current user is the owner of the entity
    if (entity.user.id !== user.id) {
        return policyContext.unauthorized(`You're not allowed to access this donor!`);
    }

    // Allow access if the user is the owner
    return true;
};
