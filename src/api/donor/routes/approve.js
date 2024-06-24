module.exports = {
  routes: [
    {
        method: "PUT",
        path: "/donors/approve/:id",
        handler: "donor.approve",
        config: {
            policies: ["api::donor.is-owner"]
        }
    }
  ],
};
