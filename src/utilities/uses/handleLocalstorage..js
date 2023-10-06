export function setLocalLocation(location) {
  localStorage.setItem("locationName", location);
}

export function getLocalLocation() {
  return localStorage.getItem("locationName");
}
