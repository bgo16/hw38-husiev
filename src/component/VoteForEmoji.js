import { useState } from 'react';

export function VoteForEmoji() {
  const [votes, setVotes] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [votingEnabled, setVotingEnabled] = useState(true);

  const candidates = ['🐐', '🐍', '👏'];

  const handleVote = (candidate) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [candidate]: (prevVotes[candidate] || 0) + 1
    }));
  };

  const showWinner = () => {
    const maxVotes = Math.max(...Object.values(votes));
    const winners = Object.keys(votes).filter((candidate) => votes[candidate] === maxVotes);
    return winners.join(', ');
  };

  const handleShowResults = () => {
    setShowResults(true);
    setVotingEnabled(false);
  };

  return (
    <>
      <h1>Vote</h1>
      {candidates.map((candidate) => (
        <div key={candidate}>
          <p>{candidate}</p>
          <p>Votes: {votes[candidate] || 0}</p>
          <button onClick={() => handleVote(candidate)} disabled={!votingEnabled}>
            Vote
          </button>
        </div>
      ))}
      <button onClick={handleShowResults}>Show Result</button>
      {showResults && (
        <div>
          <p>Winner: {showWinner()}</p>
        </div>
      )}
    </>
  );
}
