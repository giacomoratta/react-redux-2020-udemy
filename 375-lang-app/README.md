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
