import { Table } from "antd";

const columns = [
  { title: "ID", dataIndex: "id" },
  { title: "Name", dataIndex: "name" },
  { title: "Email", dataIndex: "email" },
];

const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

export default function Users() {
  return <Table columns={columns} dataSource={data} rowKey="id" />;
}
