import React from 'react';

// Field = component
// reduxForm = function which make components, actions, redux store working together
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  // this.props will have a lot of props!

  renderError({ error, touched}) {
    if (touched && error) {
      // ui error message has display:none by default; see <form>
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  // turned renderInput into arrow function because of an error related to 'this' and context :/
  renderInput = ({ input, label, meta }) => {
    // renderInput(formProps) --> formProps = { input:{...}, meta:{...} }
    // we do not need to specify each prop!

    // (alternative): className="field error" will show red fields
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    
    return (
      <div className={className}>
        <label>{ label }</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
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

      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  // it will be passed to each component (see homonym prop.) rendered as Field, in 'meta' obj
  return errors;
}

export default reduxForm({
  form: 'streamCreate', // name for this specific form
  validate              // form validation with error messages
})(StreamCreate);