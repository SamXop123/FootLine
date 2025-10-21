import * as React from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'


function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
