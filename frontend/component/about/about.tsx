import Image from "next/image"
const About = () => {
    return (
        <>
            <div className="aboutSection relative items-center">
                <Image className="absolute top-0" alt="handGif" width={50} height={142} src="/shake-hand.gif" />
                <div className="self-center item-center relative top-10">
                    <span className="text-white     ">
                        Hello , I am a computer engineering graduate having experience working accross different technology’s in Web development , machine learning , IOT and overall Computer engineering domain.
                    </span>
                </div>
            </div>
        </>
    )
}

export default About