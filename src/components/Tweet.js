const Tweet = (props) => {
  const { tweet } = props;
  return (
    <div className="tweetPDiv">
      <div className="tweets">
        <div className="tweetUserName">{tweet.userName}</div>
        <div className="tweetDate">{tweet.date}</div>
      </div>
      <div className="tweetContent">{tweet.content}</div>
    </div>
  );
};

export default Tweet;
