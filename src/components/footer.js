import Image from "next/image";
import { ImPhone } from "react-icons/im";
import { IoMdHome } from "react-icons/io";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <main>
        <div className="py-20 px-10">
          <div className="flex">
            <div className="w-1/4 border-r-[1px] border-[#00a651] pr-10 mr-10">
              <Image
                src="/images/logo.png"
                alt="Landscape picture"
                width={200}
                height={57}
              />
              <div className="pt-10 pb-3">
                <button
                  type="button"
                  className="w-56 bg-[#00a651] rounded-full px-10 py-2 ml-5"
                >
                  Become a Member
                </button>
              </div>
              <button
                type="button"
                className="w-56 border rounded-full px-10 py-2 ml-5"
              >
                Login
              </button>
            </div>
            <div className="w-2/4 flex pr-10">
              <ul className="pr-10">
                <li className="text-[#00a651]">Dog Memberships</li>
                <li className="leading-6 pt-2">Puppy</li>
                <li className="leading-6">Adult</li>
                <li className="leading-6">Senior</li>
              </ul>
              <ul className="pr-10">
                <li className="text-[#00a651]">Cat Memberships</li>
                <li className="leading-6 pt-2">Kitten</li>
                <li className="leading-6">Adult</li>
                <li className="leading-6">Senior</li>
              </ul>
              <ul>
                <li className="text-[#00a651]">About</li>
                <li className="leading-6 pt-2">About Healthy Pets Plus</li>
                <li className="leading-6 pt-2">FAQs</li>
                <li className="leading-6 pt-2">Terms & Conditions</li>
                <li className="leading-6 pt-2">Contact Us</li>
              </ul>
            </div>
            <div className="w-1/4">
              <h6 className="text-[#00a651]">Our team are here to help</h6>
              <p>
                Contact our friendly support team who can assist with all your
                Healthy Pet Plus queries.
              </p>
              <div className="flex items-center pt-4">
                <ImPhone className="text-[#00a651] mr-2" />
                Call us &nbsp; <u>1800738 775</u>
              </div>
              <div className="flex items-center pb-4">
                <IoMdHome className="text-lg text-[#00a651] mr-2" />
                In Store Find a store
              </div>
              <ul className="flex">
                <li className="rounded-full border p-1">
                  <BiLogoFacebook />
                </li>
                <li className="rounded-full border p-1 ml-2 mr-2">
                  <AiFillInstagram />
                </li>
                <li className="rounded-full border p-1">
                  <AiFillYoutube />
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-20 text-[12px] text-[#b3b3b3]">
            <span className="pr-3">
              © 2023 Greencross Vets. All rights reserved
            </span>{" "}
            |<u className="pl-3">Terms and Confitions</u>
            <u>Privacy Notice</u>
            <u className="pl-3 pr-3">Cookie Policy</u>
            <u>Privacy Policy</u>
          </div>
        </div>
      </main>
    </>
  );
}
