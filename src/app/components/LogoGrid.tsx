import Image from "next/image";
import useWindowDimensions from "../hooks/windowDimensions";

const logos = [
    { src: "/node.webp", alt: "Node.js" },
    { src: "/express-js.png", alt: "Express.js" },
    { src: "/git.png", alt: "Git" },
    { src: "/typescript.png", alt: "Typescript" },
    { src: "/nest.png", alt: "Nest.js" },
    { src: "/postgres.png", alt: "PostgreSQl" },
    { src: "/docker.webp", alt: "Docker" },
    { src: "/React.webp", alt: "React" },
    { src: "/tailwind.webp", alt: "Tailwind" },
];

function LogoGrid() {
    const [logoHeight, logoWidth] = [
        {
            big: 100,
            small: 50,
        },
        {
            big: 100,
            small: 50,
        },
    ];

    const { windowHeight: h, windowWidth: w } = useWindowDimensions();

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 md:gap-x-40 gap-y-12">
            {logos.map((logo) => (
                <div
                    key={logo.src}
                    className="flex flex-col items-center group relative hover:translate-y-[-10px] transition-transform ease-in-out"
                >
                    <p className="mb-4">{logo.alt}</p>
                    <Image
                        className={`object-cover h-${
                            w > 768 ? logoHeight.big : logoHeight.small
                        } w-${w > 768 ? logoWidth.big : logoWidth.small}`}
                        width={w > 768 ? logoWidth.big : logoWidth.small}
                        height={w > 768 ? logoHeight.big : logoHeight.small}
                        src={logo.src}
                        alt={logo.alt}
                        objectFit="cover"
                        priority={true}
                    />
                    <Image
                        className="absolute top-[40px] opacity-20 blur-[20px] transition-all ease-in-out group-hover:opacity-45 group-hover:blur-[50px]"
                        width={w > 768 ? logoWidth.big : logoWidth.small}
                        height={w > 768 ? logoHeight.big : logoHeight.small}
                        src={logo.src}
                        alt={"shadow"}
                        objectFit="cover"
                        priority={true}
                    />
                </div>
            ))}
        </div>
    );
}

export default LogoGrid;
