import Tweet from "./Tweet";

const oldTweets = (props) => {
  const { tweets } = props;
  return (
    <div>
      {tweets.map((tweet) => (
        <div key={tweet.id} className="mb-3">
          <Tweet tweet={tweet} />
        </div>
      ))}
    </div>
  );
};

export default oldTweets;
