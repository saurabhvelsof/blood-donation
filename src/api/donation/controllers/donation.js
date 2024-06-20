'use strict';

/**
 * donation controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::donation.donation', ({strapi})=>({
    // Creating Custom Controller for approving Donations
  async approve(ctx) {
    try {
      const { id } = ctx.params;

      const donation = await strapi.entityService.findOne("api::donation.donation", id);

      if(donation){
        await strapi.entityService.update("api::donation.donation", id, {
          data: {
            approved: true,
          },
        });
        return { message: "Donation Approved" };
      } else {
        return {
            message: "No Donation found with given id"
        }
      }

    } catch (error) {
      ctx.body = error;
    }
  },
}));
