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
    const { user } = policyContext.state.user;

    console.log({user});

    // Check if the user is authenticated
    if (!user) {
        return "Your are not logged in.";
    }

    // Retrieve the entity (resource) from the database
    const donor = await strapi.entityService.findOne("api::order.order", id, {
        populate: ["donor_user_id"]
      });

    // Check if the entity exists
    if (!donor) {
        return "No Donor found with that ID.";
    }

    // Check if the current user is the owner of the entity
    if (donor.donor_user_id.id !== user.id) {
        return "You're not allowed to access this donor!";
    }

    // Allow access if the user is the owner
    return true;
};
