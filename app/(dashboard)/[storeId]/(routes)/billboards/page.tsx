import React from 'react'
import BillboardClient from './components/client'
import prismadb from '@/lib/prismadb'
import { Billboard } from '@prisma/client'
import { BillboardColumns } from './[billboardId]/components/columns'
import format from 'date-fns/format'

const BillboardsPage= async ({params}: {params: {storeId: string}}) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedBillBoard: BillboardColumns[] = billboards.map((item) => ({
    id: item.id, 
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy")
  }))   

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BillboardClient data={formattedBillBoard} />
      </div>
    </div>
  )
}

export default BillboardsPage
