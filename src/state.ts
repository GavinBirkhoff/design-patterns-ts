abstract class State {
  public abstract handle(context: Context): void
}

class ConcreteStateA extends State {
  public override handle(context: Context) {
    context.setState(new ConcreteStateB())
  }
}

class ConcreteStateB extends State {
  public override handle(context: Context) {
    context.setState(new ConcreteStateA())
  }
}

class Context {
  private state: State
  constructor(state: State) {
    this.state = state
  }

  public setState(state: State) {
    this.state = state
    console.log(`当前状态 ${Reflect.getPrototypeOf(state)?.constructor.name}`)
  }
  public getState() {
    return this.state
  }

  public request() {
    this.state.handle(this)
  }
}

const c = new Context(new ConcreteStateA())
c.request()
c.request()
c.request()

// 以上是模型
abstract class State1 {
  public abstract writeProgram(w: Work): void
}

class ForenoonState extends State1 {
  public writeProgram(w: Work) {
    if (w.hour < 12) {
      console.log(`当前时间：${w.hour}点 上午工作，精神百倍`)
    } else {
      w.setState(new NoonState())
      w.writeProgram()
    }
  }
}

class NoonState extends State1 {
  public writeProgram(w: Work) {
    if (w.hour < 13) {
      console.log(`当前时间：${w.hour}点  饿了 午饭 犯困 午休`)
    } else {
      w.setState(new AfternoonState())
      w.writeProgram()
    }
  }
}

class AfternoonState extends State1 {
  public writeProgram(w: Work) {
    if (w.hour < 17) {
      console.log(`当前时间：${w.hour}点  下午状态还不错继续努力`)
    } else {
      w.setState(new EveningState())
      w.writeProgram()
    }
  }
}

class EveningState extends State1 {
  public writeProgram(w: Work) {
    if (w.taskFinished) {
      w.setState(new RestState())
      w.writeProgram()
    } else {
      if (w.hour < 21) {
        console.log(`当前时间：${w.hour}点  加班哦 疲劳至极`)
      } else {
        w.setState(new SleepingState())
        w.writeProgram()
      }
    }
  }
}

class RestState extends State1 {
  public writeProgram(w: Work) {
    console.log(`当前时间：${w.hour}点  下班回家了`)
  }
}

class SleepingState extends State1 {
  public writeProgram(w: Work) {
    console.log(`当前时间：${w.hour}点  不行了 睡着了`)
  }
}

class Work {
  private current: State1 = new ForenoonState()
  // 以下不使用getXX setXX 使用public暴露，现实生产不建议为了快速编写演示
  public hour = 0
  public finish = false
  public taskFinished?: boolean

  public setState(state: State1) {
    this.current = state
  }

  public getState() {
    return this.current
  }

  public writeProgram() {
    this.current.writeProgram(this)
  }
}

export { Work }
