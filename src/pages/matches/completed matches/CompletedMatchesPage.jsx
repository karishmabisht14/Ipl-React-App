import MatchesList from "./MatchesList";
import Filters from "./Filters";
import Search from "./Search";
import Seasons from "./Seasons";
import { useState } from "react";
import { Col, Row, Card, Typography, Divider } from "antd";
import background from "../../../assets/images/background.svg";

const { Text } = Typography;

const CompletedMatchesPage = () => {
  const [searchObj, setSearchObj] = useState({ season: 2024 });
  // console.log("search", searchObj);
  return (
    <div
      style={{
        backgroundImage: "url(" + background + ")",
      }}
    >
      <Row style={{ marginTop: 50 }}>
        <Col span={2}></Col>
        <Col span={5}>
          <Text style={{ fontSize: 30 }} strong>
            Filters
          </Text>
        </Col>
        <Col span={12} style={{ marginTop: 8 }}>
          <Search searchObj={searchObj} setSearchObj={setSearchObj} />
        </Col>
        <Col span={5} style={{ marginTop: 8 }}>
          <Seasons searchObj={searchObj} setSearchObj={setSearchObj} />
        </Col>
      </Row>
      <Divider plain></Divider>
      <Row>
        <Col span={2}></Col>
        <Col span={5}>
          <Filters searchObj={searchObj} setSearchObj={setSearchObj} />
        </Col>
        <Col span={15}>
          <Card>
            <MatchesList searchObj={searchObj} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CompletedMatchesPage;
