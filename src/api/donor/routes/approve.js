module.exports = {
  routes: [
    {
        method: "PUT",
        path: "/donors/:id/approve",
        handler: "donor.approve",
        config: {
            policies: []
        }
    }
  ],
};
