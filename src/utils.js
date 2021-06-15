/**
* @desc returns a list of concatenated objects
* @params {Array}
*/
export const classes = (...classNames) => {
  return classNames?.reduce((acc, curr) => {
    if (curr && acc) return { ...acc, ...curr };
    return { ...acc };
  }, {});
}