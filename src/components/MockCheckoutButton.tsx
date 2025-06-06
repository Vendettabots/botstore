'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

interface MockCheckoutButtonReact {
  onClick?: () => void
}

export function MockCheckoutButton({ onClick }: MockCheckoutButtonReact) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const createNowPayment = async () => {
    const res = await fetch('https://api.nowpayments.io/v1/payment', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_NOWPAYMENTS_API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price_amount: 25,
        price_currency: 'usd',
        pay_currency: 'bnb',
        order_id: 'ORDER123',
        order_description: 'BotStore Checkout',
        success_url: 'https://botstore.vercel.app/success',
        cancel_url: 'https://botstore.vercel.app/cancel',
      }),
    })

    const data = await res.json()
    return data.payment_id
  }

  const handleNowPaymentsClick = async () => {
    const paymentId = await createNowPayment()

    const widget = document.createElement('iframe')
    widget.src = `https://nowpayments.io/payment/?iid=${paymentId}`
    widget.style.position = 'fixed'
    widget.style.top = '0'
    widget.style.left = '0'
    widget.style.width = '100vw'
    widget.style.height = '100vh'
    widget.style.zIndex = '9999'
    widget.style.border = 'none'
    document.body.appendChild(widget)

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        document.body.removeChild(widget)
        document.removeEventListener('keydown', handleEsc)
      }
    }

    document.addEventListener('keydown', handleEsc)
  }

  return (
    <button
      type="button"
      onClick={handleNowPaymentsClick}
      className="w-full rounded-xl bg-black px-6 py-4 text-white transition-colors hover:bg-zinc-800"
      disabled={isPending}
    >
      Pay with Crypto 💸
    </button>
  )
}


