import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {title:'Maan Creative Agency | Bring Vision to Life',description:'Documentary, storytelling, branding, strategic campaigns, events and media production in Somalia.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
