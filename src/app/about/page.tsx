import Image from "next/image";

function Page() {
    return (
        <main
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

        </main>
    )
}

export default Page;