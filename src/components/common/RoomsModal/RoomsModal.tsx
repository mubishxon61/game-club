"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"

import RoomMadalForm from "../RoomModalForm/RoomMadalForm"
import { Plus } from "lucide-react"
import { useState } from "react"

export function RoomsModal() {
      const [showModal, setShowModal] = useState(false)
      return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogTrigger className="ml-auto" asChild>
          <Button>
            <Plus/>
            <span>Xona qo'shish</span>
          </Button>
        </DialogTrigger>
        {showModal &&   <RoomMadalForm setShowModal={setShowModal}/>}
    </Dialog>
  )
}
