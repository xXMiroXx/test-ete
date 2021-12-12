import fetchData from "./fetchData";

export default function getNav() {
  return fetchData("navbar");
}
