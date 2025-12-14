"use client"

import type React from "react"
import { Button } from "../../../components/ui/button"
import { useState } from "react"
import SiteHeader from "../../../components/site-header"

export default function AccountDetailsPage() {
  const [profileData, setProfileData] = useState({
    firstName: "Jessica",
    lastName: "Walters",
    email: "jessica.walters@example.com",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [profileEdited, setProfileEdited] = useState(false)
  const [passwordErrors, setPasswordErrors] = useState<string>("")
  const [isSavingProfile, setIsSavingProfile] = useState(false)
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false)

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setProfileEdited(true)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSaveProfile = async () => {
    setIsSavingProfile(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setProfileEdited(false)
    setIsSavingProfile(false)
  }

  const handleUpdatePassword = async () => {
    setPasswordErrors("")

    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setPasswordErrors("All password fields are required")
      return
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordErrors("New passwords do not match")
      return
    }

    if (passwordData.newPassword.length < 8) {
      setPasswordErrors("New password must be at least 8 characters")
      return
    }

    setIsUpdatingPassword(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
    setIsUpdatingPassword(false)
  }

  return (
    <main className="min-h-screen bg-white pb-24">
      <SiteHeader variant="guest" />

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">Account Details</h1>
        </div>

        {/* Profile Information Section */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 md:p-8 mb-8">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-2xl font-bold">Profile Information</h2>
            <div className="flex gap-3">
              {profileEdited && (
                <Button
                  onClick={() => {
                    setProfileData({
                      firstName: "Jessica",
                      lastName: "Walters",
                      email: "jessica.walters@example.com",
                    })
                    setProfileEdited(false)
                  }}
                  className="px-4 py-2 bg-neutral-300 text-neutral-900 font-medium rounded hover:bg-neutral-400 transition"
                >
                  Cancel
                </Button>
              )}
              <Button
                onClick={handleSaveProfile}
                isLoading={isSavingProfile}
                loadingText="Saving..."
                className="px-6 py-2 bg-orange-600 text-white font-medium rounded hover:bg-orange-700 transition"
              >
                Save Changes
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={profileData.firstName}
                onChange={handleProfileChange}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={profileData.lastName}
                onChange={handleProfileChange}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleProfileChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Password & Security Section */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4">Password & Security</h2>
          <p className="text-neutral-600 mb-6">
            Update your password regularly to keep your account secure. Click the button below to start the process.
          </p>

          {passwordErrors && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {passwordErrors}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                placeholder="Enter new password"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="Confirm new password"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <Button
              onClick={handleUpdatePassword}
              isLoading={isUpdatingPassword}
              loadingText="Updating..."
              className="px-6 py-2 bg-orange-600 text-white font-medium rounded hover:bg-orange-700 transition w-fit"
            >
              Update Password
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
