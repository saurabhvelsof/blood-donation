"use strict";

/**
 * donor controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::donor.donor", ({ strapi }) => ({
  // Creating Custom Controller for approving donors
  async approve(ctx) {
    try {
      const { id } = ctx.params;

      const donor = await strapi.entityService.findOne("api::donor.donor", id);

      if(donor){
        await strapi.entityService.update("api::donor.donor", id, {
          data: {
            approved: true,
          },
        });
        return { message: "Donor Approved" };
      } else {
        return { message: "No Donor found with the given id."}
      }

    } catch (error) {
      ctx.body = error;
    }
  },
}));
