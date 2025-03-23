import { IoMdClose } from "react-icons/io";

const Toast = () => {
  return (
    <div className="flex justify-between items-center gap-6 px-8 py-4 w-[90%] md:w-[80%] mx-auto my-1 rounded-full bg-blue-900 text-white text-sm">
    <div className="flex items-center ">
    Slack is your digital HQ. Meet the new features keeping teams connected in a work-from-anywhere world.  Let's go
    </div>
    <IoMdClose className=" w-6 h-6 hover:cursor-pointer" />
  </div>
  )
}

export default Toast