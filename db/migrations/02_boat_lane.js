exports.up = function (knex) {
  return knex.schema.createTable("boat_lane", (table) => {
    table.text("boat_id").notNullable().unique().references('id').inTable('tourboat');
    table.text("lane_id").notNullable().unique().references('id').inTable('swimlane');;
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("boat_lane");
};