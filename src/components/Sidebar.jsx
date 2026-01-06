import { Layout, Menu } from "antd";
import {
  UserOutlined,
  TableOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sider collapsible>
      <div style={{ color: "#fff", padding: 16, textAlign: "center" }}>
        Dashboard
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        items={[
          {
            key: "/users",
            icon: <UserOutlined />,
            label: "Users",
          },
          {
            key: "/spreadsheet",
            icon: <TableOutlined />,
            label: "Spreadsheet",
          },
          {
            key: "/editor",
            icon: <EditOutlined />,
            label: "Text Editor",
          },
        ]}
      />
    </Sider>
  );
}
