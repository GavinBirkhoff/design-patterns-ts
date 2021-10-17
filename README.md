# design-patterns-ts
《大话设计模式》案例忠于原书。使用typescript实现，相比c++，java来说js更能快速描述一些抽象思想。设计模式只是一种思想，用伪代码实现其实更好！如果你还不了解c++/java，以下遇到的相关可以直接略过，不耽误理解。

> 类型安全性只做基本考虑，让精力侧重在设计模式之上

# Use
```
npm install
npm run test
```
# design-patterns
### 简单工厂模式
[代码无措就是优？](./src/factory.ts)

### 策略模式
[商场促销](./src/strategy.ts)

### 单一职责原则
一个类的职责要单一。让code易维护，易扩展，易复用，灵活多样。

### 开放-封闭原则
软件实体（类、模块、函数等等）应该可以扩展而不可以修改。
### 依赖倒转原则
- 高层模块不应该依赖底层模块。两个都应该依赖抽象。
- 抽象不应该依赖细节。细节应该依赖抽象。

联想到java系中JDBC。

### 装饰模式
[穿什么有这么重要？](./src/decorator.ts)
动态的给一个对象添加一些额外的职责，就增加功能来说，装饰模式比生成子类更灵活。
联想到es7的装饰器，java的注解(注解本质起不到增强的作用，的配合反射)，spring中的AOP切面编程。

### 代理模式

为其他对象提供一种代理以控制对这个对象的访问。
> es6提供代理对象Proxy
> 远程代理、虚拟代理、安全代理、智能指引...

### 工厂方法模式

[加减乘除](./src/factoryMethod.ts)
### 原型模式

[简历复印](./src/prototype.ts)

原型模式其实就是一个对象再创建另外一个可定制的对象，而且不需知道任何可创建的细节。

### 模版方法模式

[模版方法](./src/templateMethod.ts)