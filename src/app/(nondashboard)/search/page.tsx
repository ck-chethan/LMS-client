'use client'
import { useGetCoursesQuery } from '@/state/api'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'

const Search = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const { data: courses, isLoading, isError } = useGetCoursesQuery({})
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (courses && id) {
      const course = courses.find((course) => course.courseId === id)
      setSelectedCourse(course || courses[0])
    }
  }, [courses, id])

  return <div>Search</div>
}

export default Search
