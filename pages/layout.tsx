import type { Metadata } from "next";
import "./globals.scss";
import { Provider as Providers } from 'react-redux';
import { store } from '@/redux/store';

export const metadata: Metadata = {
  title: "skillshift - Digital Transformation & Business Consulting",
  description: "skillshift - Digital Transformation & Business Consulting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers store={store}>{children}</Providers> // pass the store prop to the Provider component
  );
}
