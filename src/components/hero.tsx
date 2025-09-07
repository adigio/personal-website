export default function Hero() {
    return (
        <section>
            <div className="px-6 pt-14 lg:px-8">
                <div className="inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Alan Di Giovanni</h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Full-stack developer from Buenos Aires, Argentina</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="https://www.linkedin.com/in/ardigiovanni/" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Contacto</a>
                            {/* <a href="#" className="text-sm/6 font-semibold text-white">Conocer mas <span aria-hidden="true">→</span></a> */}
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">

                </div>
            </div>
        </section>
    );
}