'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function SubmissionSuccess() {
  const router = useRouter()

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-center items-center gap-4 mb-12">
        {[1, 2, 3].map((step, index) => (
          <div key={step} className="flex items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
              step === 3 ? 'bg-primary' : 'bg-[#1A1B2E]'
            }`}>
              {step}
            </div>
            {index < 2 && (
              <div className="h-[2px] w-16 bg-[#1A1B2E] mx-2" />
            )}
          </div>
        ))}
      </div>

      <div className="bg-[#0A0B14] p-8 rounded-lg text-center">
        <div className="space-y-6">
          <CheckCircle className="w-16 h-16 text-primary mx-auto" />
          <h2 className="text-2xl font-bold">Book Successfully Created!</h2>
          <p className="text-gray-400">Your book has been submitted and is now ready for preview.</p>
          
          <div className="flex justify-center gap-4 pt-6">
            <Button variant="outline" onClick={() => router.push('/')}>
              Back to Home
            </Button>
            <Button onClick={() => router.push('/books/preview/1')}>
              View Book
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

