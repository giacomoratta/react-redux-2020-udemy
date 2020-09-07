import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editStream(
      this.props.match.params.id,
      formValues
    );
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    // #1 - initialValues is a special property of redux-form
    // #2 - this.props.stream has too many properties which should not be passed to form (e.g. id, userId)
    //    - solved with _.pick

    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSumbit={this.onSubmit()}
        />
      </div>
    );
  }
}

/*
 * GOAL #1: get single stream to edit
 * Uses ownProps to access match prop and get id
 * ...but stream is undefined!
 *
 * This happens only the first time (after a page reload).
 * The state is indeed not fully loaded so no streams.
 *
 * Solution: fetch single stream in componentDidMount.
 * N.B. same code for both StreamDelete and StreamShow.
 *
 */
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
}

export default connect(
  mapStateToProps,
  {
    fetchStream,
    editStream
  }
)(StreamEdit);