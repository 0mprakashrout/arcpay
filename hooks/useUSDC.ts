"use client";

import { useWriteContract } from "wagmi";
import { parseUnits } from "viem";

const USDC_ABI = [
  {
    name: "transfer",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
  },
] as const;

export function useUSDC() {
  const { writeContractAsync } = useWriteContract();

  const sendPayroll = async (
    walletAddress: string,
    amount: number
  ) => {
    try {
      const txHash = await writeContractAsync({
        address: process.env
          .NEXT_PUBLIC_USDC_CONTRACT as `0x${string}`,
        abi: USDC_ABI,
        functionName: "transfer",
        args: [
          walletAddress as `0x${string}`,
          parseUnits(amount.toString(), 6),
        ],
      });

      return {
        success: true,
        txHash,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        txHash: null,
      };
    }
  };

  return {
    sendPayroll,
  };
}