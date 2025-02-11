"use client";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import Container from "../Container";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ sesion }: { sesion: UserProps | null }) => {
  const pathname = usePathname();
  const navlink = (
    <>
      <li
        className={
          pathname === "/"
            ? "underline py-2 md:px-0 px-4 text-blue-500"
            : "py-2 md:px-0 px-4 hover:underline cursor-pointer"
        }
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={
          pathname === "/projects"
            ? "underline py-2 md:px-0 px-4 text-blue-500"
            : "py-2 md:px-0 px-4 hover:underline cursor-pointer"
        }
      >
        <Link href="/projects">Projects</Link>
      </li>
      <li
        className={
          pathname === "/blogs"
            ? "underline py-2 md:px-0 px-4 text-blue-500"
            : "py-2 md:px-0 px-4 hover:underline cursor-pointer"
        }
      >
        <Link href="/blogs">Blogs</Link>
      </li>
      <li
        className={
          pathname === "/contact"
            ? "underline py-2 md:px-0 px-4 text-blue-500"
            : "py-2 md:px-0 px-4 hover:underline cursor-pointer"
        }
      >
        <Link href="/contact">Contact</Link>
      </li>
      <li
        className={
          pathname === "/dashboard"
            ? "underline py-2 md:px-0 px-4 text-blue-500"
            : "py-2 md:px-0 px-4 hover:underline cursor-pointer"
        }
      >
        <Link href="/dashboard">Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className="  bg-white border-b py-4">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="absolute mt-3 z-10 p-2 shadow-md bg-white rounded-md w-52"
              >
                {navlink}
              </ul>
            </div>
            <Link
              href="/"
              className="ml-4 text-xl font-semibold text-gray-800 hover:text-gray-600"
            >
              RuhulAmin
            </Link>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex space-x-6 text-gray-800">{navlink}</ul>
          </div>

          <div className="flex gap-2 items-center">
            {sesion?.user ? (
              <button
                onClick={() => signOut()}
                className="border border-red-500 text-red-500 px-5 py-1 rounded-sm hover:bg-red-500 hover:text-black transition duration-200"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="border border-blue-500 text-blue-500 px-5 py-1 rounded-sm hover:bg-blue-500 hover:text-black transition duration-200"
              >
                Login
              </Link>
            )}

            <ModeToggle />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
