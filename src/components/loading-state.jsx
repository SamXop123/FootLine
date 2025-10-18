import { Loader2 } from 'lucide-react'

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center h-[600px]">
      <Loader2 className="h-12 w-12 animate-spin text-green-600" />
      <p className="mt-4 text-gray-600 dark:text-gray-300">Loading lineup builder...</p>
    </div>
  )
}
