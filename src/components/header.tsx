const MainHeader = () => {
  return (
    <header className="bg-[#161313] w-full h-24 flex justify-around items-center">

        <a href="/"><h1 className="text-white text-6xl max-2xl:text-5xl">{"<Kaue/>"}</h1></a>

        <nav>
            <ul className="text-white flex gap-7 text-3xl font-semibold max-2xl:text-2xl">
                <li>
                    <a className="transition duration-500 hover:text-purple-600" href="">Sobre mim</a>
                </li>
                <li>
                    <a className="transition duration-500 hover:text-purple-600" href="/techs">Tecnologias</a>
                </li>
                <li>
                    <a className="transition duration-500 hover:text-purple-600" href="">Projetos</a>
                </li>
                <li>
                    <a className="transition duration-500 hover:text-white hover:bg-purple-600 p-2 bg-[#D9D9D9] text-black rounded-2xl" href="">Contato</a>
                </li>
            </ul>
        </nav>
        
    </header>
  )
}

export default MainHeader