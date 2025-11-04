<<<<<<< HEAD
import { useState } from "react";

export default function RecordForm({ onSave }) {
  // 入力値の状態管理
  const [formData, setFormData] = useState({
    name: "",
    set: "",
    reps: "",
    weight: "",
    notes: "",
  });

  // 入力変更時の処理
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 保存ボタンの処理（まだAPI接続なし）
  const handleSave = () => {
    if (!formData.name || !formData.reps) {
      alert("種目名と回数は必須です");
      return;
    }
    console.log("保存データ:", formData);
    // 次のステップでAPIに送信予定
    if (onSave) {
      onSave(formData);
    }
    setFormData({
      name: "",
      set: "",
      reps: "",
      weight: "",
      notes: "",
    });
  };

  return (
    <form className="flex items-center justify-center bg-gray-100">
      <div className="flex sm:items-center mb-6 flex-col sm:flex-row">
        {/* 共通レイアウト */}
        {[
          {
            label: "種目名*",
            name: "name",
            type: "text",
            placeholder: "ベンチプレス",
          },
          { label: "セット数*", name: "set", type: "text", placeholder: "3" },
          { label: "回数*", name: "reps", type: "number", placeholder: "10" },
          {
            label: "重量(kg)*",
            name: "weight",
            type: "number",
            placeholder: "100",
          },
        ].map((item) => (
          <div
            key={item.name}
            className="flex sm:items-center mb-6 flex-col sm:flex-row"
          >
            <label className="block sm:w-1/3 font-bold sm:text-right mb-1 pr-4">
              {item.label}
            </label>
            <input
              type={item.type}
              name={item.name}
              value={formData[item.name]}
              onChange={handleChange}
              placeholder={item.placeholder}
              className="block w-full sm:w-2/3 bg-gray-200 py-2 px-3 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white"
            />
          </div>
        ))}
        {/* メモ */}
        <div className="flex sm:items-center mb-6 flex-col sm:flex-row">
          <label
            className="block sm:w-1/3 font-bold sm:text-right mb-1 pr-4"
            htmlFor="notes"
          >
            メモ
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="block w-full sm:w-2/3 bg-gray-200 py-2 px-3 text-gray-700 border border-gray-200 rounded focus:outline-none focus:bg-white"
            rows="3"
          />
        </div>
        {/* 保存ボタン */}
        <div className="flex mt-6">
          <button
            type="submit"
            onSubmit={handleSave}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            保存する
          </button>
        </div>
      </div>
    </form>
  );
}
=======
import { useState } from "react";

export default function RecordForm({ onSave }) {
  // 入力値の状態管理
  const [formData, setFormData] = useState({
    name: "",
    set: "",
    reps: "",
    weight: "",
    notes: "",
  });

  // 入力変更時の処理
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 保存ボタンの処理（まだAPI接続なし）
  const handleSave = () => {
    if (!formData.name || !formData.reps) {
      alert("種目名と回数は必須です");
      return;
    }
    console.log("保存データ:", formData);
    // 次のステップでAPIに送信予定
    if (onSave) {
      onSave(formData);
    }
    setFormData({
      name: "",
      set: "",
      reps: "",
      weight: "",
      notes: "",
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">トレーニング記録</h2>

      {/* 種目名 */}
      <div className="mb-4 flex items-center">
        <label className="w-28 text-sm font-semibold text-gray-700">
          種目名
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="flex-1 border border-gray-300 rounded p-2"
        />
      </div>

      {/* セット数 */}
      <div className="mb-4 flex items-center">
        <label className="w-28 text-sm font-semibold text-gray-700">
          セット数
        </label>
        <input
          type="text"
          name="set"
          value={formData.set}
          onChange={handleChange}
          className="flex-1 border border-gray-300 rounded p-2"
        />
      </div>

      {/* 回数 */}
      <div className="mb-4 flex items-center">
        <label className="w-28 text-sm font-semibold text-gray-700">回数</label>
        <input
          type="number"
          name="reps"
          value={formData.reps}
          onChange={handleChange}
          className="flex-1 border border-gray-300 rounded p-2"
        />
      </div>

      {/* 重量 */}
      <div className="mb-4 flex items-center">
        <label className="w-28 text-sm font-semibold text-gray-700">
          重量(kg)
        </label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          className="flex-1 border border-gray-300 rounded p-2"
        />
      </div>

      {/* メモ */}
      <div className="mb-4 flex items-center">
        <label className="w-28 text-sm font-semibold text-gray-700">メモ</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="flex-1 border border-gray-300 rounded p-2"
          rows="3"
        />
      </div>

      {/* 保存ボタン */}
      <div className="mt-6">
        <button
          onClick={handleSave}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          保存する
        </button>
      </div>
    </div>
  );
}
>>>>>>> 6ce22d2315c9c17c727752e039dd62fa65c0f1fe
