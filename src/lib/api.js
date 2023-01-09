import axios from "axios";

const BaseUrl =
  "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

export async function getTweets() {
  const response = await axios.get(BaseUrl);
  return response.data;
}

export async function sendTweet(tweet) {
  const response = await axios.post(BaseUrl, tweet);
  return response.data;
}
