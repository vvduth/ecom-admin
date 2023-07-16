"use client"

import { cn } from '@/lib/utils'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const MainNav = ({className, ...props}: React.HTMLAttributes<HTMLElement>) => {

    const pathname = usePathname() ; 
    const params = useParams() ; 
    const routes = [{
        href: `/${params.storeId}`
    }]
  return (
    <nav
     className={cn("flex items-center space-x-4 lg:space-x-6", className)}
    >

    </nav>)
}

export default MainNav
