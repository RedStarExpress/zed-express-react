import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Contacs from "./pages/admin_panel/contacs/Contacs";
import DeleteModal from "./pages/admin_panel/contacs/modal/DeleteModal";
import StarterPage from "./pages/admin_panel/StarterPage";
import TeacherPage from "./pages/admin_panel/TeacherPage";
import LoadingSite from "./pages/LoadingSite";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoadingSite />} />
      <Route path="/d" element={<DeleteModal />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout><StarterPage /></AdminLayout>} />
      <Route path="/admin/ustozlar" element={<AdminLayout><TeacherPage /></AdminLayout>} />
      <Route path="/admin/contacs" element={<AdminLayout><Contacs /></AdminLayout>} />
    </Routes>
  );
}

export default App;
