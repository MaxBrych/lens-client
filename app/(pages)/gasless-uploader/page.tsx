"use client";

import React, { FC } from "react";
import Uploader from "../../components/Uploader";

const Page: FC = () => {
  return (
    <div className="flex flex-col-reverse items-start justify-center gap-10 py-10 mx-auto bg-background text-text md:flex-row">
      <div className="w-full p-10 md:w-1/3 md:p-0">
        <Uploader gasless={true} showImageView={true} showReceiptView={true} />
      </div>

      <div className="flex flex-col p-5 space-y-4 border rounded-lg">
        <h1 className="text-start text-xl font-bold p-1 rounded-lg bg-[#EEF0F6]/60">
          Overview
        </h1>
        <div className="bg-[#EEF0F6]/60 rounded-lg">
          <h2 className="font-bold">This component:</h2>
          <ul className="pl-5 list-decimal">
            <li>Uploads file(s)</li>
            <li>Pays for and signs the upload at the server</li>
            <li>Displays the uploaded file(s) (optionally)</li>
            <li>Displays the upload receipt (optionally)</li>
          </ul>
          <p className="mt-2">
            Before testing, set the{" "}
            <span className="p-1 text-xs bg-gray-200">PRIVATE_KEY</span>{" "}
            variable in{" "}
            <span className="p-1 text-xs bg-gray-200">.env.local</span>
          </p>
        </div>
        <h1 className="text-start text-xl font-bold p-1 rounded-lg bg-[#EEF0F6]/60 mt-5">
          Usage
        </h1>
        <div className="bg-[#EEF0F6]/60 rounded-lg">
          <div className="flex flex-col gap-4 text-xs">
            <div className="flex flex-col gap-2">
              <p className="text-base text-neutral-700">Default:</p>
              <code className="rounded bg-[#D8CFCA] px-2 py-1">
                {"<Uploader gasless={true} />"}
              </code>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-neutral-700">
                To hide the image preview:
              </p>
              <code className="rounded bg-[#D8CFCA] px-2 py-1">
                {"<Uploader gasless={true} showImageView={ false } />"}
              </code>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base text-neutral-700">
                To hide the receipt preview:
              </p>
              <code className="rounded bg-[#D8CFCA] px-2 py-1">
                {"<Uploader gasless={true} showReceiptView={ false } />"}
              </code>
            </div>
            <div className="gap-2">
              Before testing, set the{" "}
              <span className="p-1 bg-gray-200">PRIVATE_KEY</span> variable in{" "}
              <span className="p-1 bg-gray-200">.env.local</span>
            </div>
          </div>
        </div>
        <h1 className="text-start text-xl font-bold p-1 rounded-lg bg-[#EEF0F6]/60">
          Docs
        </h1>
        <div className="bg-[#EEF0F6]/60 rounded-lg">
          <ul className="pl-5 list-decimal">
            <li>
              <a
                className="text-blue-500 underline hover:text-blue-700"
                href="https://docs.irys.xyz/developer-docs/provenance-toolkit/gassless-uploader"
                target="_blank"
              >
                Provenance Toolkit docs
              </a>
            </li>{" "}
            <li>
              <a
                className="text-blue-500 underline hover:text-blue-700"
                href="https://github.com/Irys-xyz/provenance-toolkit"
                target="_blank"
              >
                Provenance Toolkit GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
