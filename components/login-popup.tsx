'use client'

import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Github, Mail, X } from 'lucide-react'

interface LoginPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginPopup({ isOpen, onClose }: LoginPopupProps) {
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted')
    // Implement login/signup logic here
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1A1B2E] rounded-lg p-6 sm:p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        <h2 className="font-bold text-xl sm:text-2xl text-white mb-2">
          {isLogin ? 'Welcome back' : 'Create an account'}
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
          {isLogin
            ? 'Enter your credentials to access your account'
            : 'Sign up to start creating AI-powered books with PUSTAK AI'}
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="John" type="text" className="bg-[#0A0B14] border-gray-800" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Doe" type="text" className="bg-[#0A0B14] border-gray-800" />
              </LabelInputContainer>
            </div>
          )}
          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="you@example.com" type="email" className="bg-[#0A0B14] border-gray-800" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" className="bg-[#0A0B14] border-gray-800" />
          </LabelInputContainer>

          <Button className="w-full bg-primary hover:bg-primary/90" type="submit">
            {isLogin ? 'Sign in' : 'Sign up'}
          </Button>
        </form>

        <div className="my-4 flex items-center justify-center">
          <div className="border-t border-gray-800 w-full" />
          <span className="bg-[#1A1B2E] px-4 text-xs sm:text-sm text-gray-400">Or continue with</span>
          <div className="border-t border-gray-800 w-full" />
        </div>

        <div className="flex flex-col space-y-4">
          <Button variant="outline" className="relative" type="button">
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </Button>
          <Button variant="outline" className="relative" type="button">
            <Mail className="mr-2 h-4 w-4" />
            <span>Google</span>
          </Button>
        </div>

        <p className="mt-6 text-center text-xs sm:text-sm text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            className="text-primary hover:underline focus:outline-none"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  )
}

