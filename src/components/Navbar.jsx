import { Switch } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h3>React Dashboard</h3>
      <Switch checked={dark} onChange={setDark} />
    </div>
  );
}
