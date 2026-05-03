"use client";
import "animate.css";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, Spinner } from "@heroui/react";
import { Edit3, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MyProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <>
      {isPending && (
        <div className=" min-h-screen flex justify-center items-center py-10 ">
          <Spinner color="success" />
        </div>
      )}

      {user && (
        <div className="flex justify-center items-center py-10 md:py-30 animate__animated animate__fadeIn">
          <Card className="w-full max-w-md bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl animate__animated animate__zoomIn">
            <div className="p-8">
              <div className="flex flex-col items-center space-y-6">
                {/* Avatar */}
                <div className="relative group border-3 shadow-lg border-red-300 rounded-full w-[140px] h-[140px] overflow-hidden animate__animated animate__pulse animate__delay-1s">
                  <Image
                    src={user?.image || Avatar}
                    alt="Profile Image"
                    width={140}
                    height={140}
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="text-center space-y-2 animate__animated animate__fadeIn">
                  <div className="flex items-center justify-center gap-2">
                    <User size={18} className="text-red-400" />
                    <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                      {user?.name}
                    </h2>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    <Mail size={16} />
                    <p className="text-sm font-medium">{user?.email}</p>
                  </div>
                </div>

                {/* Button */}
                <Link href={"/my-profile/edit-profile"} className="w-full">
                  <Button
                    variant="shadow"
                    color="danger"
                    className="w-full font-semibold bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg shadow-red-200 animate__animated animate__fadeInUp"
                  >
                    Edit Profile
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default MyProfilePage;
