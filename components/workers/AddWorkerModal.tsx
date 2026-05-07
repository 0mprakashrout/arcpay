"use client";

import { useState } from "react";

interface Props {
  onAddWorker: (worker: {
    name: string;
    wallet: string;
    salary: number;
    role: string;
  }) => void;
}

export default function AddWorkerModal({ onAddWorker }: Props) {
  const [name, setName] = useState("");
  const [wallet, setWallet] = useState("");
  const [salary, setSalary] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = () => {
    if (!name || !wallet || !salary || !role) return;

    onAddWorker({
      name,
      wallet,
      salary: Number(salary),
      role,
    });

    setName("");
    setWallet("");
    setSalary("");
    setRole("");
  };

  return (
    <div className="rounded-xl border border-gray-800 p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Add Worker</h2>

      <div className="grid gap-4">
        <input
          className="bg-black border border-gray-700 rounded-lg p-3"
          placeholder="Worker Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="bg-black border border-gray-700 rounded-lg p-3"
          placeholder="Wallet Address"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
        />

        <input
          className="bg-black border border-gray-700 rounded-lg p-3"
          placeholder="Salary (USDC)"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <input
          className="bg-black border border-gray-700 rounded-lg p-3"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-white text-black rounded-lg px-6 py-3 font-semibold"
        >
          Save Worker
        </button>
      </div>
    </div>
  );
}