"use client"

import type React from "react"

import { useState } from "react"
import AdminHeader from "../../../components/admin-header"
import { Info } from "lucide-react"

export default function AdminSettings() {
  const [adminName, setAdminName] = useState("Current Admin Name")
  const [email, setEmail] = useState("admin@example.com")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [businessName, setBusinessName] = useState("Textile Emporium")
  const [businessAddress, setBusinessAddress] = useState("123 Fabric Lane, Weaverville")
  const [stripeKey, setStripeKey] = useState("sk_test_xxxxxxxxxxxxxxxx")
  const [paypalId, setPaypalId] = useState("AZxxxxxxxxxxxxxxxx")
  const [logoPreview, setLogoPreview] = useState<string>("/placeholder.svg?height=100&width=100")
  const [profilePhoto, setProfilePhoto] = useState<string>("/images/woman-with-glasses.png")

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleProfilePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveProfilePhoto = () => {
    setProfilePhoto("/admin-profile.png")
  }

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Profile updated successfully!")
  }

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    alert("Password changed successfully!")
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  const handleSaveBusinessInfo = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Business information saved!")
  }

  const handleSaveAPIKeys = (e: React.FormEvent) => {
    e.preventDefault()
    alert("API Keys saved successfully!")
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <AdminHeader />
      <div className="px-4 md:px-8 py-6 md:py-8 pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Settings</h1>
            <p className="text-neutral-600">Manage your profile, site preferences, and integrations.</p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Admin Profile Information */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h2 className="text-xl font-bold mb-6">Admin Profile Information</h2>
              <form onSubmit={handleUpdateProfile} className="space-y-4">
                <div className="mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-neutral-200">
                      <img
                        src={profilePhoto || "/placeholder.svg"}
                        alt="Admin Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <label className="bg-neutral-200 text-neutral-800 px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-neutral-300 transition">
                        Change Photo
                        <input type="file" onChange={handleProfilePhotoUpload} accept="image/*" className="hidden" />
                      </label>
                      <button
                        type="button"
                        onClick={handleRemoveProfilePhoto}
                        className="text-neutral-600 hover:text-neutral-800 transition font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Admin Name</label>
                  <input
                    type="text"
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Current Admin Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="admin@example.com"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-orange-700 transition"
                >
                  Update Profile
                </button>
              </form>
            </div>

            {/* Business & Site Details */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h2 className="text-xl font-bold mb-6">Business & Site Details</h2>
              <form onSubmit={handleSaveBusinessInfo} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Site Logo</label>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-neutral-800 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={logoPreview || "/placeholder.svg"}
                        alt="Current Logo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <label className="bg-neutral-200 text-neutral-800 px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-neutral-300 transition flex items-center gap-2">
                      Upload Logo
                      <input type="file" onChange={handleLogoUpload} accept="image/*" className="hidden" />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Business Name</label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Textile Emporium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Business Address</label>
                  <input
                    type="text"
                    value={businessAddress}
                    onChange={(e) => setBusinessAddress(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="123 Fabric Lane, Weaverville"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-orange-700 transition"
                >
                  Save Business Info
                </button>
              </form>
            </div>

            {/* Change Password */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h2 className="text-xl font-bold mb-6">Change Password</h2>
              <form onSubmit={handleChangePassword} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Current Password</label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter current password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter new password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Confirm new password"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-orange-700 transition"
                >
                  Change Password
                </button>
              </form>
            </div>

            {/* Payment Gateway Settings */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h2 className="text-xl font-bold mb-6">Payment Gateway Settings</h2>
              <form onSubmit={handleSaveAPIKeys} className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="block text-sm font-medium">Stripe API Key</label>
                    <Info size={16} className="text-neutral-500" />
                  </div>
                  <input
                    type="password"
                    value={stripeKey}
                    onChange={(e) => setStripeKey(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="sk_test_..."
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="block text-sm font-medium">PayPal Client ID</label>
                    <Info size={16} className="text-neutral-500" />
                  </div>
                  <input
                    type="password"
                    value={paypalId}
                    onChange={(e) => setPaypalId(e.target.value)}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="AZ..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-orange-700 transition"
                >
                  Save API Keys
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
