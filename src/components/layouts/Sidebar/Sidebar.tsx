import { Gamepad} from "lucide-react"
import Menu from "@/components/common/Menu/Menu";

function Sidebar() {

  return (
    <div className="w-full max-w-72 border-r px-1">
    <h1 className="font-bold text-2xl flex items-center justify-center gap-1  py-4">
      <Gamepad size={40}/> Game Club
      </h1>
     <Menu/>
    </div>
  )
}

export default Sidebar