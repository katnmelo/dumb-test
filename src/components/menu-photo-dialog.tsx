import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"

interface PhotoDialogProps {
  menuUrl: string;
  restaurantName: string;
}

export function PhotoDialog({ menuUrl, restaurantName }: PhotoDialogProps) {
  return (
    <Dialog>
      {/* Menu Button */}
      <DialogTrigger asChild>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full">
          View Menu
        </button>
      </DialogTrigger>

      {/* Fullscreen dialog */}
      <DialogContent
        className="fixed inset-0 flex items-center justify-center bg-black/90 p-0 border-none focus:outline-none"
      >
        {/* Close (X) button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
          aria-label="Close"
          onClick={() => {
            const evt = new MouseEvent("mousedown", { bubbles: true })
            document.body.dispatchEvent(evt) // triggers Dialog's click-outside behavior
          }}
        >
          <X size={24} />
        </button>

        {/* Fullscreen PDF */}
        <iframe
          src={menuUrl}
          className="w-full h-full"
          title={`${restaurantName} Menu`}
          loading="lazy"
        />
      </DialogContent>
    </Dialog>
  )
}
