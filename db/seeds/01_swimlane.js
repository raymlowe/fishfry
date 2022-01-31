exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("swimlane")
      .del()
      .then(function () {
        // Inserts seed entries
        return knex("swimlane").insert([
          {
            id: "1",
            status: "Docked",
          },
          {
            id: "2",
            status: "Outbound to Sea",
          },
          {
            id: "3",
            status: "Inbound to Harbor",
          },
          {
            id: "4",
            status: "Maintenance",
          }
        ]);
      });
  };