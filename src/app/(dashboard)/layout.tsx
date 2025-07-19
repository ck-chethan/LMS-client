'use client'
import Loading from '@/components/Loading'
import { useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const [courseId, setCourseId] = useState<string | null>(null)
  const { user, isLoaded } = useUser()

  // handle use effect isCoursePage

  if (!isLoaded) {
    return <Loading />
  }
  if (!user) {
    return <div className="">Please sign in to access the dashboard.</div>
  }

  return (
    <div className="dashboard">
      <main className="dashboard__body">{children}</main>
    </div>
  )
}

export default DashboardLayout
