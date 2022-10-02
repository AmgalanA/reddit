import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  AiOutlinePlus,
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineBell,
} from "react-icons/ai";
import { BsChevronDown, BsChatDots, BsGlobe } from "react-icons/bs";
import {
  HiOutlineSparkles,
  HiOutlineSpeakerphone,
  HiOutlineVideoCamera,
} from "react-icons/hi";

const Header: FC = () => {
  const { data: session } = useSession();

  return (
    <div className=" sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Link href={`/`}>
          <Image
            objectFit="contain"
            src="https://links.papareact.com/fqy"
            layout="fill"
          />
        </Link>
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <AiOutlineHome className="h-5 w-5" />
        <p className="ml-2 flex-1 hidden lg:inline">Home</p>
        <BsChevronDown className="h-5 w-5" />
      </div>

      <form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
        <AiOutlineSearch className="h-6 w-6 text-gray-400" />

        <input
          type="text"
          placeholder="Search Reddit"
          className="flex-1 bg-transparent outline-none"
        />

        <button hidden type="submit" />
      </form>

      <div className=" text-gray-500 items-center space-x-2 mx-5 hidden lg:inline-flex">
        <HiOutlineSparkles className="icon" />
        <BsGlobe className="icon" />
        <HiOutlineVideoCamera className="icon" />

        <hr className="h-10 border-gray-100 border" />

        <BsChatDots className="icon" />
        <AiOutlineBell className="icon" />
        <AiOutlinePlus className="icon" />
        <HiOutlineSpeakerphone className="icon" />
      </div>

      <div className="ml-5 flex items-center lg:hidden">
        <AiOutlineMenu className="icon" />
      </div>

      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              layout="fill"
              src="https://links.papareact.com/23l"
              alt=""
            />
          </div>

          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>

          <BsChevronDown className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              layout="fill"
              src="https://links.papareact.com/23l"
              alt=""
            />
          </div>

          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  );
};

export default Header;
