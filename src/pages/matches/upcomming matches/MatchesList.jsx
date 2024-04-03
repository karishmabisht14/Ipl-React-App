import React from "react";
import { useEffect, useState } from "react";
import Match from "../matches list/Match";
import { getMatches } from "../../../services/matches/matches";

const MatchesList = () => {
  const [matchesList, setMatchesList] = useState(null);
  useEffect(() => {
    getMatches().then((matches) => {
      setMatchesList(matches);
    });
  });
  return (
    <>
      <h1> Upcoming List</h1>
      {matchesList?.map((match) => {
        return (
          <React.Fragment key={match.match_id}>
            {match.status === "upcoming" && (
              <Match key={match.match_id} match={match} />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default MatchesList;
