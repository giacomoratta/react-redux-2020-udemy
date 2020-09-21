## Context
- better version of context system introduced with React 16

#### Props system
- gets data from a parent component to a **direct** child component.
- `app > header > button`: if `app` needs to change the button text, it must pass the prop to `header`, and `header` to `button`.

#### Context system
- gets data from a parent component to **any** nested child component.
- `app > header > button`: if `app` needs to change the button text, it can pass the prop directly to `button`.

### Context object
- this is the real way on how to use context
- think about it like a "pipe" with data flow from parent to child
- a basic scenario: `parent component` and `nested child`
- 2 alternatives (which are needed in different situations):
    1. `defaultValue` in parent, `this.context` in child (see `Field.js`)
    2. `Provider` in parent, `Consumer` in parent (see `Button.js`)
- the **alternative 2** is needed when the component accesses **more than 1 contexts**

### No Redux anymore?
- no, context system is just about communication
- it does not keep status
- but... it is possible to use context like Redux (even if Redux is always preferable)
    - `LanguageContext.js` has been changed to return a component which wraps Context.Provider ready to be used everywhere
- challenges:
    1. provide data to all components which need it
    2. split business logic from view logic
    3. split business logic to avoid endless code files
- **3 good reasons** why Redux should be used instead of context:
    1. Excellent documentation
    2. Well-known design patterns
    3. Tremendous amount of open-source libs
    4. Access to all store data (with not explicit associations)
- **Cons of redux**:
    1. no need of an extra lib
    2. hard to build a 'store' component with cross-cutting concerns



## App overview

- basic user interface with words
- select language
- use context for communicating the language
- only final ui components will change (no intermediate one!)
