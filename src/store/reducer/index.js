const Initial_state = {
  username: 'ma',
  email: 'ma@mail.com',
  gender: 'male',
  age: 22,
};

export default (state = Initial_state, action) => {
  switch (action.type) {
    case 'UPDATE':
      console.log(action.payload, 'pay');
      //   updating state
      return {
        ...state,
        email: action.payload.email,
        gender: action.payload.gender,
        age: action.payload.age,
      };
    default:
      return state;
  }

  return state;
};
