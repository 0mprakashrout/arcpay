"use client";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { arcTestnet } from "@/lib/arc";

const config = getDefaultConfig({
  appName: "ArcPay",
  projectId: "demo-project-id",
  chains: [arcTestnet],
  ssr: true,
});

const queryClient = new QueryClient();

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}