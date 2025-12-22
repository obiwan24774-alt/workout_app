import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-green-600 text-5xl font-bold mb-6">
        トレーニング管理アプリ
      </h1>
      <p className="text-gray-700 mb-8">
        記録を追加して、進捗を管理しましょう！
      </p>
      <div className="space-y-4">
        <Link
          to="/form"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          記録を追加する
        </Link>
        <Link
          to="/records"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-600"
        >
          記録一覧を見る
        </Link>
      </div>
    </div>
  );
}
export default HomePage;
