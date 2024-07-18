import { Provider as Providers } from 'react-redux';
import { store } from '@/redux/store';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers store={store}>{children}</Providers>
  );
}
