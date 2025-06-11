const HomeContent = () => {
  return (
    <main className="h-full flex items-center justify-center gap-40">
        <div>
            <div className="flex gap-10">
                <img src="/Git.svg" alt="Github" />
                <img src="/Linkedin.svg" alt="Linkedin" />
                <img src="/Instagram.svg" alt="Instagram" />
            </div>
            <div className="text-white mt-20 mb-20 flex flex-col gap-5">
                <p className="font-medium text-3xl">Olá, eu sou Kauê Batista</p>
                <h2 className="font-bold text-5xl">Desenvolvedor Web</h2>
                <p className="font-semibold text-3xl">Seja bem-vindo ao meu portfólio</p>
            </div>
            <button className="bg-[#D9D9D9] rounded-2xl font-medium text-3xl px-8 py-2 transition duration-500 cursor-pointer hover:text-white hover:bg-purple-600">Saiba mais sobre mim</button>
        </div>
        <img src="/my-image.jpeg" alt="My Image" className="rounded-full max-2xl:w-[450px] max-2xl::h-[450px]" />
    </main>
  )
}

export default HomeContent