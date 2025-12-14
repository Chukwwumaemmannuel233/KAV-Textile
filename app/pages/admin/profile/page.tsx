"use client";

import Link from "next/link";
import AdminHeader from "../../../components/admin-header";
import { Button } from "../../../components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminProfilePage() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [isSiteSettings, setIsSiteSettings] = useState(false);

  const ChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsChangePassword(true);
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 800));
    // Redirect after change password
    router.push("/pages/admin/settings");
  };

  const handleEditProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(true);
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 800));
    // Redirect after edit
    router.push("/pages/admin/settings");
  };

  const handleSiteSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSiteSettings(true);

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Redirect after site settings
    router.push("/pages/admin/settings");
  };

  return (
    <div className="min-h-screen bg-white">
      <AdminHeader />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center">
          {/* Profile Photo */}
          <div className="w-40 h-40 rounded-full overflow-hidden mb-8">
            <img
              src="https://media.istockphoto.com/id/652928024/photo/confidence-conquers-all.jpg?s=612x612&w=0&k=20&c=CawXO6HYMrkxDK-CnPae5D7QYLinw1lEKrGjRMAw4c4="
              alt="Admin profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl font-bold mb-3">Admin Name</h1>

          {/* Email */}
          <p className="text-neutral-600 mb-4">admin@example.com</p>

          {/* Role Badge */}
          <div className="bg-neutral-200 px-4 py-1.5 rounded-full text-sm font-medium mb-12">
            Super Admin
          </div>

          {/* Stats Section */}
          <div className="w-full border-t border-neutral-200 pt-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Last Login */}
              <div>
                <p className="text-sm text-neutral-600 mb-2">Last Login</p>
                <p className="text-xl font-semibold">2023-10-27 10:30 AM</p>
              </div>

              {/* Total Products Managed */}
              <div>
                <p className="text-sm text-neutral-600 mb-2">
                  Total Products Managed
                </p>
                <p className="text-xl font-semibold">1,204</p>
              </div>

              {/* Recent Activity Count */}
              <div>
                <p className="text-sm text-neutral-600 mb-2">
                  Recent Activity Count
                </p>
                <p className="text-xl font-semibold">82</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={handleEditProfile}
              isLoading={isEditing}
              loadingText="Loading..."
              className="bg-black text-white px-8 py-3 font-medium hover:bg-neutral-900 transition"
            >
              Edit Profile
            </Button>

            <Button
              onClick={ChangePassword}
              isLoading={isChangePassword}
              loadingText="Loading..."
              className="bg-neutral-200 text-black px-8 py-3 font-medium hover:bg-neutral-300 transition"
            >
              Change Password
            </Button>

            <Button
              onClick={handleSiteSettings}
              isLoading={isSiteSettings}
              loadingText="Loading..."
              className="bg-neutral-200 text-black px-8 py-3 font-medium hover:bg-neutral-300 transition"
            >
              Manage Site Settings
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
