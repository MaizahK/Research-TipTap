import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import TablePage from "./pages/TablePage";
import EditorPage from "./pages/EditorPage";
import SheetPage from "./pages/SheetPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/table" />} />
        <Route path="/table" element={<TablePage />} />
        <Route
          path="/editor"
          element={
            <ProtectedRoute>
              <EditorPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/sheet"
          element={
            <ProtectedRoute>
              <SheetPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
