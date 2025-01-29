// import Image from "next/image";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="https://nextjs.org/icons/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="https://nextjs.org/icons/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
    <div className="dark:text-white text-black">
      <div className="border-b-2">
        <div className="container mx-auto my-5 grid grid-cols-4 gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 border-b-2">
              <img src="https://ichef.bbci.co.uk/news/480/cpsprodpb/a483/live/4646bcc0-dd5e-11ef-8e2a-672c89b13e12.jpg.webp" alt="" />
              <h3 className="font-bold text-xl">DeepSeek: How China's 'AI heroes' overcame US curbs to stun Silicon Valley</h3>
              <p>How did a little-known Chinese start-up build a powerful new AI model despite restrictions?</p>
              <div className="pb-2">
                <span className="pe-5 border-e-2">18 hrs ago</span>
                <span className="ps-5">Asia</span>
              </div>
            </div>
            <div className="flex flex-col gap-5 border-b-2">
              <img src="https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/4fe8/live/993cea00-dd6b-11ef-bc01-8f2c83dad217.jpg.webp" alt="" />
              <h3 className="font-bold text-xl">Bodies in streets as battle escalates in DR Congo city</h3>
              <p>UN aid agencies are warning of a humanitarian crisis in Goma in the east of the Democratic Republic of Congo.</p>
              <div className="pb-2">
                <span className="pe-5 border-e-2">18 hrs ago</span>
                <span className="ps-5">Asia</span>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <img className="w-full" src="https://ichef.bbci.co.uk/ace/standard/640/cpsprodpb/302e/live/95adcf10-dcd7-11ef-902e-cf9b84dc1357.jpg.webp" alt=""/>
            <h1 className="font-bold text-4xl">Small rebound for Nvidia shares as US stock markets reopen after DeepSeek shock</h1>
            <p>Shares for leading US chip firm Nvidia dropped by almost 17% on Monday after the emergence of DeepSeek stunned Silicon Valley.</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 border-b-2">
              <h1 className="font-bold text-xl">Abramovich dodged millions in tax with superyachts-for-hire scheme</h1>
              <p>Shell companies were used to charter the sanctioned oligarch’s yachts to himself, evading VAT, BBC reveals.</p>
              <div className="pb-2">
                <span className="pe-5 border-e-2">11 hrs ago</span>
                <span className="ps-5">World</span>
              </div>
            </div>
            <div className="flex flex-col gap-5 border-b-2">
              <h1 className="font-bold text-xl">RFK Jr v Dr Oz and a looming battle over weight-loss drugs</h1>
              <p>Experts say high demand for the drugs could force officials to make a decision on insurance coverage.</p>
              <div className="pb-2">
                <span className="pe-5 border-e-2">10 hrs ago</span>
                <span className="ps-5">Health</span>
              </div>
            </div>
            <div className="flex flex-col gap-5 border-b-2">
              <h1 className="font-bold text-xl">Decoding Melania Trump's new official portrait</h1>
              <p>We asked two experts for their take on the image, which was shot in the White House a day after the inauguration.</p>
              <div className="pb-2">
                <span className="pe-5 border-e-2">13 hrs ago</span>
                <span className="ps-5">US & Canada</span>
              </div>
            </div>
            <div className="flex flex-col gap-5 border-b-2">
              <h1 className="font-bold text-xl">Abramovich dodged millions in tax with superyachts-for-hire scheme</h1>
              <p>Shell companies were used to charter the sanctioned oligarch’s yachts to himself, evading VAT, BBC reveals.</p>
              <div className="pb-2">
                <span className="pe-5 border-e-2">5 hrs ago</span>
                <span className="ps-5">US & Canada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
