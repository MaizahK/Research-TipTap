import { Menu } from "antd";
import {
  TableOutlined,
  EditOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      onClick={(e) => navigate(e.key)}
      items={[
        {
          key: "/table",
          icon: <TableOutlined />,
          label: "Table",
        },
        {
          key: "/editor",
          icon: <EditOutlined />,
          label: "Text Editor",
        },
        {
          key: "/sheet",
          icon: <FileExcelOutlined />,
          label: "Spreadsheet",
        },
      ]}
    />
  );
}
