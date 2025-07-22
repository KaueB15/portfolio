import BackTechs from "./back-techs"
import FrontTechs from "./front-techs"

const Techs = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col text-white">
        <h2 className="font-extrabold text-5xl mb-8 uppercase max-2xl:mb-6">Tecnologias</h2>
        <h3 className="font-medium text-3xl mb-9 uppercase max-2xl:mb-7">Front-end</h3>
        <div className="mb-8 ">
            <FrontTechs />
        </div>
        <h3 className="font-medium text-3xl mb-9 uppercase max-2xl:mb-7">Back-end</h3>
        <div>
            <BackTechs />
        </div>
    </div>
  )
}

export default Techs