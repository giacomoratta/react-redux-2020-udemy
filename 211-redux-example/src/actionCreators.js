// People dropping off a form = Action Creator
export const createPolicy = (name, amount) => {
  return { /* Action = the form */
    type: 'CREATE_POLICY',
    payload: {
      name,
      amount
    }
  };
};


// again, an Action Creator
export const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name
    }
  };
};


// Action creator
export const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name,
      amountOfMoneyToCollect
    }
  };
};
