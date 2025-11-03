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
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-blue-800 rounded">
      <h1 className="text-blue-600 bg-white text-3xl font-bold mt-10">
        トレーニング記録
      </h1>
      <div className="p-4">
        <RecordForm
          onSave={(newRecord) =>
            setRecords([
              ...records,
              { ...newRecord, date: new Date().toLocaleString("ja-JP") },
            ])
          }
        />
      </div>

      <RecordList records={records} onDelete={handleDelete} />

      <button
        onClick={() => setCount((count) => count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        count is {count}
      </button>

      <p className="mt-4 text-sm">
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default App;
