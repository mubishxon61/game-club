import { TRoom } from "@/components/common/RoomModalForm/RoomMadalForm";
import { createRoom } from "@/firebase/firebaseRoom";

export const useSetRooms = function(){
    const setRoom = async function (room: TRoom) {
        await createRoom(room)
    }
    return {setRoom}
}