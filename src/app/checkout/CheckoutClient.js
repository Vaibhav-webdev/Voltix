"use client"

import { MoveLeft } from "lucide-react"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useAppContext } from "../../context/AppContext"

export default function CheckoutClient() {
  const [show, setshow] = useState(true)
  const { cart, setCart } = useAppContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Form submitted!")
    setshow(false)
  };

  const router = useRouter()
  const shipping = 1.20

  function subtotal(cart) {
    let subtotal = 0
    for (let i = 0; i < cart.length; i++) {
      subtotal += cart[i].price
    }
    return subtotal
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 md:px-16">

      {/* Back Button */}
      <button
        onClick={() => {
          if (window.history.length > 1) window.history.back()
          else window.location.href = "/store"
        }}
        className="flex items-center gap-2 mb-6 text-gray-600 hover:text-black transition"
      >
        <MoveLeft size={28} />
        <span className="text-lg font-medium">Back</span>
      </button>

      <h1 className="text-4xl font-bold text-center mb-14 tracking-tight">
        Secure Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-10">
          <h2 className="text-2xl font-semibold mb-8 border-b pb-4">
            Shipping Information
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              {...register("firstName", { required: "First Name is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              type="email"
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("phone", { required: "Phone Number is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Phone Number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Street */}
        <div>
          <input
            {...register("street", {
              required: "Street Address is required",
            })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              errors.street ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Street Address"
          />
          {errors.street && (
            <p className="text-red-500 text-sm mt-1">
              {errors.street.message}
            </p>
          )}
        </div>

        {/* City, State, ZIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <input
              {...register("city", { required: "City is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="City"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">
                {errors.city.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("state", { required: "State is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.state ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="State"
            />
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">
                {errors.state.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("zip", { required: "ZIP Code is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.zip ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="ZIP Code"
            />
            {errors.zip && (
              <p className="text-red-500 text-sm mt-1">
                {errors.zip.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-black text-white border hover:text-black font-semibold hover:border-[1px] rounded-lg hover:bg-white transition"
        >
          Submit
        </button>
      </form>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-2xl shadow-xl p-8 h-fit sticky top-8">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-4">
            Order Summary
          </h2>

          <div className="space-y-4 text-sm">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
          </div>

          <hr className="my-6" />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal(cart)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>
          </div>

          <div className="flex justify-between font-bold text-xl mt-6">
            <span>Total</span>
            <span>${subtotal(cart) + shipping}</span>
          </div>

          <button onClick={() => {
            router.push("/success")
            setCart([])
          }} disabled={show} className="w-full disabled:opacity-80 cursor-pointer disabled:cursor-not-allowed mt-8 bg-black text-white py-4 rounded-xl font-semibold text-lg">
            Place Order
          </button>
          {show && <div>
            <p className="mt-4 text-center text-sm text-red-600">Your Have To Fill This Form First!</p>
          </div>}
        </div>
      </div>
    </div>
  )
}