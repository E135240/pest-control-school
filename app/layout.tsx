import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Campus Pest Aware | Pomona Pest & Spider Prevention',description:'A classroom guide to pest prevention in Pomona, California. Learn about local spiders, integrated pest management, and practical campus habits.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
