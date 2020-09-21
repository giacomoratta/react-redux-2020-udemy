## Context
- better version of context system introduced with React 16

#### Props system
- gets data from a parent component to a **direct** child component.
- `app > header > button`: if `app` needs to change the button text, it must pass the prop to `header`, and `header` to `button`.

#### Context system
- gets data from a parent component to **any** nested child component.
- `app > header > button`: if `app` needs to change the button text, it can pass the prop directly to `button`.

#### No Redux anymore?
- no, context system is just about communication
- it does not keep status

### Context object
- this is the real way on how to use context
- think about it like a "pipe" with data flow from parent to child
- a basic scenario: `parent component` and `nested child`
- 2 alternatives (which are needed in different situations):
    1. `defaultValue` in parent, `this.context` in child (see `Field.js`)
    2. `Provider` in parent, `Consumer` in parent (see `Button.js`)
- the **alternative 2** is needed when the component accesses **more than 1 contexts**



## App overview

- basic user interface with words
- select language
- use context for communicating the language
- only final ui components will change (no intermediate one!)
