module.exports = {
    routes: [
      {
          method: "POST",
          path: "/blood-banks/exportCsv",
          handler: "blood-bank.export",
          config: {
              policies: []
          }
      }
    ],
  };
  