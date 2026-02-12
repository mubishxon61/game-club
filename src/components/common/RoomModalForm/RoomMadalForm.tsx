"use client"
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"



import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import InputError from "../InputError/InputError"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { Dispatch, SetStateAction } from "react"
import { useSetRooms } from "@/hooks/useSetRooms"


const roomSchema = z.object({
    name: z.string().min(2, "Kamida ikkita harf bo'lishi kerak!").max(20, "Xona nomi 20 harfdan kam bo'lsin!"),
    price: z.number("Raqam bo'lishi shart!").min(5000, "Kamida 5000 so'm bo'lishi kerak!").max(100000, "Narx xato kiritdingiz!")
})
export  type TRoom = z.infer<typeof roomSchema>
type Props = {
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

function RoomMadalForm({setShowModal} : Props) {
  const { setRoom } = useSetRooms()
        const {register, handleSubmit,reset, formState: {errors}}= useForm<TRoom>({
        resolver: zodResolver(roomSchema)
    })
    const onSubmit = (room: TRoom) => {
    setRoom(room)
    reset()
    setShowModal(false)
    }



  return (
        <DialogContent className="sm:max-w-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>Yangi xona yaratish</DialogTitle>
            <DialogDescription>
              Ma'lumotlarni e'tibor bilan kiriting!
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field className="gap-1">
              <Label htmlFor="name-1">Xonaning nomi</Label>
              <Input id="name-1"  placeholder="Masalan: 1-xona" {...register("name")}/>
              {errors.name && <InputError message={errors.name.message}/>}
            </Field>
            <Field className="gap-1">
              <Label htmlFor="username-1">Xonaning narxi</Label>
              <Input
                type="number"
               id="username-1"
               placeholder="Masalan: 10000"
               {...register("price", { valueAsNumber: true })}
          />
         {errors.price && <InputError message={errors.price.message}/>}
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Bekor qilish</Button>
            </DialogClose>
            <Button type="submit">Qo'shish</Button>
          </DialogFooter>
      </form>
        </DialogContent>
  )
}

export default RoomMadalForm