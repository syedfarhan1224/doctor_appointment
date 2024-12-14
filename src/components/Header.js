import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { Button } from "./ui/button";

  

export default function Header(){
  const session = null;
    return(
        <div className=" bg-gray-100	">
        <div className="flex mx-auto container justify-between p-4 ">
            <h1 className="font-bold font-2xl">LOGO</h1>
            {
              session ?
  <Menubar>
  <MenubarMenu>
    <MenubarTrigger className="border-none bg-gray-100">
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </MenubarTrigger>
    <MenubarContent>
      <Link href={`/profile`}>
      <MenubarItem>Profile</MenubarItem>
      </Link>
      <MenubarSeparator />
      <Link href={`/appointments`}>
      <MenubarItem>My Appointment</MenubarItem>
      </Link>
      <MenubarSeparator />
      <MenubarItem>Logout</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar> 
:
<Link href={`/signin`}>
<Button variant="outline"> Login</Button>
</Link>
            }

        </div>
        </div>
    );
}