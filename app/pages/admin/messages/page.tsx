"use client"

import { useState } from "react"
import { Search, ArrowLeft } from "lucide-react"
import AdminHeader from "../../../components/admin-header"

interface Message {
  id: string
  sender: string
  email: string
  subject: string
  date: string
  content: string
  unread: boolean
}

const MESSAGES: Message[] = [
  {
    id: "1",
    sender: "Eleanor Vance",
    email: "eleanor.v@example.com",
    subject: "Inquiry about custom order #743B",
    date: "Oct 26, 2023",
    content: `Hello,

I hope this message finds you well. I'm writing to inquire about the possibility of placing a custom order for a set of linen curtains. I was browsing your website and was very impressed with the quality and design of your fabrics.

I'm looking for a specific shade of dusty rose, and I would need four panels, each measuring 50" wide by 96" long. Could you please let me know if this is something you can accommodate? I'm also interested in any fabric samples you might be able to send.

Thank you for your time and I look forward to hearing from you.

Best regards,
Eleanor Vance`,
    unread: true,
  },
  {
    id: "2",
    sender: "Marcus Holloway",
    email: "m.holloway@web.com",
    subject: "Question regarding fabric care",
    date: "Oct 25, 2023",
    content: `Hello,

I recently purchased some silk fabric from your store and I'm wondering about the best way to care for it. Should I dry clean it or can it be hand washed?

Thank you,
Marcus Holloway`,
    unread: false,
  },
  {
    id: "3",
    sender: "Ava Chen",
    email: "ava.chen@mail.co",
    subject: "Feedback on my recent purchase",
    date: "Oct 24, 2023",
    content: `Hi there,

I wanted to share some feedback on my recent purchase. The quality exceeded my expectations!

Best,
Ava Chen`,
    unread: true,
  },
  {
    id: "4",
    sender: "Liam Gallagher",
    email: "liam.g@music.net",
    subject: "Shipping information needed",
    date: "Oct 23, 2023",
    content: `Hello,

I need some information about shipping times for international orders.

Thanks,
Liam Gallagher`,
    unread: false,
  },
  {
    id: "5",
    sender: "Sofia Reyes",
    email: "sofia.reyes@business.com",
    subject: "Partnership proposal",
    date: "Oct 22, 2023",
    content: `Good afternoon,

I'm reaching out to discuss a potential partnership opportunity between our companies.

Best regards,
Sofia Reyes`,
    unread: true,
  },
]

export default function MessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState<Message>(MESSAGES[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [showMobileDetail, setShowMobileDetail] = useState(false)

  const filteredMessages = MESSAGES.filter(
    (msg) =>
      msg.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleMessageClick = (message: Message) => {
    console.log("[v0] Message clicked:", message.sender)
    setSelectedMessage(message)
    setShowMobileDetail(true)
    console.log("[v0] showMobileDetail set to:", true)
  }

  const handleBackToList = () => {
    console.log("[v0] Back button clicked")
    setShowMobileDetail(false)
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      <AdminHeader />

      <div className="h-[calc(100vh-4rem)] flex gap-4 p-4 md:p-6 pb-24 md:pb-6">
        {/* Messages List Panel */}
        <div
          className={`${showMobileDetail ? "hidden" : "flex"} md:flex w-full md:w-2/5 bg-white rounded-lg shadow-sm flex-col overflow-hidden`}
        >
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-300"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredMessages.map((message) => (
              <button
                key={message.id}
                onClick={() => handleMessageClick(message)}
                className={`w-full p-4 border-b text-left hover:bg-neutral-50 transition ${
                  selectedMessage.id === message.id ? "bg-neutral-100" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-semibold text-base">{message.sender}</h3>
                  <span className="text-xs text-neutral-500 whitespace-nowrap ml-2">{message.date}</span>
                </div>
                <p className="text-sm text-neutral-700 mb-2 line-clamp-1">{message.subject}</p>
                <div className="flex items-center gap-2">
                  {message.unread && <div className="w-2 h-2 bg-blue-500 rounded-full" />}
                  <p className="text-xs text-neutral-500 truncate">{message.email}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Message Detail Panel */}
        <div
          className={`${showMobileDetail ? "flex" : "hidden"} md:flex w-full md:w-3/5 bg-white rounded-lg shadow-sm flex-col`}
        >
          <div className="p-6 border-b">
            <button
              onClick={handleBackToList}
              className="md:hidden flex items-center gap-2 text-neutral-600 mb-4 hover:text-neutral-900 transition"
            >
              <ArrowLeft size={20} />
              <span>Back to messages</span>
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedMessage.subject}</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg">{selectedMessage.sender}</p>
                <p className="text-sm text-neutral-600">{selectedMessage.email}</p>
              </div>
              <p className="text-sm text-neutral-500">{selectedMessage.date}</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="prose max-w-none">
              <p className="whitespace-pre-line text-neutral-700 leading-relaxed">{selectedMessage.content}</p>
            </div>
          </div>

          <div className="p-6 border-t">
            <button
              onClick={() => (window.location.href = `mailto:${selectedMessage.email}`)}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Reply via Email
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
