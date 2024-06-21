'use strict';

const { Parser } = require('json2csv');

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
  // Controller to export donations data
  async export(ctx) {
    try {
      const donations = await strapi.services[
        "api::blood-bank.blood-bank"
      ].find();
      // const fields = ["name", "address", "phone", "email"];
      const json2csvParser = new Parser();
      const csv = json2csvParser.parse(donations);
      ctx.set("Content-Disposition", `attachment; filename=export.csv`);
      ctx.body = csv;
    } catch (error) {
      ctx.body = error;
      console.log(error);
    }
  },
}));
