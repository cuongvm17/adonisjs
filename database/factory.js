'use strict'
const Factory = use('Factory')
const Hash = use('Hash')
const User = use('App/Models/User')

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
  return {
    username: faker.username(),
    email: 'test@test.com',
    password: faker.password()
  }
})

Factory.blueprint('App/Models/Staff', (faker) => {
  return {
    staffname: faker.username(),
    user_id: Math.round(Math.random() * 5)
  }
})
