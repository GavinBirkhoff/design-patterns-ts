abstract class Prototype {
  private id: string
  constructor(id: string) {
    this.id = id
  }
  public getId() {
    return this.id
  }
  public abstract clone(): Prototype
}

class ConcretePrototype1 extends Prototype {
  public override clone() {
    return Object.assign({}, this)
  }
}
// 以上是模型

interface ICloneable<T> {
  clone(): T
}

class WorkExperience implements ICloneable<WorkExperience> {
  private workDate?: string
  private company?: string
  public setWorkDate(date: string) {
    this.workDate = date
  }
  public getWorkDate(): string | undefined {
    return this.workDate
  }
  public setCompany(company: string) {
    this.company = company
  }
  public getCompany(): string | undefined {
    return this.company
  }
  public clone() {
    const obj = Object.assign({}, this)
    Reflect.setPrototypeOf(obj, Reflect.getPrototypeOf(this))
    return obj
  }
}

class Resume implements ICloneable<Resume> {
  public name?: string
  private sex?: string
  private age?: string

  private work?: WorkExperience
  constructor(name: string | WorkExperience) {
    if (typeof name === 'string') {
      this.name = name
      this.work = new WorkExperience()
    } else {
      this.work = name.clone()
    }
  }

  public setPersonalInfo(sex: string, age: string) {
    this.sex = sex
    this.age = age
  }

  public setWorkExperience(workDate: string, company: string) {
    this.work?.setWorkDate(workDate)
    this.work?.setCompany(company)
  }

  public display() {
    console.log(`${this.name} ${this.sex} ${this.age}
工作经历：${this.work?.getWorkDate() || '无'} ${this.work?.getCompany() || '无'}`)
  }
  public clone() {
    const obj = new Resume(this.work as WorkExperience)
    obj.name = this.name
    obj.sex = this.sex
    obj.age = this.age
    return obj
  }
}

export { Resume }
