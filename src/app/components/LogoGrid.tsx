import Image from 'next/image';

const logos = [
    {src: '/node.webp', alt: 'Node.js'},
    {src: '/express-js.png', alt: 'Express.js'},
    {src: '/git.png', alt: "Git"},
    {src: '/typescript.png', alt: 'Typescript'},
    {src: '/nest.png', alt: 'Nest.js'},
    {src: '/React.webp', alt: 'React'},
    // Add more logos as needed
];

function LogoGrid() {
    return (
        <div className="grid md:grid-cols-3 gap-x-40 gap-y-12">
            {logos.map((logo) => (
                <div key={logo.src} className="group relative hover:translate-y-[-10px] transition-transform ease-in-out">
                    <p className="text-center mb-4">{logo.alt}</p>
                    <Image
                        className="object-cover h-150 w-150"
                        width={150}
                        height={150}
                        src={logo.src}
                        alt={logo.alt}
                        objectFit="cover"
                        priority={true}
                    />
                    <Image
                        className="absolute top-[40px] opacity-20 blur-[20px] transition-all ease-in-out group-hover:opacity-45 group-hover:blur-[50px]"
                        width={150}
                        height={150}
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