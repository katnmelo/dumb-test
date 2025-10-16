import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"

export function PhotoDialog() {
  return (
    <Dialog>
      {/* Trigger thumbnail */}
      <DialogTrigger asChild>
        <button className="hover:opacity-80 transition">
          <div className="w-[300px] h-[200px] rounded-lg overflow-hidden border">
            <iframe
              src="/images/placeholders/placeholder-menu.pdf"
              className="w-full h-full"
              title="Menu thumbnail"
              loading="lazy"
            />
          </div>
        </button>
      </DialogTrigger>

      {/* Fullscreen dialog */}
      <DialogContent
        className="fixed inset-0 flex items-center justify-center bg-black/90 p-0 border-none focus:outline-none"
      >
        {/* Close (X) button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          aria-label="Close"
          onClick={() => {
            const evt = new MouseEvent("mousedown", { bubbles: true })
            document.body.dispatchEvent(evt) // triggers Dialog's click-outside behavior
          }}
        >
          <X size={28} />
        </button>

        {/* Fullscreen PDF */}
        <iframe
          src="/images/placeholders/placeholder-menu.pdf"
          className="w-full h-full"
          title="Full menu"
          loading="lazy"
        />
      </DialogContent>
    </Dialog>
  )
}
