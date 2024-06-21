module.exports = {
    routes: [
      {
          method: "POST",
          path: "/donors/exportCsv",
          handler: "donor.export",
          config: {
              policies: []
          }
      }
    ],
  };
  