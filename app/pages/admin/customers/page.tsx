"use client"

import { useState } from "react"
import AdminHeader from "../../../components/admin-header"
import { Search, MoreVertical, RotateCcw, UserX } from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  signupDate: string
  avatar: string
}

interface Order {
  id: string
  date: string
  amount: number
  status: string
}

const users: User[] = [
  {
    id: "1",
    name: "Eleanor Vance",
    email: "eleanor@example.com",
    signupDate: "2023-10-26",
    avatar: "https://images.unsplash.com/photo-1525786210598-d527194d3e9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjB3aXRoJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "2",
    name: "Marcus Thorne",
    email: "marcus.t@example.com",
    signupDate: "2023-10-24",
    avatar: "https://media.istockphoto.com/id/922653458/photo/handsome-young-man-at-home-sitting-on-the-couch.jpg?s=612x612&w=0&k=20&c=i3wpsxwFV04EKxZRmE1ffkHmy3x_zfWzch6Hm3qJzf0=",
  },
  {
    id: "3",
    name: "Isla Finch",
    email: "isla.finch@example.com",
    signupDate: "2023-10-22",
    avatar: "https://media.istockphoto.com/id/482630613/photo/doing-business-with-the-right-attitude-positivity.jpg?s=612x612&w=0&k=20&c=k2bD9GevrHsD_xSSS53sK3ySTCudCiAX-mVRiuubawQ=",
  },
  {
    id: "4",
    name: "Jasper Dell",
    email: "jasper@example.com",
    signupDate: "2023-10-21",
    avatar: "https://media.istockphoto.com/id/652928276/photo/driven-and-determined-to-succeed.jpg?s=612x612&w=0&k=20&c=BDnA5R_0s96tC7jekGTla1syo3ybdAoeL4zLnA9Xf50=",
  },
  {
    id: "5",
    name: "Clara Oswald",
    email: "clara.o@example.com",
    signupDate: "2023-10-20",
    avatar: "https://media.istockphoto.com/id/187202956/photo/smiling-businesswoman.jpg?s=612x612&w=0&k=20&c=_X1m2lUztxmkN2u_2HUJfGBMSHWt8RgFtCZKr6NOJJM=",
  },
]

const orderHistory: Record<string, Order[]> = {
  "2": [
    { id: "#TX1056", date: "Oct 15, 2023", amount: 125.5, status: "Delivered" },
    { id: "#TX1043", date: "Sep 28, 2023", amount: 89.0, status: "Delivered" },
    { id: "#TX1021", date: "Aug 02, 2023", amount: 240.0, status: "Delivered" },
  ],
  "1": [
    { id: "#TX1055", date: "Oct 20, 2023", amount: 145.5, status: "Delivered" },
    { id: "#TX1042", date: "Sep 15, 2023", amount: 210.0, status: "Delivered" },
  ],
  "3": [{ id: "#TX1044", date: "Oct 10, 2023", amount: 88.75, status: "Delivered" }],
  "4": [{ id: "#TX1030", date: "Sep 05, 2023", amount: 320.1, status: "Delivered" }],
  "5": [{ id: "#TX1020", date: "Aug 01, 2023", amount: 155.2, status: "Delivered" }],
}

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUser, setSelectedUser] = useState<User>(users[1])
  const [showActionMenu, setShowActionMenu] = useState<string | null>(null)

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-white">
      <AdminHeader />

      <div className="px-4 md:px-8 lg:px-16 py-8 pb-24 md:pb-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - User List */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl md:text-4xl font-bold">Users</h1>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            {/* Users Table */}
            <div className="bg-white border border-neutral-200 rounded-lg overflow-x-auto">
              {/* Desktop Table Header */}
              <div className="hidden md:block bg-neutral-100 px-6 py-3 border-b border-neutral-200">
                <div className="grid grid-cols-12 gap-4 font-semibold text-sm uppercase tracking-wide">
                  <div className="col-span-3">Name</div>
                  <div className="col-span-4">Email</div>
                  <div className="col-span-3">Signup Date</div>
                  <div className="col-span-2 text-center">Action</div>
                </div>
              </div>

              <div className="divide-y divide-neutral-200">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className={`px-4 md:px-6 py-4 hover:bg-neutral-50 cursor-pointer transition ${
                      selectedUser.id === user.id ? "bg-neutral-50" : ""
                    }`}
                    onClick={() => setSelectedUser(user)}
                  >
                    {/* Mobile Layout */}
                    <div className="md:hidden space-y-2">
                      <div className="flex justify-between items-start">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-base mb-1">{user.name}</div>
                          <div className="text-sm text-neutral-600 truncate">{user.email}</div>
                          <div className="text-xs text-neutral-500 mt-1">{user.signupDate}</div>
                        </div>
                        <div className="relative ml-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setShowActionMenu(showActionMenu === user.id ? null : user.id)
                            }}
                            className="p-2 hover:bg-neutral-200 rounded-lg transition"
                          >
                            <MoreVertical size={20} />
                          </button>
                          {showActionMenu === user.id && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-neutral-200 rounded-lg shadow-lg z-10">
                              <button className="w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm">
                                View Details
                              </button>
                              <button className="w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm">
                                Edit User
                              </button>
                              <button className="w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm text-red-600">
                                Delete User
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3 font-medium truncate">{user.name}</div>
                        <div className="col-span-4 text-neutral-600 truncate" title={user.email}>
                          {user.email}
                        </div>
                        <div className="col-span-3 text-neutral-600">{user.signupDate}</div>
                        <div className="col-span-2 text-center relative">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setShowActionMenu(showActionMenu === user.id ? null : user.id)
                            }}
                            className="p-2 hover:bg-neutral-200 rounded-lg transition"
                          >
                            <MoreVertical size={20} />
                          </button>
                          {showActionMenu === user.id && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-neutral-200 rounded-lg shadow-lg z-10">
                              <button className="w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm">
                                View Details
                              </button>
                              <button className="w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm">
                                Edit User
                              </button>
                              <button className="w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm text-red-600">
                                Delete User
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - User Details */}
          <div className="w-full lg:w-96 bg-neutral-100 rounded-lg p-6">
            {/* User Profile */}
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full bg-neutral-300 mx-auto mb-4 overflow-hidden">
                <img
                  src={selectedUser.avatar || "/placeholder.svg"}
                  alt={selectedUser.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold mb-1">{selectedUser.name}</h2>
              <p className="text-neutral-600 text-sm">{selectedUser.email}</p>
            </div>

            {/* Order History */}
            <div className="mb-6">
              <h3 className="font-semibold text-sm uppercase tracking-wide text-neutral-700 mb-4">Order History</h3>
              <div className="space-y-3">
                {orderHistory[selectedUser.id]?.map((order) => (
                  <div key={order.id} className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium">Order {order.id}</p>
                        <p className="text-xs text-neutral-500">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${order.amount.toFixed(2)}</p>
                        <span className="inline-block px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-white border border-neutral-300 text-black py-3 rounded-lg font-medium hover:bg-neutral-50 transition flex items-center justify-center gap-2">
                <RotateCcw size={18} />
                Reset Password
              </button>
              <button className="w-full bg-red-100 border border-red-200 text-red-700 py-3 rounded-lg font-medium hover:bg-red-200 transition flex items-center justify-center gap-2">
                <UserX size={18} />
                Deactivate User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
