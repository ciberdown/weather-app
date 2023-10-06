import { convertDateToNormalType } from "./convertDateToNormal";

export default function getSunTimes(time) {
  time = convertDateToNormalType(time);
  return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
}
