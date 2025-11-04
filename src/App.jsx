import { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecordForm from "./RecordForm";
import RecordList from "./RecordList";

function App() {
  const [count, setCount] = useState(0);
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
      <Routes>
        <Route path="/" element={<RecordForm onSave={handleSave} />} />
        <Route
          path="/records"
          element={<RecordListPage records={records} onDelete={handleDelete} />}
        />
        <Link
          to="/records"
          className="mt-4 text-blue-500 hover:underline block text-center"
        >
          記録一覧を見る
        </Link>
      </Routes>
    </Router>
  );
}
