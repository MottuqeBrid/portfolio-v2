"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

export default function DeleteBtn({ id }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    // 🎨 Beautiful confirmation dialog with SweetAlert2
    const result = await Swal.fire({
      title: "Delete Project?",
      text: "This action cannot be undone. The project will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444", // Red color matching DaisyUI error
      cancelButtonColor: "#6b7280", // Gray color
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      background: "#1f2937", // Dark background for consistency
      color: "#f9fafb", // Light text
      customClass: {
        popup: "!bg-base-100 !text-base-content",
        title: "!text-base-content",
        htmlContainer: "!text-base-content/70",
        confirmButton: "!bg-error !border-error hover:!bg-error/90",
        cancelButton:
          "!bg-base-300 !text-base-content !border-base-300 hover:!bg-base-300/90",
      },
    });

    // Exit if user cancelled
    if (!result.isConfirmed) return;

    try {
      setIsDeleting(true);

      // 🔄 Show loading state with SweetAlert2
      Swal.fire({
        title: "Deleting Project...",
        text: "Please wait while we delete the project.",
        icon: "info",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        background: "#1f2937",
        color: "#f9fafb",
        customClass: {
          popup: "!bg-base-100 !text-base-content",
          title: "!text-base-content",
          htmlContainer: "!text-base-content/70",
        },
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success === false) {
        throw new Error(data.error || "Failed to delete project");
      }

      // ✅ Success notification
      await Swal.fire({
        title: "Deleted!",
        text: "Project has been deleted successfully.",
        icon: "success",
        confirmButtonColor: "#10b981", // Green color
        background: "#1f2937",
        color: "#f9fafb",
        customClass: {
          popup: "!bg-base-100 !text-base-content",
          title: "!text-base-content",
          htmlContainer: "!text-base-content/70",
          confirmButton: "!bg-success !border-success hover:!bg-success/90",
        },
      });

      // 🔄 Refresh the page to show updated list
      router.refresh();
    } catch (error) {

      // ❌ Error notification
      await Swal.fire({
        title: "Error!",
        text: error.message || "Failed to delete project. Please try again.",
        icon: "error",
        confirmButtonColor: "#ef4444",
        background: "#1f2937",
        color: "#f9fafb",
        customClass: {
          popup: "!bg-base-100 !text-base-content",
          title: "!text-base-content",
          htmlContainer: "!text-base-content/70",
          confirmButton: "!bg-error !border-error hover:!bg-error/90",
        },
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className={`btn btn-sm btn-error ${isDeleting ? "loading" : ""}`}
      title="Delete Project"
    >
      {isDeleting ? (
        <>
          <span className="loading loading-spinner loading-xs"></span>
          <span>Deleting...</span>
        </>
      ) : (
        <>
          <RiDeleteBin6Line className="w-4 h-4" />
          <span>Delete</span>
        </>
      )}
    </button>
  );
}
