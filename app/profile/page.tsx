'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { BookOpen, Users, Sparkles, Pen, Mail, Phone, MapPin, Calendar, CreditCard, Download } from 'lucide-react'
import Image from 'next/image'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('books')

  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    joinDate: 'January 2023',
    avatar: '/placeholder.svg',
    books: [
      { id: 1, title: 'The AI Revolution', cover: '/placeholder.svg', status: 'Published' },
      { id: 2, title: 'Digital Dreams', cover: '/placeholder.svg', status: 'Draft' },
    ],
    authors: [
      { id: 1, name: 'John Smith', avatar: '/placeholder.svg', books: 3 },
      { id: 2, name: 'Emily Johnson', avatar: '/placeholder.svg', books: 2 },
    ],
    billingHistory: [
      { id: 1, date: 'May 1, 2023', description: 'Monthly Subscription', amount: '$29.99' },
      { id: 2, date: 'Apr 1, 2023', description: 'Monthly Subscription', amount: '$29.99' },
    ]
  }

  return (
    <div className="space-y-6">
      <Card className="bg-[#1A1B2E] border-gray-800">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="space-y-2 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold">{user.name}</h1>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-400">
                <div className="flex items-center justify-center sm:justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  {user.email}
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  {user.phone}
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <MapPin className="w-4 h-4 mr-2" />
                  {user.location}
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Joined {user.joinDate}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#1A1B2E] border-gray-800">
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="books">Books</TabsTrigger>
              <TabsTrigger value="authors">Authors</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            <TabsContent value="books" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {user.books.map((book) => (
                  <Card key={book.id} className="bg-[#0A0B14] border-gray-800">
                    <CardContent className="p-4">
                      <div className="aspect-[2/3] relative mb-4">
                        <Image
                          src={book.cover}
                          alt={book.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>
                      <h3 className="font-semibold mb-1">{book.title}</h3>
                      <p className="text-sm text-gray-400">{book.status}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="authors" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {user.authors.map((author) => (
                  <Card key={author.id} className="bg-[#0A0B14] border-gray-800">
                    <CardContent className="p-4 flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={author.avatar} alt={author.name} />
                        <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{author.name}</h3>
                        <p className="text-sm text-gray-400">{author.books} books</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="settings" className="mt-6">
              <Card className="bg-[#0A0B14] border-gray-800">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue={user.name} className="bg-[#1A1B2E] border-gray-800" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={user.email} className="bg-[#1A1B2E] border-gray-800" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" defaultValue={user.phone} className="bg-[#1A1B2E] border-gray-800" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue={user.location} className="bg-[#1A1B2E] border-gray-800" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="notifications" />
                      <Label htmlFor="notifications">Receive email notifications</Label>
                    </div>
                    <Button type="submit">Save Changes</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="billing" className="mt-6">
              <Card className="bg-[#0A0B14] border-gray-800">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Current Plan</h3>
                      <p className="text-gray-400">Pro Plan - $29.99/month</p>
                      <Button className="mt-2">Upgrade Plan</Button>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                      <div className="flex items-center space-x-2">
                        <CreditCard className="w-6 h-6" />
                        <span>Visa ending in 1234</span>
                      </div>
                      <Button variant="outline" className="mt-2">Update Payment Method</Button>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Billing History</h3>
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-gray-400">
                            <th className="pb-2">Date</th>
                            <th className="pb-2">Description</th>
                            <th className="pb-2">Amount</th>
                            <th className="pb-2">Invoice</th>
                          </tr>
                        </thead>
                        <tbody>
                          {user.billingHistory.map((item) => (
                            <tr key={item.id}>
                              <td className="py-2">{item.date}</td>
                              <td className="py-2">{item.description}</td>
                              <td className="py-2">{item.amount}</td>
                              <td className="py-2">
                                <Button variant="ghost" size="sm">
                                  <Download className="w-4 h-4 mr-2" />
                                  Download
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

