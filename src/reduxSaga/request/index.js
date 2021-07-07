import axios from "axios";

export default function request(type) {
  let url = "https://jsonplaceholder.typicode.com/" + type;
  console.log(url);
  return axios.request({
    url: url,
    method: "get",
  });
}
