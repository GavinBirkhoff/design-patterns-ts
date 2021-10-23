# design-patterns-ts

《大话设计模式》案例忠于原书。使用 typescript 实现，相比 c++，java 来说 js 更能快速描述一些抽象思想。设计模式只是一种思想，用伪代码实现其实更好！如果你还不了解 c++/java，以下遇到的相关可以直接略过，不耽误理解。

> 类型安全性只做基本考虑，让精力侧重在设计模式之上

# Use

```
npm install
npm run test

注：少部分模式没有写test，没有写test可以直接运行相应文件看log。
```

# design-patterns

### 简单工厂模式

[代码无措就是优？](./src/factory.ts)

### 策略模式

[商场促销](./src/strategy.ts)

### 单一职责原则

一个类的职责要单一。让 code 易维护，易扩展，易复用，灵活多样。

### 开放-封闭原则

软件实体（类、模块、函数等等）应该可以扩展而不可以修改。

### 依赖倒转原则

- 高层模块不应该依赖底层模块。两个都应该依赖抽象。
- 抽象不应该依赖细节。细节应该依赖抽象。

联想到 java 系中 JDBC。

### 装饰模式

[穿什么有这么重要？](./src/decorator.ts)
动态的给一个对象添加一些额外的职责，就增加功能来说，装饰模式比生成子类更灵活。
联想到 es7 的装饰器，java 的注解(注解本质起不到增强的作用，的配合反射)，spring 中的 AOP 切面编程。

### 代理模式

为其他对象提供一种代理以控制对这个对象的访问。

> es6 提供代理对象 Proxy
> 远程代理、虚拟代理、安全代理、智能指引...

### 工厂方法模式

[加减乘除](./src/factoryMethod.ts)

### 原型模式

[简历复印](./src/prototype.ts)

原型模式其实就是一个对象再创建另外一个可定制的对象，而且不需知道任何可创建的细节。

### 模版方法模式

[模版方法](./src/templateMethod.ts)

### 迪米特法则

迪米特法则(Law of Demeter )又叫做最少知识原则，也就是说，一个对象应当对其他对象尽可能少的了解。不和陌生人说话。英文简写为: LoD。

如果两个类不必直接彼此通信，那么这两个类就不应当发生直接的相互作用。如果其中一个类需要调用另一个的方法的时候，可以通过第三者转发这个方法。

### 外观模式

[E.g](./src/facade.ts)

外观模式（Facade），为子系统中一组接口提供一个一致的界面，此模式定义一个高层的接口，这个接口使得这一子系统更加的容易使用。

### 创造者模式

[E.g](./src/builder.ts)

将一个复杂对象的创建和表示分离，使得同一个创建过程可以创建不同的表示。

### 观察者模式

[E.g](./src/observer.ts)

观察者模式又叫发布-订阅（Publish/Subscribe）模式。观察者模式订阅了一对多的关系，让多个观察者监听某一个主题对象。这个主题对象在状态发生变化的时候通知所有观察者对象，使他们能够自动更新自己。

### 抽象工厂模式

提供创建一些列相关或相互依赖对象的接口，而无需指定他们具体的类。

### 状态模式

[工作状态](./src/state.ts)

当一个对象的内在状态改变时允许改变其行为，这个对象看起来像是改变了其类。

> 状态模式主要解决的是控制一个对象状态发生转变的条件表达式过于复杂的情况。把状态判断逻辑转移到表示不同状态的一系列类当中，可以把复杂的判断逻辑简化。

### 适配器模式

[E.g](./src/adapter.ts)

将一个类的接口转换成客户需要的接口。

### 备忘录模式

[E.g](./src/memento.ts)

在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可以将该对象恢复到原来的保存状态。

### 组合模式

[树枝-叶子](./src/composite.ts)

将对象组合成树形结构以表示“部分-整体”的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。

### 迭代器模式

es6 语言本身已经提供
提供一种方法顺序访问一个聚合对象中各个元素，而且不暴露该对象的内部表示。

### 单例模式

[E.g](./src/singleton.ts)

保证一个类仅有一个实例，并提供一个访问它的全局访问点。

### 桥接模式

[E.g](./src/bridge.ts)

将抽象部分与实现部分分离，使他们都可以独立的变化。

### 命令模式

[烧烤](./src/command.ts)

将一个请求封装为一个对象，从而是你可以用不同的请求对象对客户进行参数化；对请求排队或记录请求日志，以及支持可撤销的操作。

### 职责链模式

[烧烤](./src/chainRes.ts)
使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系。将这个对象连城一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。

### 中介模式/调停者模式

[E.g](./src/mediator.ts)

用一个中介对象来封装一系列的对象交互。中介着对象使得各对象不必相互显示引用，从而使其耦合松散，而且可以独立改变他们之间的交互。
