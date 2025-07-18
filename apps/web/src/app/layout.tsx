import './global.css';

export const metadata = {
  title: 'Iagro',
  description: 'Iagro',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
