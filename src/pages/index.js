import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoMdAlert } from "react-icons/io";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Fragment } from "react";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });
const navigation = [
  { name: "About Healthy Pets Plua", href: "#", current: true },
  { name: "Memberships", href: "#", current: false },
  { name: "FAQs", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <main>
      {/* header begin here */}
      <div className="pt-5 px-10">
        <div className="border-b-[1px] pb-2 border-[#334761] top-bar justify-between flex items-center">
          <ul className="flex">
            <li>Find a Vet</li>
            <li className="px-4">WebVet</li>
            <li>Book an Appointment</li>
          </ul>
          <div className="flex items-center">
            <span className="pr-2">Call Us</span>
            <h6 className="text-2xl">1800 738 775</h6>
          </div>
        </div>
        <header className="py-3">
          <Disclosure as="nav">
            {({ open }) => (
              <>
                <div>
                  <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      {/* Mobile menu button*/}
                      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex flex-shrink-0 items-center">
                        <Image
                          src="/images/logo.png"
                          alt="Landscape picture"
                          width={239}
                          height={57}
                        />
                      </div>
                      <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current ? "text-white" : "text-gray-300",
                                "rounded-md px-1 py-2 text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      Login In
                      <span>
                        <button
                          type="button"
                          className="bg-[#00a651] rounded-full px-10 py-2 ml-5"
                        >
                          Become a Member
                        </button>
                      </span>
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Your Profile
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Settings
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </header>
      </div>
      {/* header end here */}
      <div className="bg-[#00a651] text-center py-2">
        Proactive, preventative wellness program designed to keep your pet
        healthier and happier for longer
      </div>
      {/* body section begin here */}
      <div class="py-2.0 px-10 flex bg-[#f5f5f5] py-14 justify-center">
        <div class="shadow-md mr-5 bg-[#ffffff] text-[#494949] p-5 w-2/5">
          <h2 class="text-3xl text-[#001939] font-bold">Login</h2>
          <h6 className="mt-2">
            Log in to healthy Pets Plus to manage your membership online
          </h6>
          <p className="bg-[#f5f5f5] p-3 pr-10 my-5 flex text-[13px]">
            <IoMdAlert className="mr-1 text-[16px]" />
            If you`re an existing Petbarn customer, you can log in with your
            Petbaen credentials.
          </p>
          <div>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="w-full border-[1px] border-[#dcdcdc] rounded-full p-2 pl-3 text-[13px] mb-3"
                placeholder="Email Address"
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full border-[1px] border-[#dcdcdc] p-2 pl-3 text-[13px] mb-3"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-baseline mt-2">
            <button
              type="button"
              className="bg-[#00a651] text-[#ffffff] rounded-full px-24 py-2 mr-2"
            >
              Log in
            </button>
            <span className="ml-2">
              <u>Forgot password?</u>
            </span>
          </div>
        </div>
        <div class="shadow-md ml-5 bg-[#ffffff] text-[#494949] p-5 w-2/5">
          <h2 class="text-3xl text-[#001939] font-bold">Register</h2>
          <p className="my-3 flex text-[13px]">
            If you`ve purchases a Healthy Pets Plus membership, you can create
            an account here.
          </p>
          <button
            type="button"
            className="border-[2px] border-[#00a651] text-[#001939] font-bold rounded-full px-24 py-2 mr-2"
          >
            Register
          </button>
        </div>
      </div>
      {/* body section end here */}
      {/* footer section begin here */}
      <Footer></Footer>
      {/* footer section end here */}
    </main>
  );
}
