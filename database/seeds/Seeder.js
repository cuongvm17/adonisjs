'use strict'

/*
|--------------------------------------------------------------------------
| Seeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class Seeder {
  async run () {
  		const user = await Factory.model('App/Models/User').createMany(5)
		const staff = await Factory.model('App/Models/Staff').createMany(20)
  }
}

module.exports = Seeder
