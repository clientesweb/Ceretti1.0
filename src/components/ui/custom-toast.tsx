"use client"

import { Check, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface CustomToastProps {
  title: string
  description?: string
  variant?: "default" | "destructive" | "success"
}

export function CustomToast({ title, description, variant = "default" }: CustomToastProps) {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title,
      description,
      variant: variant === "success" ? "default" : variant,
      className: `${
        variant === "success"
          ? "bg-ceretti-blue text-white border-ceretti-blue"
          : variant === "destructive"
            ? "bg-red-600 text-white border-red-600"
            : "bg-white border-ceretti-blue"
      }`,
      action:
        variant === "success" ? (
          <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
            <Check className="h-4 w-4 text-white" />
          </div>
        ) : variant === "destructive" ? (
          <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
            <AlertCircle className="h-4 w-4 text-white" />
          </div>
        ) : undefined,
    })
  }

  return null
}

export function useCustomToast() {
  const { toast } = useToast()

  const showSuccessToast = (title: string, description?: string) => {
    toast({
      title: title,
      description: description,
      className: "bg-ceretti-blue text-white border-ceretti-blue",
      action: (
        <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
          <Check className="h-4 w-4 text-white" />
        </div>
      ),
    })
  }

  const showErrorToast = (title: string, description?: string) => {
    toast({
      title: title,
      description: description,
      variant: "destructive",
      className: "bg-red-600 text-white border-red-600",
      action: (
        <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
          <AlertCircle className="h-4 w-4 text-white" />
        </div>
      ),
    })
  }

  return { showSuccessToast, showErrorToast }
}

