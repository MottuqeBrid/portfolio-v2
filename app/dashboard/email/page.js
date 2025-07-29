"use client";

import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaTrash,
  FaReply,
  FaEye,
  FaClock,
  FaUser,
} from "react-icons/fa";
import Swal from "sweetalert2";

export default function EmailDashboard() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [filter, setFilter] = useState("all"); // all, read, unread

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/send-email");
      const data = await response.json();

      setEmails(data.emails || []);
    } catch (error) {
      console.error("Error fetching emails:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleDeleteEmail = async (emailId) => {
    const result = await Swal.fire({
      title: "Delete Email?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "!bg-base-100 !text-base-content",
        title: "!text-base-content",
        htmlContainer: "!text-base-content/70",
        confirmButton: "!bg-error !border-error hover:!bg-error/90",
        cancelButton:
          "!bg-base-300 !text-base-content !border-base-300 hover:!bg-base-300/90",
      },
    });

    if (result.isConfirmed) {
      try {
        await fetch(`/api/send-email/${emailId}`, { method: "DELETE" });

        fetchEmails();
        setSelectedEmail(null);

        Swal.fire({
          title: "Deleted!",
          text: "Email has been deleted.",
          icon: "success",
          customClass: {
            popup: "!bg-base-100 !text-base-content",
            confirmButton: "!bg-success !border-success",
          },
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Failed to delete email.",
          icon: "error",
          customClass: {
            popup: "!bg-base-100 !text-base-content",
            confirmButton: "!bg-error !border-error",
          },
        });
      }
    }
  };

  const handleReplyEmail = (email) => {
    const mailtoLink = `mailto:${email.email}?subject=Re: ${email.subject}&body=Hello,\n\nThank you for your message.\n\nBest regards,\nYour Name`;
    window.location.href = mailtoLink;
  };

  const markAsRead = async (emailId) => {
    try {
      await fetch(`/api/send-email/${emailId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isRead: true }),
      });
      setEmails(
        emails.map((email) =>
          email._id === emailId ? { ...email, isRead: true } : email
        )
      );
    } catch (error) {
      console.error("Error marking email as read:", error);
    }
  };

  const filteredEmails = emails.filter((email) => {
    if (filter === "read") return email.isRead;
    if (filter === "unread") return !email.isRead;
    return true;
  });

  const unreadCount = emails.filter((email) => !email.isRead).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200">
        <div className="container mx-auto p-6">
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-base-content flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              Email Dashboard
            </h1>
            <p className="text-base-content/70 mt-2">
              Manage and respond to your contact form submissions
            </p>
          </div>

          {/* Stats */}
          <div className="stats shadow bg-base-100">
            <div className="stat">
              <div className="stat-title">Total Emails</div>
              <div className="stat-value text-primary">{emails.length}</div>
              <div className="stat-desc">{unreadCount} unread</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Email List */}
          <div className="lg:col-span-1">
            {/* Filter Tabs */}
            <div className="tabs tabs-boxed mb-4 bg-base-100">
              <button
                className={`tab ${filter === "all" ? "tab-active" : ""}`}
                onClick={() => setFilter("all")}
              >
                All ({emails.length})
              </button>
              <button
                className={`tab ${filter === "unread" ? "tab-active" : ""}`}
                onClick={() => setFilter("unread")}
              >
                Unread ({unreadCount})
              </button>
              <button
                className={`tab ${filter === "read" ? "tab-active" : ""}`}
                onClick={() => setFilter("read")}
              >
                Read ({emails.length - unreadCount})
              </button>
            </div>

            {/* Email List */}
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {filteredEmails.length > 0 ? (
                filteredEmails.map((email) => (
                  <div
                    key={email._id}
                    className={`card bg-base-100 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border-l-4 ${
                      !email.isRead
                        ? "border-l-primary bg-primary/5"
                        : "border-l-base-300"
                    } ${
                      selectedEmail?._id === email._id
                        ? "ring-2 ring-primary"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedEmail(email);
                      if (!email.isRead) markAsRead(email._id);
                    }}
                  >
                    <div className="card-body p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <FaUser className="w-3 h-3 text-base-content/60 flex-shrink-0" />
                            <span className="text-sm font-medium text-base-content truncate">
                              {email.email}
                            </span>
                            {!email.isRead && (
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            )}
                          </div>
                          <h3
                            className={`text-sm truncate ${
                              !email.isRead ? "font-bold" : "font-medium"
                            } text-base-content`}
                          >
                            {email.subject}
                          </h3>
                          <p className="text-xs text-base-content/60 truncate mt-1">
                            {email.body}
                          </p>
                          <div className="flex items-center gap-1 mt-2">
                            <FaClock className="w-3 h-3 text-base-content/40" />
                            <span className="text-xs text-base-content/60">
                              {formatDate(email.createdAt)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <FaEnvelope className="w-12 h-12 text-base-content/30 mx-auto mb-4" />
                  <p className="text-base-content/60">No emails found</p>
                </div>
              )}
            </div>
          </div>

          {/* Email Details */}
          <div className="lg:col-span-2">
            {selectedEmail ? (
              <div className="card bg-base-100 shadow-lg h-fit">
                <div className="card-body">
                  {/* Email Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 pb-4 border-b border-base-300">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-base-content mb-2">
                        {selectedEmail.subject}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-base-content/70">
                        <div className="flex items-center gap-2">
                          <FaUser className="w-4 h-4" />
                          <span>{selectedEmail.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaClock className="w-4 h-4" />
                          <span>{formatDate(selectedEmail.createdAt)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleReplyEmail(selectedEmail)}
                        className="btn btn-sm btn-primary"
                        title="Reply"
                      >
                        <FaReply className="w-4 h-4" />
                        Reply
                      </button>
                      <button
                        onClick={() => handleDeleteEmail(selectedEmail._id)}
                        className="btn btn-sm btn-error"
                        title="Delete"
                      >
                        <FaTrash className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>

                  {/* Email Body */}
                  <div className="prose max-w-none">
                    <div className="bg-base-200 p-6 rounded-lg">
                      <p className="text-base-content whitespace-pre-wrap leading-relaxed">
                        {selectedEmail.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card bg-base-100 shadow-lg h-96">
                <div className="card-body flex items-center justify-center">
                  <div className="text-center">
                    <FaEye className="w-16 h-16 text-base-content/30 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-base-content mb-2">
                      Select an Email
                    </h3>
                    <p className="text-base-content/60">
                      Choose an email from the list to view its details
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
