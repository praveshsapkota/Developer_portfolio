import Marquee from "react-fast-marquee"
import Image from "next/image"

const ClientSideSkills = () => {

    return (
        <>
            <Marquee className="clientSkills p-5 " style={{ width: "auto", display: "flex", justifyContent: "space-between" }} speed={200} gradient={false} gradientColor={[37, 8, 121]} gradientWidth={50} pauseOnHover={true} >
                <Image className="ml-16" src="/imageSKILLS/bootstrap.png" alt="react" width={100} height={150} />
                <Image className="" src="/imageSKILLS/react.svg" alt="react" width={100} height={100} />
            </Marquee>
        </>)
}
export { ClientSideSkills }