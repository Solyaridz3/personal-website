import { useEffect, useState } from "react";
// import LogoGrid from "@/app/components/LogoGrid";
import { JetBrains_Mono } from "next/font/google";
import MainLogo from "@/app/components/MainLogo";

import dynamic from "next/dynamic";

const LogoGrid = dynamic(
    () => {
        return import("./components/LogoGrid");
    },
    { ssr: false }
);

const messageFont = JetBrains_Mono({ weight: "400", subsets: ["latin"] });

function* getText(textArr: string[]): Generator<string> {
    let currentMessage: string;
    let index: number = 0;
    while (true) {
        let message = textArr[index];
        currentMessage = "";
        for (const char of message) {
            currentMessage += char;
            yield currentMessage;
        }
        for (let i = currentMessage.length; i > 0; i--) {
            currentMessage = currentMessage.slice(0, i);
            yield currentMessage;
        }
        index = (index + 1) % textArr.length;
    }
}

function disableScroll() {
    window.onscroll = function () {
        if (window.scrollY || window.scrollX) {
            window.scroll(0, 0);
        }
    };
}

function enableScroll() {
    window.onscroll = function () {};
}

export default function Home() {
    const textArr = ["Hi!", "I'm Serhiy Vynarchuk.", "Software engineer."];
    const generateCurrentMessage = getText(textArr);
    const [message, setMessage] = useState(generateCurrentMessage.next().value);
    useEffect(() => {
        disableScroll();
        enableScroll();
        const interval = setInterval(() => {
            setMessage(generateCurrentMessage.next().value);
        }, 100);
        return () => clearInterval(interval);
    }, []);
    return (
        <main
            className={
                "bg-gradient-radial from-gray-900 to-black duration-1000"
            }
        >
            <div
                className={`transition-transform flex min-h-screen flex-col lg:flex-row items-center justify-center p-32 lg:gap-60 gap-10`}
            >
                <div className={"text-3xl w-[450px] text-center lg:text-start"}>
                    <div className={messageFont.className}>
                        {message}
                        <span>_</span>
                    </div>
                </div>
                <MainLogo />
            </div>
            <div className="border-t-2 border-gray-800 flex min-h-screen flex-col items-center justify-center gap-20">
                <div>
                    <p className="text-3xl">My technologies stack</p>
                </div>
                <LogoGrid />
            </div>
        </main>
    );
}
