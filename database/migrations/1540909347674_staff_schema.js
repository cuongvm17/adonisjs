'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StaffSchema extends Schema {
  up () {
    this.create('staff', (table) => {
      table.increments()
      table.string('staffname', 80).notNullable().unique()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('staff')
  }
}

module.exports = StaffSchema
