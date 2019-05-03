const db = require('./database/config/database');
const Games = require('./database/models/Games')
const Questions = require('./database/models/questions')
const connectSequelize = async () => {
  try {
    await db.authenticate()
    console.log('Successfully connected to the database')
    console.log('Please wait until the tables are successfully created')
  } catch (e) {
    console.log('error')
  }
}

connectSequelize()

const checkDB = async () => {
  await db.sync({ force: true })
  await Games.create({
    name: 'Name',
    type: 'True or false'
  })
  await Questions.create({
    question: 'My name is omar',
    answer: 'true',
    gameId: 1
  })
}

checkDB()

// NOTE: BEFORE RUNNING THIS FILE YOU SHOULD CREATE A DATABASE CALLED "games" in postgres.
// then when you run this file all of the tables will be created automatically
