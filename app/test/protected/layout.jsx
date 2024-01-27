import { redirect } from 'next/navigation';
import { auth } from '/app/api/auth/[...nextauth]/auth';

export default async function RootLayout({ children }) {
    const session = await auth();

    if (!session) return redirect('/');
    return (
        <>{children}</>
    )
}