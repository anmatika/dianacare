import { addDays, areDatesSame } from "./date"

describe('date.addDays', () => {
  test('should add 365 days ', () => {
    const date = addDays(new Date(Date.UTC(2021, 7, 1)), 365)
    expect(date).toEqual(new Date(Date.UTC(2022, 7, 1)))
  })
})

describe('date.areDatesSame', () => {
  test('dates should be same ', () => {
    const areSame = areDatesSame('"2021-08-04T21:00:00"', new Date(Date.UTC(2021, 7, 4)))

    expect(areSame).toEqual(true)
  })

  test('dates should NOT be same ', () => {
    const areSame = areDatesSame('"2021-08-05T21:00:00"', new Date(Date.UTC(2021, 7, 4)))

    expect(areSame).toEqual(false)
  })
})
