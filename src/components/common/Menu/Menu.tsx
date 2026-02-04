"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChartLine, DoorOpen, LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";


interface MenuItem {
  text: string;
  href: string;
  icon?: LucideIcon;
}
const menu: MenuItem[] = [
  {
    text: "Asosiy",
    href: "/dashboard",
    icon: ChartLine
  },
    {
    text: "Xonalar",
    href: "/dashboard/rooms",
    icon: DoorOpen
  }
]

function Menu() {
    const pathname = usePathname()
  return (
      <nav>
        <ul className="flex flex-col gap-2">
          {menu.map(menuItem => {
            let Icon = menuItem.icon;
            return <li key={menuItem.href}>
              <Link href={menuItem.href} >
                  <Button className="w-full justify-start" variant={pathname == menuItem.href ? "default" : "outline"}>
                    {Icon && <Icon/>}
                    <span>{menuItem.text}</span>
                  </Button>
              </Link>
            </li>
          })}
        </ul>
      </nav>
  )
}

export default Menu