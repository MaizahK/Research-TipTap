import { Table, Card } from "antd";

const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Age", dataIndex: "age" },
  { title: "Role", dataIndex: "role" },
];

const data = [
  { key: 1, name: "Alice", age: 25, role: "Developer" },
  { key: 2, name: "Bob", age: 30, role: "Designer" },
];

export default function TablePage() {
  return (
    <Card title="Users">
      <Table columns={columns} dataSource={data} />
    </Card>
  );
}
