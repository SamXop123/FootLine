import * as React from 'react'
import { cn } from '@/lib/utils'

const Card = React.forwardRef(function Card({ className, ...props }, ref) {
  return <div ref={ref} className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)} {...props} />
})

const CardHeader = React.forwardRef(function CardHeader({ className, ...props }, ref) {
  return <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
})

const CardTitle = React.forwardRef(function CardTitle({ className, ...props }, ref) {
  return <div ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
})


