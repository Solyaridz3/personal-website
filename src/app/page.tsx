"use client"
import Image from "next/image";
import {useEffect, useState} from "react";
import LogoGrid from "@/app/components/LogoGrid";
import {JetBrains_Mono} from "next/font/google";

const messageFont = JetBrains_Mono({weight: "400", subsets: ["latin"]});

function* getText(textArr: string[]): Generator<string> {
    let currentMessage: string;
    let index: number = 0;
    while (true) {
        let message = textArr[index];
        currentMessage = '';
        for (const char of message) {
            currentMessage += char
            yield currentMessage;
        }
        for (let i = currentMessage.length; i > 0; i--) {
            currentMessage = currentMessage.slice(0, i);
            yield currentMessage;
        }
        index = (index + 1) % textArr.length;
    }
}


export default function Home() {
    const textArr = ['Hi!', 'I\'m Serhiy Vynarchuk.', 'Software engineer.'];
    const generateCurrentMessage = getText(textArr);
    const [message, setMessage] = useState(generateCurrentMessage.next().value);
    useEffect(() => {
        const interval = setInterval(() => {
            setMessage(generateCurrentMessage.next().value);
        }, 100);
        return () => clearInterval(interval);
    }, []);
    return (<main className="bg-gradient-radial from-gray-900 to-black">
            <div className="flex min-h-screen flex-col md:flex-row items-center justify-center p-32 md:gap-60 gap-10">
                <div className={"text-3xl w-[450px] text-center"}>
                    <div className={messageFont.className}>{message}<span>_</span></div>
                </div>
                <a href="/about"
                   className="group transition-shadow relative drop-shadow-[10px_0px_500px_rgba(20,0,255,0.8)] flex-col rounded-full shadow-[0px_0px_160px_rgba(100,0,255,0.7)] hover:shadow-[0px_0px_200px_rgba(100,0,255,0.8)]">
                    <div
                        className="flex h-80 w-80 rounded-full">
                        <Image src="/me_love3.gif" alt="me" width={300} height={300}
                               className={"rounded-full object-[0px_-28px] object-cover h-full w-full "}/>
                    </div>
                    <div
                        className="absolute blur-sm -inset-1 bg-black rounded-full to-violet-500 z-[-1]"></div>
                    <p className="absolute top-[250px] left-[-10px] rounded-full p-3 bg-violet-800 group-hover:bg-violet-900">About
                        me</p>
                </a>
            </div>
            <div
                className="border-t-2 border-gray-800 flex min-h-screen flex-col items-center justify-center p-32 gap-20">
                <div>
                    <p className="text-3xl">My technologies stack</p>
                </div>
                <LogoGrid/>
            </div>

            <div
                className="border-t-2 border-gray-800 flex min-h-screen md:flex-row flex-col items-center justify-center pt-20 gap-10 md:p-8 md:gap-32">
                <div
                    className="shadow-[0px_0px_60px_rgba(100,0,255,0.3)] rounded-md">
                    <Image src="/me.jpg" alt="me" height={200} width={200}
                           className={"rounded-md object-cover h-full w-full md:drop-shadow-[10px_0px_500px_rgba(100,0,255,0.8)]"}/>
                </div>
                <div className="text-xl md:w-2/3 p-10">
                    <p>
                        My name is Serhii, and I am a 19-year-old student from Kyiv with a deep passion for
                        programming and a fervent desire to contribute meaningfully to the field. I would like to
                        share with you my background, skills, and motivation.

                        Currently pursuing a bachelor&apos;s degree in Cyber security at National Aviation University, I
                        have dedicated a significant portion of my academic journey to acquiring knowledge and
                        skills that span programming domains. In addition to my formal education, I have actively
                        engaged in self-directed learning, particularly in the realm of node.js development using
                        JavaScript and TypeScript. My primary focus lies in honing my abilities to create robust
                        APIs and develop user-friendly frontends with HTML, CSS, and React.

                        One of the facets of my educational journey includes current participation in peer-to-peer
                        courses offered by the volunteer organization SHPP. These courses, centered around computer
                        science and node.js development.

                        I am excited about the prospect of applying my skills to real-world challenges and
                        contributing to innovative projects.

                        I am confident that my blend of academic knowledge, technical skills, and proactive approach
                        makes me well-suited for the challenges that Node.js Development Course presents. I am eager
                        to bring my enthusiasm for programming, my dedication to continuous learning, and my
                        problem-solving mindset to your esteemed team.

                        I would welcome the opportunity to further discuss how my skills and experiences align with
                        the needs of Solvd. Thank you for considering my application. I am looking forward to the
                        possibility of contributing to the success of your team.
                    </p>
                </div>

            </div>
        </main>
    );
}
