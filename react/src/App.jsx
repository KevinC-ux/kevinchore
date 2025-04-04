import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Items</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter item"
          />
          <button
            onClick={addItem}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add Item
          </button>
        </div>
        <ul className="border rounded-lg p-3 bg-gray-50">
          {items.map((item, index) => (
            <li key={index} className="p-2 border-b last:border-b-0">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}