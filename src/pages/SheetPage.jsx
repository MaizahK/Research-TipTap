import { Card, Button, Upload } from "antd";
import { Workbook } from "@fortune-sheet/react";
import "@fortune-sheet/react/dist/index.css";

export default function SheetPage() {
  let workbookRef = null;

  const downloadCSV = () => {
    workbookRef?.exportCsv();
  };

  const uploadProps = {
    accept: ".csv",
    beforeUpload: (file) => {
      workbookRef?.importCsv(file);
      return false;
    },
  };

  return (
    <Card
      title="Spreadsheet"
      extra={
        <>
          <Upload {...uploadProps}>
            <Button>Import CSV</Button>
          </Upload>
          <Button onClick={downloadCSV} style={{ marginLeft: 8 }}>
            Export CSV
          </Button>
        </>
      }
    >
      <Workbook
        ref={(ref) => (workbookRef = ref)}
        data={[{ name: "Sheet1" }]}
        style={{ height: 500 }}
      />
    </Card>
  );
}
