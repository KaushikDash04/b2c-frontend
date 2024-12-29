'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ImagePlus } from 'lucide-react'

export default function AddAuthor() {
  const router = useRouter()
  const [authors, setAuthors] = useState([{ name: '', bio: '', profilePicture: '' }])

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const newAuthors = [...authors]
        newAuthors[index].profilePicture = reader.result as string
        setAuthors(newAuthors)
      }
      reader.readAsDataURL(file)
    }
  }

  const addAuthor = () => {
    setAuthors([...authors, { name: '', bio: '', profilePicture: '' }])
  }

  const handleAuthorChange = (index: number, field: 'name' | 'bio', value: string) => {
    const newAuthors = [...authors]
    newAuthors[index][field] = value
    setAuthors(newAuthors)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would call an API to add the authors
    console.log('Adding authors:', authors)
    router.push('/authors')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Link href="/authors" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Authors
      </Link>

      <h1 className="text-3xl font-bold mb-8">Add New Author(s)</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {authors.map((author, index) => (
          <div key={index} className="space-y-6 border-b border-gray-700 pb-6 mb-6">
            <div className="space-y-2">
              <Label htmlFor={`name-${index}`}>Name</Label>
              <Input
                id={`name-${index}`}
                value={author.name}
                onChange={(e) => handleAuthorChange(index, 'name', e.target.value)}
                required
                className="bg-[#1A1B2E] border-gray-800"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`profilePicture-${index}`}>Profile Picture</Label>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  {author.profilePicture ? (
                    <img src={author.profilePicture} alt="Profile" width={80} height={80} className="object-cover" />
                  ) : (
                    <ImagePlus className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <Input
                  id={`profilePicture-${index}`}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleProfilePictureChange(e, index)}
                  className="bg-[#1A1B2E] border-gray-800"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`bio-${index}`}>Bio</Label>
              <Textarea
                id={`bio-${index}`}
                value={author.bio}
                onChange={(e) => handleAuthorChange(index, 'bio', e.target.value)}
                className="min-h-[150px] bg-[#1A1B2E] border-gray-800"
              />
            </div>
          </div>
        ))}
        <Button type="button" onClick={addAuthor} className="mb-4">Add Another Author</Button>
        <Button type="submit" className="w-full">Add Author(s)</Button>
      </form>
    </div>
  )
}

