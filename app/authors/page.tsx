import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card } from '@/components/ui/card'
import { UserPlus } from 'lucide-react'
import Link from 'next/link'

export default function Authors() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Manage Authors</h1>
        <Link href="/authors/add">
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Author
          </Button>
        </Link>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Author Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Books Published</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>3</TableCell>
              <TableCell>Jan 15, 2024</TableCell>
              <TableCell>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                  Active
                </span>
              </TableCell>
              <TableCell className="space-x-2">
                <Button variant="ghost" size="sm">Edit</Button>
                <Button variant="ghost" size="sm" className="text-red-600">Remove</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

