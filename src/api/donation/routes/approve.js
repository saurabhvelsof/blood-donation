module.exports = {
    routes: [
      {
          method: "PUT",
          path: "/donations/:id/approve",
          handler: "donation.approve",
          config: {
              policies: []
          }
      }
    ],
  };
  