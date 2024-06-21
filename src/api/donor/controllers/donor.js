"use strict";

const { Parser } = require("json2csv");

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

      if (donor) {
        await strapi.entityService.update("api::donor.donor", id, {
          data: {
            approved: true,
          },
        });
        return { message: "Donor Approved" };
      } else {
        return { message: "No Donor found with the given id." };
      }
    } catch (error) {
      ctx.body = error;
    }
  },
  // Controller to export donors data
  async export(ctx) {
    try {
      const donors = await strapi.services["api::blood-bank.blood-bank"].find();
      // const fields = ["name", "address", "phone", "email"];
      const json2csvParser = new Parser();
      const csv = json2csvParser.parse(donors);
      ctx.set("Content-Disposition", `attachment; filename=export.csv`);
      ctx.body = csv;
    } catch (error) {
      ctx.body = error;
      console.log(error);
    }
  },
}));
