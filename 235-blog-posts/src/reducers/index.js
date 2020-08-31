import { combineReducers } from "redux";
import postsReducer from "./postsReducer";


// n.b. in mapStateToProps, 'state' arg will have the following props
export default combineReducers({
  posts: postsReducer
});