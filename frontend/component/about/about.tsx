import Image from "next/image"
const About = () => {
    return (
        <>
            <div className="aboutSection relative items-center md:mt-10 mb-10">
                <Image className="absolute" alt="handGif" width={50} height={142} src="/shake-hand.gif" />
                <div className="">
                    <span className="text-white p-4">
                        Hello , I am a computer engineering graduate having experience working accross different technology’s in Web development , machine learning , IOT and overall Computer engineering domain.
                    </span>
                </div>
            </div>
        </>
    )
}

export default About