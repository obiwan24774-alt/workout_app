export default function RecordList({ records, onDelete }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">記録一覧</h2>
      <ul className="divide-y divide-gray-200">
        {records.map((record, index) => (
          <li
            key={index}
            className="border p-4 rounded shadow even:bg-gray-50 hover:bg-gray-100 transition"
          >
            <div className="mb-1 text-sm text-gray-600">
              <span className="font-semibold">記録日時:</span> {record.date}
            </div>
            <div className="mb-1">
              <span className="font-semibold">種目</span> {record.name}
            </div>
            <div className="mb-1">
              <span className="font-semibold">セット</span> {record.set}
            </div>
            <div className="mb-1">
              <span className="font-semibold">回数</span> {record.reps}
            </div>
            <div className="mb-1">
              <span className="font-semibold">重量</span> {record.weight}kg
            </div>
            <div className="mb-1">
              <span className="font-semibold">メモ</span> {record.notes}
            </div>
            <button
              onClick={() => onDelete(index)}
              className="mt-3 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
