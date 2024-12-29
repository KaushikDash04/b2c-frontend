'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mic, Plus, Trash2 } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'

export function BookCreationForm() {
  const [step, setStep] = useState(1)
  const [chapters, setChapters] = useState([{ label: '', description: '' }])
  const [generateImages, setGenerateImages] = useState(false)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const addChapter = () => {
    setChapters([...chapters, { label: '', description: '' }])
  }

  const removeChapter = (index: number) => {
    setChapters(chapters.filter((_, i) => i !== index))
  }

  const updateChapter = (index: number, field: 'label' | 'description', value: string) => {
    const newChapters = [...chapters]
    newChapters[index][field] = value
    setChapters(newChapters)
  }

  return (
    <div className="space-y-8">
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">User Insight</h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>User Name:</Label>
              <div className="relative">
                <Input placeholder="John Doe" />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Experience:</Label>
              <div className="relative">
                <Textarea 
                  placeholder="Write about your experience in book writing and how does it affect you, thus defining your characteristics."
                  className="min-h-[150px]"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute right-2 top-2"
                >
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Book Details</h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Author Profile:</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="John Doe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john">John Doe</SelectItem>
                  <SelectItem value="jane">Jane Doe</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>What is the genre of the book:</Label>
              <div className="relative">
                <Input placeholder="Biography" />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Book length:</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Short</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="long">Long</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="generate-images"
                checked={generateImages}
                onCheckedChange={setGenerateImages}
              />
              <Label htmlFor="generate-images">Generate images for chapters</Label>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Book Overview</h2>
          
          <div className="space-y-4">
            {chapters.map((chapter, index) => (
              <div key={index} className="border border-gray-800 rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Chapter {index + 1}</h3>
                  {chapters.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeChapter(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Label:</Label>
                  <Input
                    placeholder="Enter label"
                    value={chapter.label}
                    onChange={(e) => updateChapter(index, 'label', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description:</Label>
                  <Textarea
                    placeholder="Enter description"
                    value={chapter.description}
                    onChange={(e) => updateChapter(index, 'description', e.target.value)}
                  />
                </div>
              </div>
            ))}
            <Button onClick={addChapter} variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" /> Add Chapter
            </Button>
          </div>
        </div>
      )}

      <div className="flex justify-between pt-6">
        {step > 1 && (
          <Button onClick={prevStep} variant="outline">
            Previous
          </Button>
        )}
        {step < 3 ? (
          <Button onClick={nextStep} className="ml-auto">
            Next
          </Button>
        ) : (
          <Button className="ml-auto">
            Submit
          </Button>
        )}
      </div>
    </div>
  )
}

