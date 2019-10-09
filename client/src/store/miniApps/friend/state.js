import { createReducer } from '../../reduxUtils';

/* Declare Actions */
const ADD = "friend/ADD";
const REMOVE = "friend/REMOVE";

/* Action type maker */
export const addFriend = friend => ({ type: ADD, friend });
export const removeFriend = friend => ({ type: REMOVE, friend });

const INITIAL_STATE = { friends: [] };

const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.friends.push(action.friend),
  [REMOVE]: (state, action) => {
    //return (state.friends = state.friends.filter(
    //   friend => friend.id !== action.friend.id
    // ))
    state.friends.shift();
    return state.friends;
  },
});

export default reducer;
