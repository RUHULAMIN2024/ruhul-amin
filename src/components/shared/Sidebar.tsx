import { MessageSquareCode } from "lucide-react";
import Link from "next/link";
import { FaHome, FaBlog, FaProjectDiagram } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-slate-100 min-h-screen p-4 rounded-xl">
      <ul className="space-y-1">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaHome className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blogs"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaBlog className="h-5 w-5" />
            <span>Blogs</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/projects"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaProjectDiagram className="h-5 w-5" />
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/messages"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <MessageSquareCode className="h-5 w-5" />
            <span>Messages</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
