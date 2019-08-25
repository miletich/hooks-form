export const areArraysEqual = <T>(arr1: Array<T>, arr2: Array<T>) => {
  const normalizeArray = (array: Array<T>) => array.sort().join();

  return normalizeArray(arr1) === normalizeArray(arr2);
};
