import { Button, Dropdown, Space, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
const Seasons = ({ searchObj, setSearchObj }) => {
  const items = [
    {
      label: "2024",
      key: "2024",
    },
    {
      label: "2023",
      key: "2023",
    },
  ];

  return (
    <Dropdown
      overlay={
        <Menu onClick={(e) => setSearchObj({ ...searchObj, season: e.key })}>
          {items.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      }
    >
      <Button>
        <Space>
          Seasons <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default Seasons;
