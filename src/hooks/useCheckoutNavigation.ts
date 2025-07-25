'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'

export const useCheckoutNavigation = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { isLoaded, isSignedIn } = useUser()

  const courseId = searchParams.get('id') ?? ''
  const checkoutStep = parseInt(searchParams.get('step') ?? '1', 10)

  const navigateToStep = useCallback(
    (step: number) => {
      const newStep = Math.min(Math.max(1, step), 3)
      const showSignUp = isSignedIn ? 'true' : 'false'

      router.push(
        `/checkout?id=${courseId}&step=${newStep}&showSignUp=${showSignUp}`,
        {
          scroll: false,
        }
      )
    },
    [router, courseId, isSignedIn]
  )

  useEffect(() => {
    if (isLoaded && !isSignedIn && checkoutStep > 1) {
      navigateToStep(1)
    }
  }, [isLoaded, isSignedIn, checkoutStep, navigateToStep])

  return { checkoutStep, navigateToStep }
}
