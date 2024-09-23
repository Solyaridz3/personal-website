import Image from "next/image";

function Page() {
    return (
        <main className="bg-gradient-radial from-gray-900 to-black border-t-2 border-gray-800 flex min-h-screen md:flex-row flex-col items-center justify-center pt-20 gap-10 md:p-8 md:gap-32">
            <div className="shadow-[0px_0px_60px_rgba(100,0,255,0.3)] rounded-md">
                <Image
                    src="/me.jpg"
                    alt="me"
                    height={200}
                    width={200}
                    className={
                        "rounded-md object-cover h-full w-full md:drop-shadow-[10px_0px_500px_rgba(100,0,255,0.8)]"
                    }
                />
            </div>
            <div className="text-xl md:w-2/3 p-10">
                <p>
                    A dedicated and detail-oriented
                    Junior Backend Developer with a robust foundation in
                    Node.js, JavaScript, TypeScript, Express, PostgreSQL,
                    MongoDB, Docker, and Git. I possess practical experience in
                    designing and developing RESTful APIs, along with a solid
                    understanding of core data structures and algorithms
                    essential for backend development. I began exploring
                    programming at the age of 13, and while it sparked my
                    interest early on, I have focused intensively on developing
                    my skills over the past year. During this time, I have
                    gained hands-on experience with unit and end-to-end (E2E)
                    testing, as well as basic exposure to AWS services like EC2
                    and S3. My commitment to continuous learning is demonstrated
                    by my participation in a selective training program at
                    SOLVD, where I have been refining my expertise over the last
                    five months. In addition to my technical abilities, I have a
                    B2 level of English proficiency and excellent communication
                    skills, allowing me to effectively articulate complex ideas
                    and collaborate within a team. I am now seeking a junior
                    developer role where I can leverage my skills, contribute to
                    impactful projects, and grow professionally within a
                    collaborative and innovative environment.
                </p>
            </div>
        </main>
    );
}

export default Page;
