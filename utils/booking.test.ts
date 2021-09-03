import { isBookedTime } from "./booking"
import appointments from './testData/appointments.testdata'

describe('booking.isBookedTime', () => {
  test('the given time in 3.8 should be booked ', () => {
    const isBooked = isBookedTime(14, new Date(2021, 7, 3), appointments)
    expect(isBooked).toEqual(true)
  })

  test('the given time in 19.8 should be booked ', () => {
    const isBooked = isBookedTime(10, new Date(2021, 7, 19), appointments)
    expect(isBooked).toEqual(true)
  })

  test('the given time in 3.8. should NOT be booked ', () => {
    const isBooked = isBookedTime(15, new Date(2021, 7, 3), appointments)
    expect(isBooked).toEqual(false)
  })

  test('the given time in 3.9. should NOT be booked ', () => {
    const isBooked = isBookedTime(14, new Date(2021, 8, 3), appointments)
    expect(isBooked).toEqual(false)
  })
})
