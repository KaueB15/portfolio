import FrontTechs from "./front-techs"

const Techs = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col text-white">
        <h2 className="font-extrabold text-6xl mb-8 uppercase">Tecnologias</h2>
        <h3 className="font-medium text-4xl mb-9 uppercase">Front-end</h3>
        <div className="mb-8 ">
            <FrontTechs />
        </div>
    </div>
  )
}

export default Techs