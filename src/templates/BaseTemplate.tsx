import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { MdSearch } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

const BaseTemplate = (props: { children: React.ReactNode }) => {
  return (
    <div className="w-full text-base antialiased">
      <header className="sticky top-0 w-full gap-3  border-b border-gray-300 bg-white px-10 font-semibold">
        <div className="flex">
          <div className="py-6 text-xl font-bold	text-primary">GanTip</div>
          <div className="grow" />
          <div className="relative my-auto hidden h-12 w-72 sm:block">
            <input
              className="size-full rounded-full border border-gray-400 px-4"
              placeholder="Search on pantip..."
            />
            <MdSearch className="absolute inset-y-2 right-2 size-8 cursor-pointer rounded-full bg-primary p-2 text-gray-100" />
          </div>
          <div className="grow" />
          <Link
            href="/create"
            className="my-auto h-fit rounded-full  p-3 text-sm transition-all hover:bg-gray-100"
          >
            Create a topic
          </Link>
          <div className="my-auto flex cursor-pointer gap-3 rounded-full border border-gray-300 p-3 hover:drop-shadow-md	">
            <RxHamburgerMenu className="my-auto" />
            <FaUserCircle fontSize={25} className="text-gray-700" />
          </div>
        </div>
        <div className="block py-4 sm:hidden">
          <div className="relative my-auto h-12 w-full">
            <input
              className="size-full rounded-full border border-gray-400 px-4"
              placeholder="Search on pantip..."
            />
            <MdSearch className="absolute inset-y-2 right-2 size-8 cursor-pointer rounded-full bg-primary p-2 text-gray-100" />
          </div>
        </div>
      </header>

      <main>{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © {new Date().getFullYear()} GanTip
        <a className="mx-1" href="/terms">
          · Terms
        </a>
        <a className="mx-1" href="/sitemap">
          · Sitemap
        </a>
        <a className="mx-1" href="/privacy">
          · Privacy
        </a>
      </footer>
    </div>
  );
};

export { BaseTemplate };
