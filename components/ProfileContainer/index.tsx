import { ProfileMenu } from '@/components/ProfileMenu';
import { getCurrentUsername } from '@/lib/login/manage-login';
import { LogIn } from 'lucide-react';
import Link from 'next/link';

export async function ProfileContainer() {
  const username = await getCurrentUsername();
  if (username) {
    return <ProfileMenu username={username} />;
  }
  return (
    <Link
      className="flex items-center justify-center gap-2"
      href={'/admin/login'}
    >
      <LogIn />
      Log-in
    </Link>
  );
}
