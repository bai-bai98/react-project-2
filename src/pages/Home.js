import { useEffect, useState } from "react";
import OldTweets from "../components/OldTweets";
import { getTweets } from "../lib/api";
import TweetInput from "../components/tweetInput";
import { UserContext } from "../context/context";

const Home = (props) => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const loadTweets = () => {
      getTweets().then((data) => {
        setTweets(data.tweets);
        setLoading(false);
      });
    };
    loadTweets();
    let interval = setInterval(() => {
      loadTweets();
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const handleOnNewTweet = (tweet) => {
    setTweets((prevTweets) => [tweet, ...prevTweets]);
  };
  return (
    <div className="homeDiv">
      <div className="TweetInputDiv">
        <TweetInput userName={props.userName} submitTweet={handleOnNewTweet} />
      </div>
      {loading && <div class="spinner-border "></div>}
      <OldTweets tweets={tweets} />
    </div>
  );
};

export default Home;
