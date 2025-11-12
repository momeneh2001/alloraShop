import AccountForm from "@/components/modules/account/AccountForm";
import { authUser } from "@/utiles/authUser";

export default async function AccountPage() {
  const user = await authUser();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[600px]">
        <p className="text-gray-600 text-lg">
          Please log in to access your account.
        </p>
      </div>
    );
  }

  return <AccountForm user={JSON.parse(JSON.stringify(user))} />;
}
