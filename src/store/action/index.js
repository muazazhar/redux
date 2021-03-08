export const Alert_ = (e) => {
  alert(e);
};
export const update = (data) => {
  console.log(data);
  return {
    type: 'UPDATE',
    payload: {
      email: data,
      age: 0,
      gender: 'girl',
    },
  };
};
