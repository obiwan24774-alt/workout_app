import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RecordForm from "./RecordForm";
import RecordList from "./RecordList";

function App() {
  const [count, setCount] = useState(0);
  const [records, setRecords] = useState([]);
  const handleDelete = (index) => {
    setRecords(records.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 bg-blue-100 text-blue-800 rounded">
      <h1 className="text-2xl font-bold mb-4">Tailwindが効いています！</h1>

      <div className="flex gap-4 mb-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-16" alt="React logo" />
        </a>
      </div>

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
