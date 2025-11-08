RICH HICKEY SIMPLE PRINCIPLES

- We should aim for simplicity because simplicity is a prerequisite for reliability.
- Simple is often erroneously mistaken for easy. "Easy" means "to be at hand", "to be approachable". "Simple" is the opposite of "complex" which means "being intertwined", "being tied together". Simple != easy.
- What matters in software is: does the software do what is supposed to do? Is it of high quality? Can we rely on it? Can problems be fixed along the way? Can requirements change over time? The answers to these questions is what matters in writing software not the look and feel of the experience writing the code or the cultural implications of it.
- The benefits of simplicity are: ease of understanding, ease of change, ease of debugging, flexibility.
- Complex constructs: State, Object, Methods, Syntax, Inheritance, Switch/matching, Vars, Imperative loops, Actors, ORM, Conditionals.
- Simple constructs: Values, Functions, Namespaces, Data, Polymorphism, Managed refs, Set functions, Queues, Declarative data manipulation, Rules, Consistency.
- Build simple systems by:
    - Abstracting - design by answering questions related to what, who, when, where, why, and how.
    - Choosing constructs that generate simple artifacts.
    - Simplify by encapsulation.

**Simple vs. easy** text change

- 1:09 "Simplicity is a prerequisite for reliability". - Edsger W. Dijkstra
- 1:23 We need to build simple systems if we want to build good systems.
- 1:27 There is not enough focus on building simple systems.
- 2:02 The roots of "simple" are "sim" and "plex", and means "one twist". The opposite, which would be complex, is "multiple twists" or "braided together".
- 2:30 The central point of the talk is seeing software as being folded together or not.
- 2:37 People usually interchange "simple" with "easy".
- 2:54 The latin origin of "easy" is the root of "adjacent", which means "to lie near" and "to be nearby".
- 3:28 Addressing multiple dimensions is important in software design.
- 3:34 Simple things are those which have one role. They fulfill one task, they have one objective, they cover one concept.
- 3:56 Simple things may be one dimension of a multi-dimensional problem they attempt to solve.
- 4:02 Simple things are focused, they do not address multiple issues.
- 4:12 Simple does not mean one of a kind. An interface does not have to have only one method to be simple. Cardinality does not matter here. What is important is not to have interleaving of issues.
- 4:49 Simplicity is objective, it can be probed.
- 5:16 The origin of "easy" implies "nearness". Something that is near can be easily touched or grabbed.

**Simplicity vs. easiness in software development**

- 5:58 In software development, easy means being near to our understanding, being in our skillset, being familiar.
- 6:20 Easy is overrated in the software industry. "Can I get this running in 5 seconds?" It does not matter if the result is a large ball of mud. All it matters is to be done quickly.
- 7:03 All that is new is somewhat unfamiliar. Do not avoid it even if it is harder to grasp or do at first.
- 7:14 People usually feel uncomfortably to say about something that it is beyond their capabilities.
- 8:17 Easy is a relative term. Something may be easy for someone and difficult for someone else.
- 8:44 Many times, developers say about some that is simple, but they mean easy, because they mean it is something they are familiar with.
- 9:05 The distinction between simple and easy is relevant when dealing with software constructs and artifacts.
- 9:36 The attributes of an artifact are how it runs, what's the performance, how it can be changed over time. These attributes are not the original construct (code).
- 10:06 People focus too much on the construct, on how easily they can write something or how easily is to replace one developer with another, considering just the familiarity of the tools used, not the simplicity or complexity of the code the new developer needs to deal with.

**Why simplicity matters in software development**

- 11:36 We should ask ourselves these questions: does the software do what is supposed to do? Is it of high quality? Can we rely on it? Can problems be fixed along the way? Can requirements change over time? The answers to these questions is what matters in writing software not the look and feel of the experience writing the code or the cultural implications of it.
- 12:34 "We can only hope to make reliable those things we understand". And there is usually a tradeoff. When evolving a system, making it more extensible and dynamic, it may become harder to understand and decide if it is correct.
- 13:24 People can juggle only a few things at a time, a small number. The same with the number of things one can think of at one time. That becomes even harder when things are intertwined, because one cannot reason about them in isolation.
- 13:45 Intertwining raises complexity combinatorially.
- 14:35 To be able to change existing software one needs to understand it and decide how and where to apply changes. If one cannot reason about a program, he can make those decisions.
- 15:45 Q: What happened to every bug out there? A: it passed the type checker, and it passed all tests.
- 16:08 Having tests should not encourage someone to change code without being careful.
- 17:35 Only people running very short races can use their maximum speed from the beginning of the race. Some attempt to cheat life by firing the starting gun every 100 yards and call it a new sprint.
- 18:08 Ignored complexity will slow people down over time.
- 18:50 If one chooses easiness, things move fast but accumulated complexity will kill the project over time. If simplicity is chosen, the project starts slower because one has to think things over.
- 19:35 Easy things can be complex. There can be complex constructs that are succinctly described, familiar, available and easy to use. That is incidental complexity.
- 21:31 The benefits of simplicity are: ease of understanding, ease of change, ease of debugging, flexibility.
- 22:35 We can make things easier by bringing them at hand, by becoming familiar through learning.
- 23:19 We can’t suddenly change our brain to grasp something complex. We need to simplify complexity so we can handle it.
- 24:24 Because we are limited in how many balls we can juggle in the same time, we need to decide how much incidental complexity vs. problem complexity we want.
- 27:35 "LISP programmers know the value of everything and the cost of nothing."
- 28:08 Programmers like to emphasize only the benefits of a new new tool or method, but they rarely mention the downsides or the tradeoffs.
- 28:50 Complex: state, objects, methods, vars, inheritance, switch, matching, syntax, imperative loops, actors, ORM, conditionals, inconsistency. Simpler: values, functions, namespaces, managed refs, polymorphism, data, set functions, queues, declarative data manipulation, rules, consistency.
- 31:36 "Complect" means to interleave, to entwine, to braid. Complect results in bad software.
- 33:08 Complect means to braid together. Compose means to place together. Composing modular components is not simple if the modules are highly interconnected. 
- 34:30 Simplicity enables partitioning (horizontal separation between components) and stratification (vertical separation).
- 35:40 State is easy but introduces complexity because it intertwines value and time. State intertwines everything it touches directly or indirectly, and it is not mitigated by modules and encapsulation.
- 38:00 vars or refs do not make state simpler.

