import { redirect } from 'next/navigation';
import { auth } from '/app/api/auth/[...nextauth]/auth';

export default async function AdminLayout({ children }) {
    const session = await auth();

    if (!session) return redirect('/');
    return (
        <>{children}</>
    )
}