import Image from "next/image";
import ActiveLink from "@/app/components/ActiveLink";

function MainLogo() {
    return (
        <div className="relative">
            <ActiveLink href="/about" className={""}>
                <div className="group transition-shadow drop-shadow-[10px_0px_500px_rgba(20,0,255,0.8)] flex-col rounded-full shadow-[0px_0px_160px_rgba(100,0,255,0.7)] hover:shadow-[0px_0px_200px_rgba(100,0,255,0.8)]">
                    <div className="flex h-80 w-80 rounded-full">
                        <Image
                            src="/me_love3.gif"
                            alt="me"
                            width={300}
                            height={300}
                            unoptimized={true}
                            className={
                                "rounded-full object-[0px_-28px] object-cover h-full w-full "
                            }
                        />
                    </div>
                    <div className="absolute blur-sm -inset-1 bg-black rounded-full to-violet-500 z-[-1]"></div>
                    <p className="absolute top-[250px] left-[-10px] rounded-full p-3 bg-violet-800 group-hover:bg-violet-900">
                        About me
                    </p>
                </div>
            </ActiveLink>
            <ActiveLink href="https://github.com/Solyaridz3" className={""}>
                <div className="border-black border-4 rounded-full absolute top-[0px] left-[250px] group transition-shadow shadow-[0px_0px_0px_rgba(255,255,255,1)] hover:shadow-[0px_0px_10px_rgba(255,255,255,1)]">
                    <Image
                        className={`object-cover h-${20} w-${20} rounded-full p-1 bg-violet-100 group-hover:bg-white`}
                        width={50}
                        height={50}
                        src={"/github.svg"}
                        alt={"Github"}
                        objectFit="cover"
                        priority={true}
                    />
                </div>
            </ActiveLink>
        </div>
    );
}

export default MainLogo;
