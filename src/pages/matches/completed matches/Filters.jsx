import { Select } from "antd";
import { Col, Row, Typography, DatePicker } from "antd";

const { Text } = Typography;
const Filters = ({ searchObj, setSearchObj }) => {
  const venues = [
    "Narendra Modi Stadium, Ahmedabad",
    "MA Chidambaram Stadium, Chennai",
    "M Chinnaswamy Stadium, Bengaluru",
    "PCA New Stadium, Mullanpur",
    "Eden Gardens, Kolkata",
    "Sawai Mansingh Stadium, Jaipur",
  ];

  const teams = [
    { value: "Chennai Super Kings", label: "CSK" },
    { value: "Gujarat Titans", label: "GT" },
    { value: "Mumbai Indians", label: "MI" },
    { value: "Lucknow Super Giants", label: "LSG" },
    { value: "Royal Challengers Bangalores", label: "RCB" },
    { value: "Punjab Kings", label: "PBKS" },
    { value: "Delhi Capitals", label: "DC" },
    { value: "Kolkata Knight Riders", label: "KKR" },
    { value: "Sunrise Hyderabad", label: "SRH" },
    { value: "Rajasthan Royals", label: "RR" },
  ];

  return (
    <>
      <Row style={{ marginBottom: 40 }}>
        <Col span={16}>
          <Text style={{ fontSize: 20 }} strong>
            Venue
          </Text>
          <Select
            mode="multiple"
            allowClear
            placeholder="Select Venue"
            value={searchObj.venue}
            onChange={(venue) => {
              setSearchObj({ ...searchObj, venue });
            }}
            style={{ width: "100%" }}
            options={venues.map((item) => ({
              value: item,
              label: item,
            }))}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: 40 }}>
        <Col span={16}>
          <Text style={{ fontSize: 20 }} strong>
            Teams
          </Text>
          <Select
            mode="multiple"
            allowClear
            placeholder="Select Teams"
            value={searchObj.team}
            onChange={(team) => {
              setSearchObj({ ...searchObj, team });
            }}
            style={{ width: "100%" }}
            options={teams.map((item) => ({
              value: item.value,
              label: item.label,
            }))}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: 40 }}>
        <Col span={16}>
          <Text style={{ fontSize: 20 }} strong>
            Date
          </Text>
          <DatePicker
            multiple
            placeholder="Select Dates"
            onChange={(date, dateString) => {
              setSearchObj({ ...searchObj, date: dateString });
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Filters;
