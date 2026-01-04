"use client"

import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { MoveLeft, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import Link from "next/link"
import { useAppContext } from "../../context/AppContext"

export default function ProductPage() {
    const { cart, setCart } = useAppContext()
    const searchParams = useSearchParams()

    const id = searchParams.get("id")
    const name = searchParams.get("name")
    const desc = searchParams.get("desc")
    const image = searchParams.get("image")
    const router = useRouter()
    const reviews = Number(searchParams.get("reviews"))
    const not_price = Number(searchParams.get("not_price"))
    const price = Number(searchParams.get("price"))

    const [selectedImage, setSelectedImage] = useState(image || "/placeholder.png")
    const [size, setSize] = useState("M")
    const [isLimitReached, setIsLimitReached] = useState(false)
    const [color, setColor] = useState("greenyellow")

    const sizes = ["S", "M", "L", "XL", "XXL"]

    // 🔹 Add to cart (no duplicate products)
    const addToCart = () => {
        // 🚫 limit reached
        if (cart.length >= 4) {
            setIsLimitReached(true)
            return
        }

        // ❌ prevent duplicate product
        const exists = cart.find((item) => item.id === id)
        if (exists) return

        setIsLimitReached(false)

        setCart([
            ...cart,
            {
                id,
                name,
                description: desc,
                price,
                image,
                size,
                color,
                quantity: 1,
            },
        ])
    }


    useEffect(() => {
        console.log("Cart:", cart)
    }, [cart])

    return (
        <div className="bg-gray-50 absolute min-h-screen px-6 md:px-16 py-10">

            {/* Back */}
            <Link href="/store" className="flex items-center gap-2 mb-6 text-gray-500 hover:text-black">
                <MoveLeft size={26} />
                <span className="text-lg">Back</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

                {/* LEFT – IMAGE */}
                <div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <Image
                            src={selectedImage}
                            alt={name}
                            width={500}
                            height={500}
                            className="rounded-lg mx-auto"
                        />
                    </div>

                    {/* ✅ THUMBNAILS FROM CART */}
                    <div className="flex gap-4 bg-white shadow-lg rounded-lg py-4 px-4 mt-4 items-center">
                        {cart
                            .filter((item) => item.image !== image) // ❌ hide current product
                            .map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setSelectedImage(item.image)}
                                    className={`cursor-pointer border rounded-lg p-1 ${selectedImage === item.image
                                        ? "border-purple-600"
                                        : "border-gray-200"
                                        }`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={70}
                                        height={70}
                                    />
                                </div>
                            ))}

                        {/* Cart count */}
                        <div className="ml-auto flex items-center text-sm text-gray-500">
                            <ShoppingCart className="mr-2" size={18} />
                            {cart.length} items
                        </div>
                    </div>
                </div>

                {/* RIGHT – INFO */}
                <div className="bg-white rounded-xl shadow-xl p-8">

                    <h1 className="text-3xl font-bold mb-3">{name}</h1>

                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-gray-400 line-through">${not_price}</span>
                        <span className="text-2xl font-bold text-gray-800">${price}.00</span>
                    </div>

                    <p className="text-sm text-gray-500 mb-6">
                        <span className="text-yellow-500">★★★★★</span> (${reviews})
                    </p>

                    <p className="text-gray-600 mb-6">{desc}</p>

                    {/* Color */}
                    <div className="mb-6">
                        <p className="font-semibold mb-2">Color: {color}</p>
                        <div className="flex gap-3">
                            {["greenyellow", "lightgreen", "lightblue", "orange"].map((c) => (
                                <button
                                    key={c}
                                    onClick={() => setColor(c)}
                                    className={`w-8 h-8 rounded-full shadow ${color === c ? "ring-2 ring-purple-600" : ""
                                        }`}
                                    style={{ backgroundColor: c }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Size */}
                    <div className="mb-6">
                        <p className="font-semibold mb-2">Size</p>
                        <div className="grid grid-cols-4 lg:grid-cols-5 gap-3">
                            {sizes.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setSize(s)}
                                    className={`px-4 py-2 rounded-lg border ${size === s ? "bg-gray-900 text-white" : "hover:bg-gray-100"
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mb-6">
                        <button
                            onClick={() => {
                                addToCart()
                                if (isLimitReached) {
                                    router.push("/store")
                                }
                            }}
                            className="flex-1 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800"
                        >
                            Add to Cart
                        </button>
                        {isLimitReached && (
                            <div className="mt-3 fixed top-20 py-4 p-8 rounded-lg bg-red-100 text-red-600 text-sm font-medium">
                                <button
                                    onClick={() => setIsLimitReached(false)}
                                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                                >
                                    <X size={14} />
                                </button>
                                ⚠️ You can maximum add 4 items to the cart
                            </div>
                        )}

                    <button onClick={() => {
                        router.push("/checkout")
                    }} className="flex-1 border py-3 rounded-xl text-center font-semibold hover:bg-gray-100">Buy Now</button>
                </div>

                <div className="border-t pt-4 text-sm">
                    <p className="font-semibold mb-1">Secure payment</p>
                    <p className="text-gray-500">Visa • Mastercard • PayPal</p>
                </div>

            </div>
        </div>
        </div >
    )
}
