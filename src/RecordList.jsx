export default function RecordList({ records, onDelete }) {
  if (records.length === 0) {
    return <p className="text-center text-gray-500">記録はまだありません。</p>;
  }
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {records.map((record, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded p-4 mb-4 w-full max-w-4xl"
          >
            <div className="mb-2 text-left">
              <h3 className="text-lg text-gray-500">記録日時: {record.date}</h3>
              <span className="text-lg  font-bold text-blue-400 ">
                {record.name}
              </span>
            </div>
            <div>
              <p>セット: {record.set}</p>
              <p>回数: {record.reps}</p>
              <p>重量: {record.weight}kg</p>
            </div>
            {record.notes && (
              <p className="mt-2 text-gray-700">メモ: {record.notes}</p>
            )}
            <button
              onClick={() => onDelete(index)}
              className="rounded-lg border border-transparent px-5 py-2 text-base font-bold text-white bg-blue-600 cursor-pointer transition-colors duration-200 hover:border-blue-400"
            >
              削除
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
