import { useState } from "react";
import { sendTweet } from "../lib/api";

const TweetInput = (props) => {
  const [tweet, setTweet] = useState("");
  const [loading, setLoading] = useState(false);
  const textLimit = tweet.length > 140;
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (textLimit) {
      return;
    }
    const myTweet = {
      content: tweet,
      userName: props.userName,
      date: new Date().toISOString(),
    };
    setLoading(true);
    try {
      const data = await sendTweet(myTweet);
      props.submitTweet(data);
    } catch (e) {
      alert("Server error when adding a tweet");
    }
    setLoading(false);
    setTweet("");
  };
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <textarea
        className="tweetArea"
        value={tweet}
        placeholder="What you have in mind..."
        onChange={(event) => setTweet(event.target.value)}
      ></textarea>
      <div className="btnDiv">
        <div>
          {loading && <div class="spinner-border loadPos"></div>}
          <button
            className="btn btn-primary"
            type="submit"
            disabled={textLimit}
          >
            Tweet
          </button>
        </div>
      </div>
      {textLimit && (
        <div style={{ bottom: 20 }} className="textLimitReached">
          The tweet can't contain more then 140 chars.
        </div>
      )}
    </form>
  );
};

export default TweetInput;
