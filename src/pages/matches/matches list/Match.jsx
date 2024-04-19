import MatchDetail from "./MatchDetail";
import { Col, Row, Divider } from "antd";
import MatchResult from "./MatchResult";
import { useState } from "react";

const Match = ({ match }) => {
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  return (
    <>
      <Row>
        <Col span={18}>
          <MatchDetail key={match.match_id} match={match} />
        </Col>
        <Col span={6}>
          {match.status === "completed" && (
            <MatchResult
              match={match}
              isResultModalOpen={isResultModalOpen}
              setIsResultModalOpen={setIsResultModalOpen}
            />
          )}
        </Col>
      </Row>
      <Divider plain></Divider>
    </>
  );
};

export default Match;
