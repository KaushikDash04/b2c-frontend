'use client'

import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Github, Mail, Lock } from 'lucide-react'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0B14] px-4">
      <div className="max-w-md w-full mx-auto rounded-lg p-8 shadow-lg bg-[#1A1B2E] border border-gray-800">
        <h2 className="font-bold text-2xl text-white mb-2">
          {isLogin ? 'Welcome to PUSTAK AI' : 'Join PUSTAK AI'}
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          {isLogin
            ? 'Enter your credentials to access your account'
            : 'Sign up to start creating AI-powered books with PUSTAK AI'}
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
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
            <BottomGradient />
          </Button>
        </form>

        <div className="my-8 flex items-center justify-center">
          <div className="border-t border-gray-800 w-full" />
          <span className="bg-[#1A1B2E] px-4 text-sm text-gray-400">Or continue with</span>
          <div className="border-t border-gray-800 w-full" />
        </div>

        <div className="flex flex-col space-y-4">
          <Button variant="outline" className="relative group/btn" type="button">
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
            <BottomGradient />
          </Button>
          <Button variant="outline" className="relative group/btn" type="button">
            <Mail className="mr-2 h-4 w-4" />
            <span>Google</span>
            <BottomGradient />
          </Button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
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

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </>
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

