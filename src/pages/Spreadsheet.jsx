import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";

export default function Spreadsheet() {
  return (
    <div style={{ height: "600px" }}>
      <Workbook
        data={[
          {
            name: "Sheet1",
            celldata: [],
          },
        ]}
      />
    </div>
  );
}
