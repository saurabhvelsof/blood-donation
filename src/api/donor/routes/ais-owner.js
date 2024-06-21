module.exports = {
  routes: [
    {
      method: "GET",
      path: "/donors/:id",
      handler: "donor.findOne",
      config: {
        policies: ["api::donor.is-owner"],
      },
    },
    {
      method: "PUT",
      path: "/donors/:id",
      handler: "donor.update",
      config: {
        policies: ["api::donor.is-owner"],
      },
    },
  ],
};
