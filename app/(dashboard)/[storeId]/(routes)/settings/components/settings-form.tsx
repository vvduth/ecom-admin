"use client"
import Heading from '@/components/ui/heading'
import { Store } from '@prisma/client'
import React from 'react'
interface SettingsFormProps {
    initialData: Store
}
const SettingsForm:React.FC<SettingsFormProps> = ({initialData}) => {
  return (
    <div className='flex items-center justify-between'>
      <Heading 
        title="Settings"
        description="Manage your store"
      />
    </div>
  )
}

export default SettingsForm
