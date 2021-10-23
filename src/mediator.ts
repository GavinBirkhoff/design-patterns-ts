abstract class Mediator {
  public abstract send(message: string, colleague: Colleague): void
}

abstract class Colleague {
  protected mediator: Mediator
  constructor(mediator: Mediator) {
    this.mediator = mediator
  }
}

class ConcreteColleague1 extends Colleague {
  public send(message: string) {
    this.mediator.send(message, this)
  }

  public notify(message: string) {
    console.log(`同事1得到消息:${message}`)
  }
}

class ConcreteColleague2 extends Colleague {
  public send(message: string) {
    this.mediator.send(message, this)
  }

  public notify(message: string) {
    console.log(`同事2得到消息:${message}`)
  }
}

class ConcreateMediator extends Mediator {
  private concreteColleague1?: ConcreteColleague1
  private concreteColleague2?: ConcreteColleague2

  public setConcreteColleague1(colleague: ConcreteColleague1) {
    this.concreteColleague1 = colleague
  }

  public setConcreteColleague2(colleague: ConcreteColleague2) {
    this.concreteColleague2 = colleague
  }
  public send(message: string, colleague: Colleague) {
    if (colleague === this.concreteColleague1) {
      this.concreteColleague2?.notify(message)
    } else {
      this.concreteColleague1?.notify(message)
    }
  }
}

const m = new ConcreateMediator()
const cc1 = new ConcreteColleague1(m)
const cc2 = new ConcreteColleague2(m)

m.setConcreteColleague1(cc1)
m.setConcreteColleague2(cc2)

cc1.send(`吃过饭了吗？`)
cc2.send(`吃过了`)
