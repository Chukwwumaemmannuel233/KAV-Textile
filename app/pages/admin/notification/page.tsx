"use client";

import { useState } from "react";
import AdminHeader from "../../../components/admin-header";
import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation"; // ✅ INITIALIZE ROUTER

type Notification = {
  id: number;
  title: string;
  time: string;
  icon: "cart" | "box" | "message" | "clock";
};

export default function Notifications() {
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter(); // ✅ INITIALIZE ROUTER
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, title: "New Order #12345", time: "2 minutes ago", icon: "cart" },
    {
      id: 2,
      title: "Low Stock Alert: 'Classic Blue T-Shirt'",
      time: "1 hour ago",
      icon: "box",
    },
    {
      id: 3,
      title: "New Customer Message",
      time: "4 hours ago",
      icon: "message",
    },
    {
      id: 4,
      title: "System Update Scheduled",
      time: "Yesterday",
      icon: "clock",
    },
  ]);

  const handleMarkAllRead = () => {
    console.log("Mark all as read");
  };

  const handleViewDetails = async  (e: React.FormEvent) => {
    e.preventDefault();
    setIsSignUp(true);

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 800));


    // Redirect after login
    router.push("/pages/admin/notification-details");
  };

  const handleDismiss = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const renderIcon = (icon: Notification["icon"]) => {
    switch (icon) {
      case "cart":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        );
      case "box":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z" />
            <path d="M9 7h6v2H9V7zm7 0h2v2h-2V7zm-7 3h6v2H9v-2zm7 0h2v2h-2v-2z" />
          </svg>
        );
      case "message":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        );
      case "clock":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <AdminHeader />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 pb-24 sm:pb-28">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Notifications
          </h2>
          <button
            onClick={handleMarkAllRead}
            className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-[#d97638] hover:bg-[#c4671f] text-white rounded-lg transition-colors font-medium text-sm sm:text-base whitespace-nowrap"
          >
            Mark All as Read
          </button>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-sm flex flex-col gap-3 sm:gap-4"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg bg-[#f5f1ed] flex items-center justify-center text-gray-900 shrink-0">
                  {renderIcon(notification.icon)}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 break-words">
                    {notification.title}
                  </h3>
                  <p className="text-sm text-gray-500">{notification.time}</p>
                </div>
                <button
                  onClick={() => handleDismiss(notification.id)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors shrink-0 sm:hidden"
                  aria-label="Dismiss notification"
                >
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 pl-0 sm:pl-0">
                <Button
                  onClick={ handleViewDetails}
                  isLoading={isSignUp}
                  loadingText="Loading..."
                  className="text-[#d97638] hover:text-[#c4671f] font-medium text-sm sm:text-base transition-colors"
                >
                  View Details
                </Button>
                <button
                  onClick={() => handleDismiss(notification.id)}
                  className="hidden sm:block p-1 hover:bg-gray-100 rounded transition-colors"
                  aria-label="Dismiss notification"
                >
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
