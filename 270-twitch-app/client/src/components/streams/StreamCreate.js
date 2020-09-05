import React from 'react';

// Field = component
// reduxForm = function which make components, actions, redux store working together
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  // this.props will have a lot of props!

  renderInput({ input, label }) {
    // renderInput(formProps) --> formProps = { input:{...}, meta:{...} }
    // we do not need to specify each prop!
    return (
      <div className="field">
        <label>{ label }</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(formValues) {
    // read and save values (e.g. API, db, etc.)
  }


  render() {
    // Field with name only causes 'Element type is invalid: expected a string (for built-in components)...'
    //  -> it does not know how to show itself
    //  -> it needs an explicit component

    return (
      // #1 - normally, we would do onSubmit={this.onSubmit}
      //    - with redux-form we must use handleSubmit
      //    - no need of event.preventDefault() in onSubmit()

      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate' // name for this specific form
})(StreamCreate);