import { useState, useEffect } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import RecordForm from "./RecordForm";
import RecordListPage from "./RecordListPage";
import HomePage from "./HomePage";

// ✅ Routerの内側でlocationを使うためのラッパー
function AppLayout({ records, handleSave, handleDelete }) {
  const location = useLocation();

  return (
    <div className="relative h-screen flex flex-col items-center pt-[5vh]">
      <h1 className="text-green-600 bg-white text-5xl font-bold mt-2">
        トレーニング記録
      </h1>
      <Routes>
        {/*ホーム画面*/}
        <Route path="/" element={<HomePage />} />
        {/* 記録入力 */}
        <Route path="/form" element={<RecordForm onSave={handleDelete} />} />
        <Route path="/" element={<RecordForm onSave={handleSave} />} />
        <Route
          path="/records"
          element={<RecordListPage records={records} onDelete={handleDelete} />}
        />
      </Routes>

      {/* ✅ /records以外のときだけリンク表示 */}
      {location.pathname !== "/records" && (
        <div className="mt-6 text-center">
          <Link
            to="/records"
            className="mt-2 text-blue-500 hover:underline block text-center"
          >
            記録一覧を見る
          </Link>
        </div>
      )}
    </div>
  );
}

function App() {
  const [records, setRecords] = useState(() => {
    const saved = localStorage.getItem("records");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  useEffect(() => {
    const saved = localStorage.getItem("records");
    if (saved) {
      setRecords(JSON.parse(saved));
    }
  }, []);

  const handleSave = (newRecord) => {
    setRecords([
      { ...newRecord, date: new Date().toLocaleString("ja-JP") },
      ...records,
    ]);
  };

  const handleDelete = (index) => {
    setRecords(records.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <AppLayout
        records={records}
        handleSave={handleSave}
        handleDelete={handleDelete}
      />
    </Router>
  );
}

export default App;
