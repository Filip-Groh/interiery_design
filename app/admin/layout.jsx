import { redirect } from 'next/navigation';
import { auth } from '/app/api/auth/[...nextauth]/auth';
import { getSettings } from '@/utils/database';

export default async function AdminLayout({ children }) {
    const session = await auth();
    const admins = await getSettings("adminLogin")

    if (!session || JSON.parse(admins?.value).findIndex((value) => {return value == session.user.email}) == -1) return redirect('/');
    return (
        <>{children}</>
    )
}