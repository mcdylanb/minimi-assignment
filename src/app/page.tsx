"use client"
import { useEffect, useState } from 'react';
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

export default function Home() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    console.log("in this fucking hook")
    const fetchCompanies = async () => {
      console.log("now using fetch companies")
      const response = await fetch('/api/companies');
      console.log("now trying to fetch")
      console.log(response)
      const data = await response.json();
      console.log(data)
      setCompanies(data);
    };

    fetchCompanies();
  }, []);

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
                <TableHead>Employee Count</TableHead>
                <TableHead>Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companies.map((company) => (
                <TableRow key={company.id}>
                  <TableCell className="font-medium">{company.id}</TableCell>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>{company.employees}</TableCell>
                  <TableCell>{company.revenue}</TableCell>
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