"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import onSubmit from "./submit";
import Link from "next/link";

function SubmitFormButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="hover:bg-slate-500 w-full hover:rounded-lg"
    >
      보내기
    </button>
  );
}

function LabelInput({ name }: { name: string }) {
  return (
    <>
      <label htmlFor={name} className="leading-7 text-sm text-gray-600">
        {name}
      </label>
      <input
        required={true}
        type={name === "email" ? "email" : "text"}
        id={name}
        name={name}
        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </>
  );
}

const Result = ({ message }: { message: string }) => {
  return (
    <div className="container px-5 py-24 mx-auto justify-center align-middle h-screen">
      <div className="w-full">
        <p aria-live="polite">{message}</p>
      </div>
      <Link
        href="/"
        className="w-12 backdrop-blur-lg bg-slate-600 rounded-lg min-w-fit hover:bg-white hover:ring-2 hover:text-gray-500"
      >
        Go home
      </Link>
    </div>
  );
};

export const Contact = () => {
  const [state, formAction] = useFormState(onSubmit, {
    message: "",
  });
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <></>;
  }
  if (state?.message !== "") {
    return <Result message={state.message} />;
  }
  return (
    <form action={formAction} className="text-white body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4">
            Contact Me
          </h2>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <LabelInput name={"name"} />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <LabelInput name={"email"} />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <SubmitFormButton />
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center flex flex-col">
              <a className="text-indigo-500">mallangcoogi@gmail.com</a>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-4 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-4 text-white-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
