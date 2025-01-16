import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="hover:underline cursor-pointer text-blue">
              Find an Applestore{" "}
            </span>
            or{" "}
            <span className="hover:underline cursor-pointer text-blue">
              other retailer
            </span>{" "}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call +201099203081
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2025 Apple Inc. All rights reserved
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p
                key={link}
                className="font-semibold hover:underline cursor-pointer text-blue text-xs"
              >
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2 text-gray">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
