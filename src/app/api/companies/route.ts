import { NextResponse } from 'next/server';

const mock_data = [
  { 
    "id": 1, 
    "name": "Company A", 
    "address": "123 Main St, City A", 
    "phone": "123-456-7890", 
    "email": "contact@companya.com", 
    "website": "https://www.companya.com", 
    "industry": "Technology", 
    "founded": 2001, 
    "employees": 150, 
    "revenue": "$1M" 
  },
  { 
    "id": 2, 
    "name": "Company B", 
    "address": "456 Elm St, City B", 
    "phone": "234-567-8901", 
    "email": "info@companyb.com", 
    "website": "https://www.companyb.com", 
    "industry": "Finance", 
    "founded": 1998, 
    "employees": 200, 
    "revenue": "$2M" 
  },
  { 
    "id": 3, 
    "name": "Company C", 
    "address": "789 Oak St, City C", 
    "phone": "345-678-9012", 
    "email": "support@companyc.com", 
    "website": "https://www.companyc.com", 
    "industry": "Healthcare", 
    "founded": 2010, 
    "employees": 50, 
    "revenue": "$500K" 
  },
  { 
    "id": 4, 
    "name": "Company D", 
    "address": "321 Pine St, City D", 
    "phone": "456-789-0123", 
    "email": "contact@companyd.com", 
    "website": "https://www.companyd.com", 
    "industry": "Retail", 
    "founded": 2015, 
    "employees": 75, 
    "revenue": "$750K" 
  },
  { 
    "id": 5, 
    "name": "Company E", 
    "address": "654 Maple St, City E", 
    "phone": "567-890-1234", 
    "email": "info@companye.com", 
    "website": "https://www.companye.com", 
    "industry": "Education", 
    "founded": 2005, 
    "employees": 100, 
    "revenue": "$1.5M" 
  }
];

export async function GET() {
  return NextResponse.json(mock_data);
} 