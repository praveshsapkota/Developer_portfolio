import Image from "next/image"
const About = () => {
    return (
        <>
            <div className="aboutSection relative items-center">
                <div className="self-center flex item-center pl-5 pt-3 pb-3 ">
                    <Image className="top-3" alt="handGif" width={50} height={120} src="/shake-hand.gif" />
                    <span className="text-white text-center font-mono">
                        Hello , I am a computer engineering graduate having experience working accross different technology’s in Web development , machine learning , IOT and overall Computer engineering domain.
                    </span>
                </div>
            </div>
        </>
    )
}

export default About