"use client";

import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import AddWorkerModal from "@/components/workers/AddWorkerModal";
import { demoWorkers, Worker } from "@/lib/workers";
import { useUSDC } from "@/hooks/useUSDC";

export default function HomePage() {
  const [workers, setWorkers] = useState<Worker[]>(demoWorkers);
  const [status, setStatus] = useState("");

  const { sendPayroll } = useUSDC();

  const handleAddWorker = (worker: {
    name: string;
    wallet: string;
    salary: number;
    role: string;
  }) => {
    const newWorker: Worker = {
      id: Date.now().toString(),
      ...worker,
    };

    setWorkers((prev) => [...prev, newWorker]);
  };

  const handleSendPayroll = async (
    wallet: string,
    amount: number
  ) => {
    setStatus("Sending payroll...");

    const result = await sendPayroll(wallet, amount);

    if (result.success) {
      setStatus(`Success! Tx: ${result.txHash}`);
    } else {
      setStatus("Payroll failed");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">ArcPay Payroll Dashboard</h1>
            <p className="text-gray-400 mt-2">
              Manage USDC payroll on Arc Testnet
            </p>
          </div>

          <ConnectButton />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-gray-800 p-6">
            <h2 className="text-lg font-semibold">Total Workers</h2>
            <p className="text-3xl font-bold mt-4">{workers.length}</p>
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            <h2 className="text-lg font-semibold">Monthly Payroll</h2>
            <p className="text-3xl font-bold mt-4">2,450 USDC</p>
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            <h2 className="text-lg font-semibold">Last Payment</h2>
            <p className="text-3xl font-bold mt-4">Success</p>
          </div>
        </div>

        <AddWorkerModal onAddWorker={handleAddWorker} />

        {status && (
          <div className="mt-6 rounded-lg border border-gray-700 p-4">
            {status}
          </div>
        )}

        <div className="mt-10 rounded-xl border border-gray-800 p-6">
          <h2 className="text-xl font-semibold mb-4">
            Workers List
          </h2>

          <div className="space-y-4">
            {workers.map((worker) => (
              <div
                key={worker.id}
                className="border border-gray-800 rounded-lg p-4"
              >
                <h3 className="text-lg font-semibold">{worker.name}</h3>
                <p className="text-gray-400">{worker.role}</p>
                <p className="text-gray-400">{worker.wallet}</p>
                <p className="mt-2 font-semibold">
                  Salary: {worker.salary} USDC
                </p>

                <button
                suppressHydrationWarning
                  onClick={() =>
                    handleSendPayroll(worker.wallet, worker.salary)
                  }
                  className="mt-4 px-5 py-2 rounded-lg bg-white text-black font-semibold"
                >
                  Send Payroll
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}