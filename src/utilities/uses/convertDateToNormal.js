export function convertDateToNormalType(timestamp) {
  const normalDateType = new Date(timestamp * 1000);
  return normalDateType;
}
