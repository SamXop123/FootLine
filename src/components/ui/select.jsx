'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'

import { cn } from '@/lib/utils'

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef(function SelectTrigger({ className, children, ...props }, ref) {
  return (
    <SelectPrimitive.Trigger
    </SelectPrimitive.Trigger>
  )
})
const SelectScrollUpButton = React.forwardRef(function SelectScrollUpButton({ className, ...props }, ref) {
  return (
  )
})
const SelectScrollDownButton = React.forwardRef(function SelectScrollDownButton({ className, ...props }, ref) {
  return (
  )
})

const SelectSeparator = React.forwardRef(function SelectSeparator({ className, ...props }, ref) {
  return <SelectPrimitive.Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
})

export {
  Select,
  SelectSeparator,
}
