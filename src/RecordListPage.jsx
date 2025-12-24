import { Link } from "react-router-dom";
import RecordList from "./RecordList";

export default function RecordListPage({ records, onDelete }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-500">記録一覧</h2>
      <RecordList records={records} onDelete={onDelete} />
      <Link
        to="/form"
        className="mt-6 inline-block text-blue-500 hover:underline"
      >
        ←トレーニング記録に戻る
      </Link>
    </div>
  );
}
