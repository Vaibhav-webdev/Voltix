"use client";

import { useState } from "react";

export default function CreateResumeModal({ open, onClose, onCreate }) {
  const [title, setTitle] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 py-9 shadow-xl">

        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Create a Resume
          </h2>
          <button
            onClick={onClose}
            className="text-xl text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Enter resume title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Button */}
        <button
          onClick={() => {
            if (!title.trim()) return;
            onCreate(title);
            setTitle("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (!title.trim()) return;
              onCreate(title);
              setTitle("");
            }
          }}
          className="mt-4 w-full rounded-md bg-green-500 py-2 font-medium text-white hover:bg-green-600 transition"
        >
          Create Resume
        </button>
      </div>
    </div>
  );
}
