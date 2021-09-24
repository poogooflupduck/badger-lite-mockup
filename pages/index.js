import Head from "next/head";
import Image from "next/image";
import React, { useEffect, Fragment, useRef, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";

export default function Home(props) {
  const title = "Badger Lite";
  useEffect(() => {
    document.body.style = "background: #181818;";
  }, []);

  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  return (
    <div className="text-white">
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                style={{ backgroundColor: "#2b2b2b" }}
                className="inline-block align-bottom rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              >
                <div>
                  <div className="text-white mt-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8">
                        <Image
                          src={"/badger-logo.png"}
                          layout={"responsive"}
                          width={10}
                          height={10}
                          alt="Badger Lite"
                        />
                      </div>
                      <div>
                        <Dialog.Title
                          as="h3"
                          className="text-sm leading-6 font-medium"
                        >
                          Deposit
                          <br />
                          <span className="font-bold">Badger</span>
                        </Dialog.Title>
                      </div>
                    </div>
                    <div className="mb-4 mt-8">
                      <p className="text-sm">
                        Available
                        <br />
                        0.000000000000000000
                      </p>
                    </div>

                    <div className="mt-1">
                      <input
                        style={{ backgroundColor: "#2b2b2b" }}
                        type="number"
                        className="py-2 px-2 shadow-sm border-2 border-white  block w-full sm:text-sm rounded-md"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex">
                  <a
                    className="cursor-pointer w-full px-3 py-2 h-auto rounded-lg text-center"
                    style={{ backgroundColor: "#F2A52B" }}
                    onClick={() => setOpen(!open)}
                  >
                    <span className="text-black text-base uppercase font-bold">
                      Deposit & earn
                    </span>
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-8 lg:mx-24 mb-12">
        <div className="pt-12">
          <div className="flex items-center">
            <div className="w-12">
              <Image
                src={"/badger-logo.png"}
                layout={"responsive"}
                width={10}
                height={10}
                alt="Badger Lite"
              />
            </div>
            <span className="pl-2 text-white text-xl">Lite</span>
          </div>
        </div>
        <div className="mt-12 space-y-6">
          <h2 className="text-4xl">Badger Lite</h2>
          <h6 className="text-base">
            Earn and deposit in one click. Badger Lite puts your assets to work
            and auto-compounds rewards.
          </h6>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div
            className="w-full h-auto rounded-lg"
            style={{ backgroundColor: "#2B2B2B" }}
          >
            <div className="mt-16 mb-16 mx-10 lg:mx-14 space-y-4">
              <div className="flex items-center">
                <div className="w-20">
                  <Image
                    src={"/ibbtc.svg"}
                    layout={"responsive"}
                    width={10}
                    height={10}
                    alt="ibBTC"
                  />
                </div>
                <div className="w-full text-right">
                  <span className="text-white text-5xl">3.22%</span>
                  <p className="text-white">Yearly ROI</p>
                </div>
              </div>
              <h2 className="text-white text-xl">Earn ibBTC</h2>
              <p className="text-white">
                Deposit and earn ibBTC. This vault uses strictly ibBTC to
                compound your earnings.{" "}
                <span className="italic">More info.</span>
                <br />
                <br />
              </p>
              <div className="pt-8 space-y-4 xl:space-y-0 xl:flex">
                <div className="xl:border-r-2 pr-6 space-y-2">
                  <span className="text-white text-4xl">$31,220</span>
                  <p className="text-white">Your deposits</p>
                </div>
                <div className="xl:pl-6 space-y-2">
                  <span className="text-white text-4xl">$9,221,290</span>
                  <p className="text-white">Total deposits</p>
                </div>
              </div>
            </div>
            <div className="flex mx-8 lg:mx-12">
              <a
                className="cursor-pointer w-full px-3 py-2 h-auto rounded-lg text-center"
                style={{ backgroundColor: "#F2A52B" }}
                onClick={() => setOpen(!open)}
              >
                <span className="text-black text-base uppercase font-bold">
                  Deposit & earn
                </span>
              </a>
            </div>
            <div className="mt-2 mb-8 flex mx-8 lg:mx-12">
              <a
                className="w-full px-3 py-2 h-auto rounded-lg text-center"
                style={{ backgroundColor: "#121212" }}
              >
                <span className="text-base uppercase font-bold">Withdraw</span>
              </a>
            </div>
          </div>
          <div
            className="w-full h-auto rounded-lg"
            style={{ backgroundColor: "#2B2B2B" }}
          >
            <div className="mt-16 mb-16 mx-10 lg:mx-14 space-y-4">
              <div className="flex items-center">
                <div className="w-20">
                  <Image
                    src={"/badger-logo.png"}
                    layout={"responsive"}
                    width={10}
                    height={10}
                    alt="ibBTC"
                  />
                </div>
                <div className="w-20">
                  <Image
                    src={"/curve.png"}
                    layout={"responsive"}
                    width={10}
                    height={10}
                    alt="ibBTC"
                  />
                </div>
                <div className="w-20">
                  <Image
                    src={"/sushi.png"}
                    layout={"responsive"}
                    width={10}
                    height={10}
                    alt="ibBTC"
                  />
                </div>
                <div className="w-full text-right">
                  <span className="text-white text-5xl">14.42%</span>
                  <p className="text-white">Yearly ROI</p>
                </div>
              </div>
              <h2 className="text-white text-xl">Earn BADGER, SUSHI & CURVE</h2>
              <p className="text-white">
                Deposit and earn BADGER and tokens from partner projects. The
                Badger Tricrypto Vault uses a range of tokens to compound your
                earnings. <span className="italic">More info.</span>
              </p>
              <div className="pt-8 space-y-4 xl:space-y-0 xl:flex">
                <div className="xl:border-r-2 pr-6 space-y-2">
                  <span className="text-white text-4xl">$19,320</span>
                  <p className="text-white">Your deposits</p>
                </div>
                <div className="xl:pl-6 space-y-2">
                  <span className="text-white text-4xl">$32,103,430</span>
                  <p className="text-white">Total deposits</p>
                </div>
              </div>
            </div>
            <div className="flex mx-8 lg:mx-12">
              <a
                className="cursor-pointer w-full px-3 py-2 h-auto rounded-lg text-center"
                style={{ backgroundColor: "#F2A52B" }}
                onClick={() => setOpen(!open)}
              >
                <span className="text-black text-base uppercase font-bold">
                  Deposit & earn
                </span>
              </a>
            </div>
            <div className="mt-2 mb-8 flex mx-8 lg:mx-12">
              <a
                className="w-full px-3 py-2 h-auto rounded-lg text-center"
                style={{ backgroundColor: "#121212" }}
              >
                <span className="text-base uppercase font-bold">Withdraw</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
