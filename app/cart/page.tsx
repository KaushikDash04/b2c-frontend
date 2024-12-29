'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function Cart() {
  const [isLoading, setIsLoading] = useState(false)
  const [cart, setCart] = useState({ items: [], total: 0 })

  useEffect(() => {
    // In a real app, this would fetch the cart from an API or local storage
    setCart({
      items: [
        { id: 1, title: 'The Amazing Journey', quantity: 16, price: 10 }
      ],
      total: 160
    })
  }, [])

  const handlePayment = async () => {
    setIsLoading(true)
    // In a real application, you would make an API call to your backend here
    // to create a Razorpay order and get the order ID
    const orderId = 'order_' + Math.random().toString(36).substr(2, 9)
    
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your actual Razorpay key
      amount: cart.total * 100, // Amount in paise
      currency: 'INR',
      name: 'GENSCRIPT AI',
      description: 'Book Purchase',
      order_id: orderId,
      handler: function (response: any) {
        alert('Payment successful. Payment ID: ' + response.razorpay_payment_id)
        setIsLoading(false)
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#3B82F6'
      }
    }

    const razorpay = new window.Razorpay(options)
    razorpay.open()
  }

  return (
    <div className="container mx-auto px-4">
      <Link href="/books/1" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Book
      </Link>

      <div className="bg-[#0A0B14] p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        <div className="space-y-6">
          {cart.items.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg"
                alt="Book cover"
                width={80}
                height={120}
                className="rounded-lg object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-400">Quantity: {item.quantity}</p>
                <p className="text-gray-400">Price: ₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}

          <div className="border-t border-gray-700 pt-4">
            <p className="text-xl font-semibold">Total: ₹{cart.total}</p>
          </div>

          <Button 
            size="lg" 
            className="w-full" 
            onClick={handlePayment}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Proceed to Payment (Razorpay)'}
          </Button>
        </div>
      </div>
    </div>
  )
}

