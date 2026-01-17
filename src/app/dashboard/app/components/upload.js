"use client";

import Image from "next/image";
import { toast } from "sonner";
import { useState } from "react";
import { Upload } from "lucide-react";
import { useRef } from "react";

export default function ProfileUpload(props) {
    const imageUrl = props.imageUrl
    const setImageUrl = props.setImageUrl

    const fileInputRef = useRef()
    const handleUpload = async (e) => {
        const file = e.target.files[0];

        if (!file) {
            toast.error("Please select a file first");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/user/update-profile", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) {
                // show error from server
                throw new Error(data.message || "Upload failed");
            }

            setImageUrl(data.url);

            // success toast
            toast.success("Uploaded successfully!");
        } catch (err) {
            toast.error(`Upload failed: ${err.message}`);
        }
    };

    return (
        <div>
            {/* Hidden file input */}
            <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleUpload}
            />

            {/* Custom upload button */}
            <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
            >
                <div className="flex justify-center items-center w-14 h-14 relative rounded-full border border-dashed overflow-hidden">
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt="User image"
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <Upload className="text-gray-400" />
                    )}
                </div>

                <span className="text-sm text-gray-600">Upload user image</span>
            </div>
        </div>
    );
}