# Adonisjs learning basic

I learning some features of adonisjs and implements it.

## Setup

First, you need config database in .env file (recommend mysql db). After that you must running `adonis serve --dev` to start server with port configged in .env file.

## Migrations DB and Generate Seeder && Factory

You need run `adonis migration:run` to gen all migrations file to tables. After that you can run `adonis seed` to generate faker DB which I create 
in seeder folder (by default: 20 staffs and 5 users).

Note: when you're running `adonis seed`. Its will appear some error in terminal but don't care about that. Your DB still generate correctly.

## Running APIs
I create two resource APIs that is: resource('users') and resource('staffs'). 
You can enter to browser:
http://yourlocalhost:port/users
http://yourlocalhost:port/staffs

Good luck!
