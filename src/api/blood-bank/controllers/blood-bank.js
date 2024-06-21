"use strict";

/**
 * blood-bank controller
 */
const { Parser } = require("json2csv");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::blood-bank.blood-bank",
  ({ strapi }) => ({
    // controller to export blood banks data
    async export(ctx) {
      try {
        const bloodBanks = await strapi.services[
          "api::blood-bank.blood-bank"
        ].find();
        // const fields = ["name", "address", "phone", "email"];
        const json2csvParser = new Parser();
        const csv = json2csvParser.parse(bloodBanks);
        ctx.set("Content-Disposition", `attachment; filename=export.csv`);
        ctx.body = csv;
      } catch (error) {
        ctx.body = error;
        console.log(error);
      }
    },
  })
);
