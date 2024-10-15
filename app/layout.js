import localFont from "next/font/local";
import "./globals.css";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: '/images/story_icon.svg',
  },
};

const evmNetworks = [{
  blockExplorerUrls: ['https://testnet.storyscan.xyz/'],
  chainId: 1513,
  chainName: 'Story Protocol',
  iconUrls: ["/images/story_icon.svg"],
  name: 'Story',
  nativeCurrency: {
    decimals: 18,
    name: 'IP',
    symbol: 'IP',
  },
  networkId: 1513,
  rpcUrls: ['https://testnet.storyrpc.io/'],
  vanityName: 'Story',
}];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/story_icon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DynamicContextProvider
          settings={{
            environmentId: "2995b456-45c1-4326-af24-5f9fca2214cf",
            walletConnectors: [EthereumWalletConnectors],
            overrides: {
              evmNetworks
            }
          }}
        >
          {children}
        </DynamicContextProvider>
      </body>
    </html>
  );
}
