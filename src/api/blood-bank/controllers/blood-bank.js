'use strict';

/**
 * blood-bank controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blood-bank.blood-bank', ({strapi})=>({
    async createBloodBank(ctx) {
        try {
        //   const {
        //     name,
        //     address,
        //     phone,
        //     email,
        //     latitude,
        //     longitude
        //   } = ctx.request.body;
    
        //   // Create user with blood bank staff role
        //   const newUser = await strapi.plugins['users-permissions'].services.user.add({
        //     username: email,
        //     email,
        //     password: Math.random().toString(36).slice(-8), // Generate a random password
        //     role: 4 // Blood Bank Staff role ID, replace with actual role ID for blood bank staff
        //   });
    
        //   // Create blood bank record
        //   const bloodBank = await strapi.service('api::blood-bank.blood-bank').create({
        //     data: {
        //       name,
        //       address,
        //       phone,
        //       email,
        //       latitude,
        //       longitude,
        //       user: newUser.id
        //     }
        //   });
    
        //   // Send confirmation email to the blood bank
        //   await strapi.plugins['email'].services.email.send({
        //     to: email,
        //     subject: 'Confirm Your Blood Bank Account',
        //     text: 'Please confirm your blood bank account by resetting your password.',
        //     html: '<p>Please confirm your blood bank account by <a href="https://your-app-url/reset-password">resetting your password</a>.</p>',
        //   });
    
        //   return sanitizeEntity(bloodBank, { model: strapi.models['blood-bank'] });
        } catch (error) {
          ctx.throw(500, 'An error occurred while creating the blood bank');
        }
      }
}));
