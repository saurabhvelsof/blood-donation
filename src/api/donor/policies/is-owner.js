'use strict';

/**
 * `is-owner` policy
 */

const utils = require("@strapi/utils")
const {PolicyError} = utils.errors;

module.exports = async (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In is-owner policy.');

    // Get the ID of the donor from the request parameters
    const { id } = policyContext.request.params;
    // Get the current authenticated user
    const user = policyContext.state.user;

    console.log({user});

    // find the donor details of the given id
    const donor = await strapi.entityService.findOne("api::donor.donor", id, {
        populate: ["donor_user_id"]
    });
    console.log(donor);

    if(donor.donor_user_id.id === user.id){
        return true;
    }

    // throw policy error if id's don't match
    throw new PolicyError("You are not allowed to approve this donor.");
};
