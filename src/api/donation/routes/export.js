module.exports = {
    routes: [
      {
          method: "POST",
          path: "/donations/exportCsv",
          handler: "donation.export",
          config: {
              policies: []
          }
      }
    ],
  };
  