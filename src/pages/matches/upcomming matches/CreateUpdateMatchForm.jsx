import { Modal, Form, Input, Button, DatePicker, TimePicker } from "antd";
import { addMatch, updateMatch } from "../../../services/matches/matches";

const createUpdateMatchForm = ({
  form,
  payload,
  isFormModalOpen,
  setIsFormModalOpen,
}) => {
  const submitForm = (values) => {
    payload.current.data = { ...payload.current.data, ...values };

    if (payload.current.operation === "ADD") {
      payload.current.data.match_id = Math.random();
      addMatch(payload.current.data).then((matches) => {
        console.log("ADD Matches", matches);
        setIsFormModalOpen(false);
      });
    } else {
      updateMatch(payload.current.data, "match_id").then((matches) => {
        console.log("updated Matches", matches);
        setIsFormModalOpen(false);
      });
    }
  };

  return (
    <>
      <Modal
        open={isFormModalOpen}
        onCancel={() => setIsFormModalOpen(false)}
        footer={null}
      >
        <h2>Show Form</h2>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={submitForm}
          form={form}
          autoComplete="off"
        >
          <Form.Item
            label="Match No"
            name="match_no"
            rules={[
              {
                required: true,
                message: "Please input event name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <DatePicker />
          </Form.Item> */}
          {/* <Form.Item
            label="Time"
            name="time"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <TimePicker />
          </Form.Item> */}
          <Form.Item
            label="Venue"
            name="venue"
            rules={[
              {
                required: true,
                message: "Please input event name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="First Team"
            name="team_A"
            rules={[
              {
                required: true,
                message: "Please input event name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Second Team"
            name="team_B"
            rules={[
              {
                required: true,
                message: "Please input event name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[
              {
                required: true,
                message: "Please input event name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onClick={() => setIsFormModalOpen(false)}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              {payload.current.operation === "ADD"
                ? "Add Match"
                : "Update Match"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default createUpdateMatchForm;
