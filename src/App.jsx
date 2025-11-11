import { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecordForm from "./RecordForm";
import RecordListPage from "./RecordListPage";

function App() {
  const [records, setRecords] = useState(() => {
    const saved = localStorage.getItem("records");
    return saved ? JSON.parse(saved) : [];
  });
  // ✅ 保存処理：records が更新されたら localStorage に保存
  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  // ✅ 読み込み処理：初回レンダリング時に localStorage から取得
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
      <div>
        <div className="relative h-screen flex flex-col items-center pt-[15vh]">
          <h1 className="text-blue-600 bg-white text-3xl font-bold mt-10">
            トレーニング記録
          </h1>
          <Routes>
            <Route path="/" element={<RecordForm onSave={handleSave} />} />
            <Route
              path="/records"
              element={
                <RecordListPage records={records} onDelete={handleDelete} />
              }
            />
          </Routes>

          <div className="mt-6 text-center">
            <Link
              to="/records"
              className="mt-4 text-blue-500 hover:underline block text-center"
            >
              記録一覧を見る
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
