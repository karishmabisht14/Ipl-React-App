import MatchesList from "./MatchesList";
import Filters from "./Filters";
import Search from "./Search";
import CreateUpdateMatchForm from "./CreateUpdateMatchForm";
import { useRef, useState } from "react";
import { Col, Row, Card, Typography, Divider, Form } from "antd";
import background from "../../../assets/images/background.svg";

const { Text } = Typography;

const UpcommingMatchesPage = () => {
  const [searchObj, setSearchObj] = useState({});
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [matchesUpdatedCount, setMatchesUpdatedCount] = useState(null);
  const [form] = Form.useForm();

  let payload = useRef({
    operation: "",
    payload: {},
  });

  const initFormData = () => {
    payload.current.data
      ? form.setFieldValue(payload.current.data)
      : form.resetFields();
  };

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
        <Col span={14} style={{ marginTop: 8 }}>
          <Search searchObj={searchObj} setSearchObj={setSearchObj} />
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
            <CreateUpdateMatchForm
              form={form}
              payload={payload}
              isFormModalOpen={isFormModalOpen}
              setIsFormModalOpen={setIsFormModalOpen}
              matchesUpdatedCount={matchesUpdatedCount}
              setMatchesUpdatedCount={setMatchesUpdatedCount}
            />
            <MatchesList
              searchObj={searchObj}
              setIsFormModalOpen={setIsFormModalOpen}
              payload={payload}
              initFormData={initFormData}
              matchesUpdatedCount={matchesUpdatedCount}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UpcommingMatchesPage;