**Constructs that generate complex artifacts**

- 39:27 The following constructs are complex because they intertwine ...:
    - State - everything it touches
    - Object - state, identity, value
    - Methods - function and state, namespaces
    - Syntax - meaning, order
    - Inheritance - types
    - Switch/matching - multiple who/what pairs
    - Vars - value, time
    - Imperative loops - what/who
    - Actors - what/who
    - ORM - OMG

**Conditionals - the rest of the program**

- 42:58 One can better write sophisticated systems with simpler tools that let one focus on the system rather the constructs of the language or tool.

**Constructs that generate simpler artifacts**

- 43:50 The following constructs are simpler:
    - Values - use final, persistent collections
    - Functions - use stateless methods
    - Namespaces - use a language with good support for namespaces
    - Data - use maps, arrays, sets, XML, JSON, etc.
    - Polymorphism - through protocols, type classes
    - Managed refs - Clojure, Haskell
    - Set functions - via libraries
    - Queues - via libraries
    - Declarative data manipulation - via SQL, LINQ, Datalog
    - Rules - via libraries or natively in Prolog

**Consistency - through transactions or values**

- 47:22 One needs to learn to live with environmental complexity: CPU, memory, inherent complexity related to implementation (GC, for example), etc.
- 49:05 Programming is not about typing on a computer keyboard, it is about thinking.

**How to build simple systems**

- 49:17 Build simple systems by:
    - Choosing constructs that generate simple artifacts
    - Abstracting - design by answering questions related to what, who, when, where, why, and how
    - "I don't know; I don't want to know." - simplify by encapsulation.
- 50:38 Answering What
    - What do we want to accomplish?
    - Use the constructs available - interfaces, protocols, type classes - to create sets of functions, and make them abstractions.
    - Give them names.
    - They are specifications, not implementations.
    - Make them small.
    - Use polymorphism to keep them small.
    - Create interfaces at this point not implementations, to avoid introducing complexity.
    - Let how is to be done to be solved later by yourself or someone else.
- 52:40 Answering Who
    - Define the data or entities your abstractions are going to use.
    - When building larger components, pass the subcomponents as arguments. Do not hardwire them into their parents.
    - Build with more components rather than fewer.
    - Do not complicate a component by getting into the details of a subcomponent.
    - Do not complicate an entity with the details of another entity.
- 53:46 Answering How
    - This is where implementation details are fleshed out.
    - Use the polymorphism defined earlier as much as possible.
    - Isolate an implementation as much as possible to avoid tying it up with others.
- 54:40 Answering When, Where
    - Avoid introducing complexity by tying things together.
    - Avoid connecting objects directly by using queues.
- 55:32 Answering Why
    - Avoid introducing complexity when implementing policies and rules.
    - Rules tend to increase complexity through constructs such as conditionals, flow control, etc.
    - Try using a declarative or a rule system to keep things simple.
- 56:06 Information is simple. Keep it simple. Don’t use an object to handle information. That’s not what objects were meant for. We need to create generic constructs that manipulate information. You build them once and reuse them. Objects raise complexity in that area.
- 57:00 If you have a map, use a map construct. Don’t create an object for it. Leave data as data. Do not tie data logic to its representation. Avoid ORM.
- 57:20 Choose simple tools. Write simple stuff. Simplify other people’s work by disentangle it.
- 58:10 Simplicity is a choice. We have a culture of complexity. Avoid tools (languages, constructs, etc.) that generate complex outputs. Simple != easy. Look for complexity and avoid it. Reliability tools - testing, refactoring, type systems - are good but secondary. They do not enforce simplicity. They are just a safety net.
- 59:53 Make simplicity easy by:
    - Using constructs that generate simple artifacts.
    - What matters are the artifacts not the authoring tools.
    - Simplify the problem space before starting.
    - Use abstractions aiming to simplification. Design a bit upfront.
- 1:01:15 "Simplicity is the ultimate sophistication." - Leonardo da Vinci.