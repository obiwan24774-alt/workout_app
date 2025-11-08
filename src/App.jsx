import { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecordForm from "./RecordForm";
import RecordListPage from "./RecordListPage";

function App() {
  const [records, setRecords] = useState([]);

  const handleSave = (newRecord) => {
    setRecords([
      ...records,
      { ...newRecord, date: new Date().toLocaleString("ja-JP") },
    ]);
  };

  const handleDelete = (index) => {
    setRecords(records.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="flex flex-col items-center min-h-screen pt-[15vh] ...">
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
    </Router>
  );
}

export default App;
