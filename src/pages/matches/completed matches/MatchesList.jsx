import React from "react";
import { useEffect, useState } from "react";
import Match from "../matches list/Match";
import { getMatches } from "../../../services/matches/matches";
import MatchResult from "../matches list/MatchResult";

const MatchesList = () => {
  const [matchesList, setMatchesList] = useState(null);
  useEffect(() => {
    getMatches().then((matches) => {
      setMatchesList(matches);
    });
  });
  return (
    <>
      <h1>Completed List</h1>
      {matchesList?.map((match) => {
        return (
          <React.Fragment key={match.match_id}>
            {match.status === "completed" && (
              <>
                <Match key={match.match_id} match={match} />
                <MatchResult />
              </>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default MatchesList;
