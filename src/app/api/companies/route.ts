import { NextResponse } from 'next/server';

const mock_data = [
  { "id": 1, "name": "Company A", "address": "123 Main St, City A", "phone": "123-456-7890", "email": "contact@companya.com", "website": "https://www.companya.com", "industry": "Technology", "founded": 2001, "employees": 150, "revenue": "$1M" },
  { "id": 2, "name": "Company B", "address": "456 Elm St, City B", "phone": "234-567-8901", "email": "info@companyb.com", "website": "https://www.companyb.com", "industry": "Finance", "founded": 1998, "employees": 200, "revenue": "$2M" },
  { "id": 3, "name": "Company C", "address": "789 Oak St, City C", "phone": "345-678-9012", "email": "support@companyc.com", "website": "https://www.companyc.com", "industry": "Healthcare", "founded": 2010, "employees": 50, "revenue": "$500K" },
  { "id": 4, "name": "Company D", "address": "321 Pine St, City D", "phone": "456-789-0123", "email": "contact@companyd.com", "website": "https://www.companyd.com", "industry": "Retail", "founded": 2015, "employees": 75, "revenue": "$750K" },
  { "id": 5, "name": "Company E", "address": "654 Maple St, City E", "phone": "567-890-1234", "email": "info@companye.com", "website": "https://www.companye.com", "industry": "Education", "founded": 2005, "employees": 100, "revenue": "$1.5M" },
  { "id": 6, "name": "Company F", "address": "987 Cedar St, City F", "phone": "678-901-2345", "email": "contact@companyf.com", "website": "https://www.companyf.com", "industry": "Technology", "founded": 2002, "employees": 120, "revenue": "$1.2M" },
  { "id": 7, "name": "Company G", "address": "135 Birch St, City G", "phone": "789-012-3456", "email": "info@companyg.com", "website": "https://www.companyg.com", "industry": "Finance", "founded": 1995, "employees": 300, "revenue": "$5M" },
  { "id": 8, "name": "Company H", "address": "246 Spruce St, City H", "phone": "890-123-4567", "email": "support@companyh.com", "website": "https://www.companyh.com", "industry": "Healthcare", "founded": 2012, "employees": 80, "revenue": "$800K" },
  { "id": 9, "name": "Company I", "address": "357 Fir St, City I", "phone": "901-234-5678", "email": "contact@companyi.com", "website": "https://www.companyi.com", "industry": "Retail", "founded": 2018, "employees": 60, "revenue": "$600K" },
  { "id": 10, "name": "Company J", "address": "468 Willow St, City J", "phone": "012-345-6789", "email": "info@companyj.com", "website": "https://www.companyj.com", "industry": "Education", "founded": 2008, "employees": 90, "revenue": "$900K" },
  { "id": 11, "name": "Company K", "address": "579 Oak St, City K", "phone": "123-456-7891", "email": "contact@companyk.com", "website": "https://www.companyk.com", "industry": "Technology", "founded": 2003, "employees": 110, "revenue": "$1.1M" },
  { "id": 12, "name": "Company L", "address": "680 Maple St, City L", "phone": "234-567-8902", "email": "info@companyl.com", "website": "https://www.companyl.com", "industry": "Finance", "founded": 1999, "employees": 250, "revenue": "$3M" },
  { "id": 13, "name": "Company M", "address": "791 Pine St, City M", "phone": "345-678-9013", "email": "support@companym.com", "website": "https://www.companym.com", "industry": "Healthcare", "founded": 2011, "employees": 70, "revenue": "$700K" },
  { "id": 14, "name": "Company N", "address": "802 Cedar St, City N", "phone": "456-789-0124", "email": "contact@companyn.com", "website": "https://www.companyn.com", "industry": "Retail", "founded": 2016, "employees": 85, "revenue": "$850K" },
  { "id": 15, "name": "Company O", "address": "913 Birch St, City O", "phone": "567-890-1235", "email": "info@companyo.com", "website": "https://www.companyo.com", "industry": "Education", "founded": 2006, "employees": 95, "revenue": "$950K" },
  { "id": 16, "name": "Company P", "address": "024 Fir St, City P", "phone": "678-901-2346", "email": "contact@companyp.com", "website": "https://www.companyp.com", "industry": "Technology", "founded": 2004, "employees": 130, "revenue": "$1.3M" },
  { "id": 17, "name": "Company Q", "address": "135 Spruce St, City Q", "phone": "789-012-3457", "email": "info@companyq.com", "website": "https://www.companyq.com", "industry": "Finance", "founded": 1996, "employees": 320, "revenue": "$6M" },
  { "id": 18, "name": "Company R", "address": "246 Cedar St, City R", "phone": "890-123-4568", "email": "support@companyr.com", "website": "https://www.companyr.com", "industry": "Healthcare", "founded": 2013, "employees": 75, "revenue": "$750K" },
  { "id": 19, "name": "Company S", "address": "357 Oak St, City S", "phone": "901-234-5679", "email": "contact@companys.com", "website": "https://www.companys.com", "industry": "Retail", "founded": 2019, "employees": 65, "revenue": "$650K" },
  { "id": 20, "name": "Company T", "address": "468 Maple St, City T", "phone": "012-345-6780", "email": "info@companyt.com", "website": "https://www.companyt.com", "industry": "Education", "founded": 2009, "employees": 85, "revenue": "$850K" },
  { "id": 21, "name": "Company U", "address": "579 Birch St, City U", "phone": "123-456-7892", "email": "contact@companyu.com", "website": "https://www.companyu.com", "industry": "Technology", "founded": 2005, "employees": 140, "revenue": "$1.4M" },
  { "id": 22, "name": "Company V", "address": "680 Fir St, City V", "phone": "234-567-8903", "email": "info@companyv.com", "website": "https://www.companyv.com", "industry": "Finance", "founded": 2000, "employees": 280, "revenue": "$4M" },
  { "id": 23, "name": "Company W", "address": "791 Spruce St, City W", "phone": "345-678-9014", "email": "support@companyw.com", "website": "https://www.companyw.com", "industry": "Healthcare", "founded": 2014, "employees": 90, "revenue": "$900K" },
  { "id": 24, "name": "Company X", "address": "802 Cedar St, City X", "phone": "456-789-0125", "email": "contact@companyx.com", "website": "https://www.companyx.com", "industry": "Retail", "founded": 2017, "employees": 70, "revenue": "$700K" },
  { "id": 25, "name": "Company Y", "address": "913 Oak St, City Y", "phone": "567-890-1236", "email": "info@companyy.com", "website": "https://www.companyy.com", "industry": "Education", "founded": 2010, "employees": 100, "revenue": "$1M" },
  { "id": 26, "name": "Company Z", "address": "024 Maple St, City Z", "phone": "678-901-2347", "email": "contact@companyz.com", "website": "https://www.companyz.com", "industry": "Technology", "founded": 2008, "employees": 160, "revenue": "$1.6M" },
  { "id": 27, "name": "Company AA", "address": "135 Birch St, City AA", "phone": "789-012-3458", "email": "info@companyaa.com", "website": "https://www.companyaa.com", "industry": "Finance", "founded": 1997, "employees": 350, "revenue": "$7M" },
  { "id": 28, "name": "Company AB", "address": "246 Fir St, City AB", "phone": "890-123-4569", "email": "support@companyab.com", "website": "https://www.companyab.com", "industry": "Healthcare", "founded": 2015, "employees": 80, "revenue": "$800K" },
  { "id": 29, "name": "Company AC", "address": "357 Spruce St, City AC", "phone": "901-234-5670", "email": "contact@companyac.com", "website": "https://www.companyac.com", "industry": "Retail", "founded": 2019, "employees": 60, "revenue": "$600K" },
  { "id": 30, "name": "Company AD", "address": "468 Cedar St, City AD", "phone": "012-345-6781", "email": "info@companyad.com", "website": "https://www.companyad.com", "industry": "Education", "founded": 2020, "employees": 50, "revenue": "$500K" }
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 5;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = mock_data.slice(startIndex, endIndex);

  return NextResponse.json({
    data: paginatedData,
    total: mock_data.length,
    page,
    totalPages: Math.ceil(mock_data.length / limit),
  });
} 