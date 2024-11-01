import { navigationLinks } from '../lib/data/navigationLinks';
import CustomLink from './customLink';

const Header = () => {
  return (
    <>
      <header className="sticky bg-[#242424] text-gray-600 body-font z-10 w-screen top-0 left-0 border-b-2 border-gray-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {navigationLinks.map((link) => 
              <CustomLink href={`#${link}`} className="mr-5 border-b-4 border-transparent hover:border-pink-500 active:text-pink-500">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </CustomLink>
            )}
          </nav>
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>
    </>
  );
};

export default Header;
