const canIterate = (target) => {
  if (target === null || target === undefined) {
    console.log(false);
    return false;
  }
  console.log(typeof target[Symbol.iterator] === 'function');
  return true;
};

export default canIterate;
