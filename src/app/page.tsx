import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const mock_data =
  [
    { "id": 1, "name": "Company A" },
    { "id": 2, "name": "Company B" },
    { "id": 3, "name": "Company C" },
    { "id": 4, "name": "Company D" },
    { "id": 5, "name": "Company E" }
  ];


export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Company List</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">No.</TableHead>
                <TableHead>Company Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mock_data.map((company) => (
                <TableRow key={company.id}>
                  <TableCell className="font-medium">{company.id}</TableCell>
                  <TableCell>{company.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}