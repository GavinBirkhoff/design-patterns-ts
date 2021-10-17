import { Resume } from '../src/prototype'
describe('原型模式', () => {
  test('简历复制', () => {
    const gavin = new Resume('gavin')
    gavin.setPersonalInfo('男', '30')
    gavin.setWorkExperience('2020', 'google')
    // gavin.display()
    const gavin1 = gavin.clone()
    gavin1.setWorkExperience('2020', 'google1')
    expect(gavin.name).toBe(gavin1.name)
    expect(gavin).not.toEqual(gavin1)
  })
})
