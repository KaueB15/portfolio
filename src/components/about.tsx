import AboutInfo from "./about-info"

const About = () => {
  return (
    <section className="h-full flex items-center justify-center flex-col text-white">
        
        <h2 className="font-extrabold text-5xl mb-8 uppercase max-2xl:mb-6">Sobre mim</h2>
        <h3 className="font-medium text-3xl mb-9 uppercase max-2xl:mb-7">Kauê Cardozo Batista</h3>
        <AboutInfo />
        
    </section>
  )
}

export default About