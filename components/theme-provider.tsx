'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'  // Fixed the import path

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={false} 
      forcedTheme="dark" // Force dark theme for Venom aesthetic
      disableTransitionOnChange
      {...props}>
      {children}
    </NextThemesProvider>
  )
}
