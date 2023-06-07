import Image from "@components/Image";
import Link from "next/link";

const DashboardHeader = ({ user }) => {
  return (
    <div className="py-16 flex justify-center items-center">
      <div className="flex items-center gap-8">
        <div className="relative overflow-hidden rounded-full w-24 aspect-square">
          {user.photoURL ? (
            <Image src={user.photoURL} />
          ) : (
            <span className="w-full h-full flex justify-center items-center text-bold rounded-full border border-gray-600 text-gray-700 text-lg">
              <p className="font-bold uppercase text-body text-2xl">
                {user.displayName?.substring(0, 1)}
              </p>
            </span>
          )}
        </div>
        <div>
          <h4 className="text-xl text-body font-semibold">
            {user.displayName}
          </h4>
          <p className=" text-body/50">{user.email}</p>
          <div className="pt-2">
            <Link href="/dashboard/profile">
              <a className="btn btn-outline btn-sm btn-primary">Edit profile</a>
            </Link>
          </div>
          <Link href="/logout">
            <a className="btn btn-link btn-sm text-red-500 mt-2">Logout</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
