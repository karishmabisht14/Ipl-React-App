import { Row, Col, Typography } from "antd";
import moment from "moment";

const { Text } = Typography;
const MatchDetail = ({ match }) => {
  return (
    <>
      <Row>
        <Col span={6}>
          <Text
            style={{
              fontSize: 14,
              border: "1px solid green",
              padding: "2px 14px",
            }}
          >
            {match.match_no}
          </Text>
        </Col>
        <Col span={18}>
          <Text
            style={{
              fontSize: 14,
              padding: "2px 14px",
            }}
          >
            {match.venue}
          </Text>
        </Col>
      </Row>
      {match.status === "completed" && (
        <Row>
          <Col span={6}></Col>
          <Col span={18}>
            <Text
              style={{
                fontSize: 14,
                padding: "2px 14px",
              }}
            >
              {match.date}
            </Text>
            <Text
              style={{
                fontSize: 14,
                padding: "2px 14px",
              }}
            >
              {moment(match.time, ["HH:mm"]).format("hh:mm A")}
            </Text>
          </Col>
        </Row>
      )}
      <Row>
        <Col span={6}>
          <Text
            style={{
              fontSize: 14,
              padding: "10px 0px",
            }}
          >
            Winner is
          </Text>
        </Col>
        <Col span={18}>
          <Text
            style={{
              fontSize: 14,
              padding: "2px 14px",
            }}
          >
            {match.team_A}
          </Text>
          <Text>Vs</Text>
          <Text
            style={{
              fontSize: 14,
              padding: "2px 14px",
            }}
          >
            {match.team_B}
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Text
            style={{
              fontSize: 14,
              padding: "10px 0px",
            }}
          >
            {match.status === "upcoming" ? match.date : match.winner_id}
          </Text>
        </Col>
      </Row>
      {/* <Row>
        <Col span={6}>
          <Text
            style={{
              fontSize: 14,
              padding: "10px 0px",
            }}
          >
            {match.status === "upcoming" ? match.time : ""}
          </Text>
        </Col>
        <Col span={18}>
          <Text
            style={{
              fontSize: 14,
              padding: "2px 10px",
            }}
          >
            {match.team_A_score}/{match.team_A_wickets}
          </Text>
          <Text
            style={{
              fontSize: 14,
              padding: "2px 10px",
            }}
          >
            {match.team_B_score}/{match.team_B_wickets}
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={6}></Col>
        <Col span={18}>
          <Text
            style={{
              fontSize: 14,
              padding: "2px 10px",
            }}
          >
            {match.team_A_overs}
          </Text>
          <Text
            style={{
              fontSize: 14,
              padding: "2px 10px",
            }}
          >
            {match.team_B_overs}
          </Text>
        </Col>
      </Row> */}
    </>
  );
};

export default MatchDetail;
