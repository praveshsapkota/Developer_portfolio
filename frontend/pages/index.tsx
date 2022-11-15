import { Logo } from "./index.styles"
import Image from "next/image"
import { MdOutlineMenu } from "react-icons/md"
import { ClientSideSkills } from "../component/skillsMarquee/skills"
import About from "../component/about/about"

const Home = () => {

    return (
        <div className="flex flex-col items-center justify-between">

            {/* navbar */}
            <div className="flex flex-row w-11/12 justify-between ">
                <Logo>
                    Pravesh sapkota
                </Logo>
                <div className="hidden md:flex text-white justify-between w-5/12 lg:w-4/12 items-center    ">
                    <span>Home</span>
                    <span>About</span>
                    <span>skills</span>
                    <span>Projects</span>
                    <span>experience</span>
                </div>
                <div className="flex self-center md:hidden text-white">
                    <MdOutlineMenu size={30} />
                </div>
            </div>
            {/* navBar */}

            {/* profile photo and  role */}
            <div className="flex flex-col md:hidden mt-10 w-11/12 h-1/3  relative  justify-between items-center">
                <div className="">
                    <Image width={400} height={400} style={{ objectFit: "fill" }} src={"/myPhoto.png"} alt="myPhoto" />
                </div>
                <div className="flex self-center mt-7   ">
                    <Image width={500} height={300} style={{ objectFit: "fill" }} src={"/headingText.png"} alt="myPhoto" />
                </div>
            </div>
            <div className="hidden md:flex w-11/12 h-1/3 mt-10   relative  justify-between items-center">
                <div className="flex self-center">
                    <Image width={500} height={300} style={{ objectFit: "fill" }} src={"/headingText.png"} alt="myPhoto" />
                </div>
                <div className="">
                    <Image width={400} height={400} style={{ objectFit: "fill" }} src={"/myPhoto.png"} alt="myPhoto" />
                </div>
            </div>
            {/* profilePhoto and role */}
            <div className="mt-10 mb-10">
                <About />
            </div>
            <div className="Skills flex flex-col ">
                <div className="rounded-lg  ">
                    <ClientSideSkills />
                </div>
            </div>
        </div>
    )
}

export default Home