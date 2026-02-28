"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {

  return (
    <Sonner
      className="toaster group"
      position="bottom-right"
      theme="dark"
      toastOptions={{
        classNames: {
          toast:
            "group toast font-sans rounded-2xl w-[90vw] sm:w-[350px] mx-auto right-0 sm:right-4 left-0 sm:left-auto lg:right-6 lg:bottom-6 bottom-4 sm:bottom-4 flex p-4 sm:p-5 items-start bg-[#111111] text-white border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden will-change-transform transform-gpu",
          description: "text-white/60 text-[12px] sm:text-[13px] mt-1.5 leading-relaxed font-medium line-clamp-2",
          title: "text-[14px] sm:text-[15px] font-bold tracking-tight text-white mb-0.5",
          actionButton:
            "group-[.toast]:bg-[#BAFF4C] group-[.toast]:text-black font-semibold rounded-lg text-xs px-3 py-1.5 mt-2 transition-transform active:scale-95",
          cancelButton:
            "group-[.toast]:bg-white/10 group-[.toast]:text-white/80 font-medium rounded-lg hover:bg-white/20 transition-colors text-xs px-3 py-1.5 mt-2",
          icon: "text-[#BAFF4C] mt-0.5 mr-3 h-5 w-5 sm:h-6 sm:w-6 shrink-0",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
