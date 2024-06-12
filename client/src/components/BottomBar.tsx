import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const BottomBar = () => {
  return (
    <Footer container className="bg-gray-800 text-gray-100">
      <div className="w-full">
        <div className="flex justify-between items-center flex-wrap py-6">
          <Footer.Brand
            href="https://flowbite.com"
            src="/popshake.png"
            alt="popshake Logo"
          />
          <div className="flex space-x-8">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="text-gray-300 hover:text-white"
                >
                  Flowbite
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-gray-300 hover:text-white"
                >
                  Tailwind
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Socials" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="text-gray-300 hover:text-white"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-gray-300 hover:text-white"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  className="text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="#"
                  className="text-gray-300 hover:text-white"
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="border-gray-700" />
        <div className="flex justify-between items-center flex-wrap py-6">
          <Footer.Copyright
            href="#"
            by="Popshake™"
            year={2024}
            className="text-gray-400"
          />
          <div className="flex space-x-10 mt-4 sm:mt-0">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="text-gray-400 hover:text-white text-2xl"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="text-gray-400 hover:text-white text-2xl"
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className="text-gray-400 hover:text-white text-2xl"
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
              className="text-gray-400 hover:text-white text-2xl"
            />
            <Footer.Icon
              href="#"
              icon={BsDribbble}
              className="text-gray-400 hover:text-white text-2xl"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default BottomBar;
