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
    const { name, set, reps, weight } = formData;
    if (!name || !reps || !set) {
      alert("種目名・セット数・回数は必須です");
      return;
    }
    if (
      isNaN(Number(set)) ||
      Number(set) < 1 ||
      isNaN(Number(reps)) ||
      Number(reps) < 1 ||
      isNaN(Number(weight)) ||
      Number(weight) < 0
    ) {
      alert("セット数・回数は１以上、重量は０以上の数値で入力してください");
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
    <form
      className="flex items-center justify-center bg-gray-100"
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
    >
      <div className="flex items-center mb-9 flex-col w-full max-w-5xl p-6">
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
          <div key={item.name} className="flex sm:items-center mb-6 flex-col ">
            <label className="inline-block font-bold  mb-1 pr-4">
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
        <div className="flex sm:items-center mb-6 flex-col ">
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
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            保存する
          </button>
        </div>
      </div>
    </form>
  );
}
