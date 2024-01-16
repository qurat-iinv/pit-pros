export default function errorsSetter(error) {
  console.log(
    '🚀 ~ file: errors-setter.js:2 ~ errorsSetter ~ error:',
    error?.response?.data?.response?.error,
  );
  let errObj = {};
  if (error?.response?.status === 422) {
    for (const [key, value] of Object.entries(
      error?.response?.data?.response?.error,
    )) {
      errObj = {...errObj, [key]: value};
    }
  }
  return errObj;
}
