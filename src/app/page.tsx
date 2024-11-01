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

const ITEMS_PER_PAGE = 5;

export default function Home() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchCompanies = async (page) => {
    const response = await fetch(`/api/companies?page=${page}&limit=${ITEMS_PER_PAGE}`);
    const data = await response.json();
    setCompanies(data.data);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchCompanies(currentPage);
  }, [currentPage]);

  const handleCheckboxChange = (id) => {
    const updatedSelection = new Set(selectedCompanies);
    if (updatedSelection.has(id)) {
      updatedSelection.delete(id);
    } else {
      updatedSelection.add(id);
    }
    setSelectedCompanies(updatedSelection);
  };

  const handleDelete = () => {
    const updatedCompanies = companies.filter(company => !selectedCompanies.has(company.id));
    setCompanies(updatedCompanies);
    setSelectedCompanies(new Set());
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Company List</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Select</TableHead>
                  <TableHead className="w-[100px]">No.</TableHead>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companies.map((company) => (
                  <TableRow key={company.id}>
                    <TableCell>
                      <input 
                        type="checkbox" 
                        checked={selectedCompanies.has(company.id)} 
                        onChange={() => handleCheckboxChange(company.id)} 
                      />
                    </TableCell>
                    <TableCell className="font-medium">{company.id}</TableCell>
                    <TableCell>{company.name}</TableCell>
                    <TableCell>{company.address}</TableCell>
                    <TableCell>{company.phone}</TableCell>
                    <TableCell>{company.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row sm:justify-between">
          <div className="flex space-x-2">
            <button 
              onClick={handlePreviousPage} 
              disabled={currentPage === 1} 
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
            <button 
              onClick={handleNextPage} 
              disabled={currentPage === totalPages} 
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
          <button 
            onClick={handleDelete} 
            className="bg-red-500 text-white px-4 py-2 rounded mt-2 sm:mt-0"
          >
            Delete Selected
          </button>
        </CardFooter>
      </Card>
    </div>
  )
}