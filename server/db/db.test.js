import * as db from './db.js'
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import connection from './connection.js'

beforeAll(() => {
  //return connection.migrate.latest()
})

beforeEach(() => {
  //return connection.seed.run()
})

describe('getAllRestaurants', () => {
  it('gets the complete list of restaurants', async () => {
    const allRestaurants = await db.getAllRestaurants()
    expect(allRestaurants).toHaveLength(2)
    expect(allRestaurants[1].id).toBe(2)
  })
})

// describe('deleteJar', () => {
//   it('tests deleting a single jar', async () => {
//     await db.deleteJar(3)
//     const allJars = await db.getAllJars()
//     // console.log(allJars) Uncomment to see what's in the test DB right now!
//     expect(allJars).toHaveLength(2)
//   })
// })



afterAll(() => {
  connection.destroy()
})
