"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Spinner } from "@/components/ui/spinner"
import { useGetRooms } from "@/hooks/useGetRooms"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { RoomsCommand } from "../RoomsCommand/RoomsCommand"

function RoomsList() {
  const [showModal, setShowModal] = useState(false)
  const [roomId, setRoomId] = useState("")
  const { rooms = [], loading } = useGetRooms()
  
  if (!rooms.length) {
    return (
      <p className="text-xl font-bold text-center text-gray-300">
        Hozircha xonalar mavjud emas!
      </p>
    )
  }
  if(loading){
    return (
      <div className="flex items-center justify-center h-full">
        <Spinner />
      </div>
    )
  }

   const handleClick = (roomId: string)=>{
    setShowModal(true)
    setRoomId(roomId)
   }

  return (
    <div>
      <RoomsCommand roomId = {roomId} open={showModal} setOpen={setShowModal}/>
   <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nomi</TableHead>
          <TableHead className="text-center">Statusi</TableHead>
          <TableHead className="text-end">Narxi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rooms.map((room) => (
          <TableRow onClick={()=>handleClick(room.id)} key={room.name} className="select-none cursor-pointer">
            <TableCell className="font-medium">{room.name}</TableCell>
            <TableCell className="text-center">{room.isBusy ? <Badge variant={"error"}>Band</Badge>: <Badge variant={"success"}>Bo'sh</Badge>}</TableCell>
            <TableCell className="text-end">{room.price} so'm</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
    </div>
  )
}

export default RoomsList