import Header from '../components/header/header';
import './styles/globals.css'

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
            </head>
            <body>
                <Header></Header>
                <main className='p-10'>
                    {children}
                </main>
            </body>
        </html>
    );
}