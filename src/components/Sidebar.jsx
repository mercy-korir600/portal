import { useState } from "react";
import { LuGlobe } from "react-icons/lu";
import { CiGrid42 , CiCircleQuestion} from "react-icons/ci";
import { HiOutlineChatBubbleLeftEllipsis , HiOutlineBuildingLibrary } from "react-icons/hi2";
import { TbBuildingBank } from "react-icons/tb";
import { RiBookOpenLine,RiFolderOpenLine  } from "react-icons/ri";
import { PiCalendarBlankBold, PiHeadsetFill } from "react-icons/pi";
import { FiClipboard } from "react-icons/fi";
import { GoReport, GoQuestion } from "react-icons/go";
// import { PiHeadstFill } from "react-icons/pi";
import { FaCopyright } from "react-icons/fa";
// import { LuIconName } from "react-icons/lu";


const Sidebar = ({SidebarToggle}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={` ${SidebarToggle?"hidden":"block"} w-64 max-h-screen bg-gradient-to-b from-blue-700 to-blue-700 text-white p-4`}>
     <div className="mt-4 space-y-2">
        <button className="flex items-center gap-2 w-full p-1 text-lg hover:bg-blue-900 rounded">
        <CiGrid42 /> Dashboard
        </button>
      </div>
      <div>
        <button
          onClick={() => setIsOpen(!isSocialsOpen)}
          className="flex items-center justify-between w-full p-1 text-lg hover:bg-blue-900 rounded"
        >
          <span className="flex items-center gap-2">
          <LuGlobe /> Socials
          </span>
          <span>{isOpen ? " " : ">"}</span>
        </button>
        {isOpen && (
          <div className="pl-6 bg-blue-950">
            <p className="py-1 hover:bg-blue-950 cursor-pointer rounded px-2">News</p>
            <p className="py-1 hover:bg-blue-950 cursor-pointer rounded px-2">Events</p>
          </div>
        )}
      </div>

      <div className="mt-4 space-y-2">
        <button className="flex items-center gap-2 w-full p-1 text-lg hover:bg-blue-900 rounded">
        <HiOutlineChatBubbleLeftEllipsis />Message
        </button>

        <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-1 text-lg hover:bg-blue-900 rounded"
        >
          <span className="flex items-center gap-2">
          <TbBuildingBank /> Admission
          </span>
          <span>{isOpen ? "<" : ">"}</span>
        </button>
        {isOpen && (
          <div className="pl-6 bg-blue-950">
            <p className="py-1 hover:bg-blue-950 cursor-pointer rounded px-2">Reporting</p>
            <p className="py-1 hover:bg-blue-950 cursor-pointer rounded px-2">Hostel Booking</p>
            <p className="py-1 hover:bg-blue-950 cursor-pointer rounded px-2">Clearance</p>
            <p className="py-1 hover:bg-blue-950 cursor-pointer rounded px-2">Deferment</p>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-1 text-lg hover:bg-blue-900 rounded"
        >
          <span className="flex items-center gap-2">
          <RiBookOpenLine />Academic
          </span>
          <span>{isOpen ? "<" : ">"}</span>
        </button>
        {isOpen && (
          <div className="pl-6 bg-blue-950">
            <p className="py-1 hover:bg-blue-950 cursor-pointer rounded px-2">Units/Curiculum</p>
            <p className="py-1 hover:bg-blue-950 cursor-pointer rounded px-2">Retakes</p>
            <p className="py-1 hover:bg-blue-950 cursor-pointer rounded px-2">Special Exams</p>
            <p className="py-1 hover:bg-blue-950 cursor-pointer rounded px-2">Supplimentary exam</p>
            <p className="py-1 hover:bg-blue-950 cursor-pointer rounded px-2">Results/Transcript</p>
          </div>
        )}
      </div>

        <button className="flex items-center gap-2 w-full p-1 text-lg hover:bg-blue-900 rounded">
        <RiFolderOpenLine /> Repository
        </button>

        <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-1 text-lg hover:bg-blue-900 rounded"
        >
          <span className="flex items-center gap-2">
          <HiOutlineBuildingLibrary /> Financials
          </span>
          <span>{isOpen ? "<" : ">"}</span>
        </button>
        {isOpen && (
          <div className="pl-6 bg-blue-950">
            <p className="py-1 hover:bg-blue-950 cursor-pointer rounded px-2">Fees</p>
          </div>
        )}
      </div>

        <button className="flex items-center gap-2 w-full p-1 text-lg hover:bg-blue-900 rounded">
        <PiCalendarBlankBold />Timetable
        </button>

        <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-1 text-lg hover:bg-blue-900 rounded"
        >
          <span className="flex items-center gap-2">
          <FiClipboard /> Online Survey
          </span>
          <span>{isOpen ? "<" : ">"}</span>
        </button>
        {isOpen && (
          <div className="pl-6 bg-blue-950">
            <p className="py-1 hover:bg-blue-950 cursor-pointer rounded px-2">Survey</p>
          </div>
        )}
      </div>

        <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-1 text-lg hover:bg-blue-900 rounded"
        >
          <span className="flex items-center gap-2">
          <CiCircleQuestion />Evalutions
          </span>
          <span>{isOpen ? "<" : ">"}</span>
        </button>
        {isOpen && (
          <div className="pl-6 bg-blue-950">
            <p className="py-1 hover:bg-blue-950 cursor-pointer rounded px-2">Course Evalution</p>
          </div>
        )}
      </div>

        <button className="flex items-center gap-2 w-full p-1 text-lg hover:bg-blue-900 rounded">
        <GoReport />Complaints
        </button>
        <button className="flex items-center gap-2 w-full p-1 text-lg hover:bg-blue-900 rounded">
        <GoQuestion />FAQs
        </button>
        <button className="flex items-center gap-2 w-full p-1 text-lg hover:bg-blue-900 rounded">
        <PiHeadsetFill />Virtual Assistant
        </button>
        <div className="flex items-center gap-1  p-1 ">
        <FaCopyright />2025 - ABNO Software International
</div>
      </div>
    </div>
  );
};

export default Sidebar;