"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { CheckCircle } from "lucide-react"

export default function SuccessPage() {
  const { data: session } = useSession()

  const router = useRouter()
    const [showCheck, setShowCheck] = useState(false)

  useEffect(() => {
    // Fake payment processing delay
    const timer = setTimeout(() => {
      setShowCheck(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="py-58 lg:py-34 flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-[90%] max-w-md text-center">

        {!showCheck ? (
          <>
            {/* Spinner */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-xl font-semibold text-green-700">
              Processing Payment...
            </h2>
            <p className="text-gray-500 mt-2">
              Please wait, {session.user.name}
            </p>
          </>
        ) : (
          <>
            {/* Success Animation */}
            <div className="flex justify-center mb-6 animate-scale">
              <CheckCircle size={80} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-700">
              Payment Successful!
            </h2>
            <p className="text-gray-600 mt-2">
              Thank you for your purchase 🎉
            </p>

            <button onClick={() => {
                router.push("/store")
            }} className="mt-6 bg-green-600 hover:bg-green-800 text-white px-6 py-2 rounded-lg transition">
              Go to Dashboard
            </button>
          </>
        )}

      </div>
    </div>
  )
}
