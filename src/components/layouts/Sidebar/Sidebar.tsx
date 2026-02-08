import { Gamepad} from "lucide-react"
import Menu from "@/components/common/Menu/Menu";

function Sidebar() {

  return (
    <div className="min-w-72  border-r-2 px-1 py-4">
    <h1 className="font-bold text-2xl flex items-center justify-center gap-1  py-4">
      <Gamepad size={40}/> Game Club
      </h1>
     <Menu/>
    </div>
  )
}

export default Sidebar