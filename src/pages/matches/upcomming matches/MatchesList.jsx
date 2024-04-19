import React from "react";
import moment from "moment";
import { Button } from "antd";
import { useEffect, useState } from "react";
import Match from "../matches list/Match";
import { getMatches } from "../../../services/matches/matches";

import { Col, Row } from "antd";

const MatchesList = ({
  searchObj,
  setIsFormModalOpen,
  payload,
  initFormData,
  matchesUpdatedCount,
}) => {
  const [matchesList, setMatchesList] = useState(null);
  const [filteredMatchesList, setfilteredMatchesList] = useState(null);

  console.log("c", matchesList);
  function formatDates(date) {
    let dates = date
      .filter((d) => d !== "")
      .map((d) => moment(d).format("MMM, ddd DD"));

    return dates;
  }

  function filterMatches(matches, searchObj) {
    // console.log("search Obj", searchObj);
    if (searchObj.date) {
      let formatedDates = formatDates(searchObj.date);
      searchObj.date = formatedDates;
    }

    return matches.filter((match) => {
      if (
        !searchObj ||
        ((!searchObj.season ||
          match.season_year === Number(searchObj.season)) &&
          (!searchObj.venue ||
            searchObj.venue.length === 0 ||
            searchObj.venue.includes(match.venue)) &&
          (!searchObj.team ||
            searchObj.team.length === 0 ||
            searchObj.team.includes(match.team_A) ||
            searchObj.team.includes(match.team_B)) &&
          (!searchObj.date ||
            searchObj.date.length === 0 ||
            searchObj.date.includes(match.date)) &&
          (!searchObj.search ||
            match.venue.toLowerCase() === searchObj.search.toLowerCase() ||
            match.date.toLowerCase() === searchObj.search.toLowerCase() ||
            match.team_A.toLowerCase() === searchObj.search.toLowerCase() ||
            match.team_B.toLowerCase() === searchObj.search.toLowerCase()))
      ) {
        return true;
      } else {
        return false;
      }
    });
  }

  useEffect(() => {
    getMatches().then((matches) => {
      setMatchesList(matches);
    });
  }, [matchesUpdatedCount]);

  useEffect(() => {
    console.log("called", matchesList);
    if (searchObj && matchesList) {
      console.log("searchObj");
      let filteredMatches = filterMatches(matchesList, searchObj);
      console.log("filter", filteredMatches);
      setfilteredMatchesList(filteredMatches);
    }
  }, [matchesList, searchObj]);

  const initCreateUpdate = (id) => {
    if (id === undefined) {
      payload.current.operation = "ADD";
      payload.current.data = {};
      setIsFormModalOpen(true);
    } else {
      payload.current.operation = "UPDATE";
      payload.current.data = {
        match_id: id,
      };

      const matchObj = filteredMatchesList?.find(
        (match) => match.match_id === payload.current.data.match_id
      );
      payload.current.data = matchObj;
      initFormData();
      setIsFormModalOpen(true);
    }
  };

  return (
    <>
      <Row>
        <Col
          span={24}
          style={{
            marginBottom: "24px",
            display: "Flex",
            justifyContent: "end",
          }}
        >
          <Button onClick={() => initCreateUpdate()}>Add Matches</Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {filteredMatchesList?.map((match) => {
            return (
              <React.Fragment key={match.match_id}>
                {match.status === "completed" && <Match match={match} />}
              </React.Fragment>
            );
          })}
        </Col>
      </Row>
    </>
  );
};

export default MatchesList;
