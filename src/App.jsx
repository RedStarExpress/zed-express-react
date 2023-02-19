import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Contacs from "./pages/admin_panel/contacs/Contacs";
import GiveCode from "./pages/admin_panel/give_code/GiveCode";
import News from "./pages/admin_panel/news/News";
import Partiyalar from "./pages/admin_panel/partiyalar/Partiyalar";
import SkanerBaza from "./pages/admin_panel/skaner_baza/SkanerBaza";
import StarterPage from "./pages/admin_panel/StarterPage";
import TeacherPage from "./pages/admin_panel/teacher/TeacherPage";
import LoadingSite from "./pages/LoadingSite";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoadingSite />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout><StarterPage /></AdminLayout>} />
      <Route path="/admin/teacher" element={<AdminLayout><TeacherPage /></AdminLayout>} />
      <Route path="/admin/code" element={<AdminLayout><GiveCode /></AdminLayout>} />
      <Route path="/admin/news" element={<AdminLayout><News /></AdminLayout>} />
      <Route path="/admin/skaner-baza" element={<AdminLayout><SkanerBaza /></AdminLayout>} />
      <Route path="/admin/partiyalar" element={<AdminLayout><Partiyalar /></AdminLayout>} />
      <Route path="/admin/contacs" element={<AdminLayout><Contacs /></AdminLayout>} />
    </Routes>
  );
}

export default App;
