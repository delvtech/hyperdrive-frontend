function Index() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative px-4 mx-auto max-w-7xl sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <div className="my-4"></div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This is a boilerplate build with Vite, React 18, TypeScript,
              Vitest, Testing Library, TailwindCSS 3, Eslint and Prettier.
            </p>
          </div>
          <div>
            <div className="my-10">
              <a
                href="vscode://"
                className="inline-block px-8 py-3 font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
              >
                Start building for free
              </a>
              <div
                aria-hidden="true"
                className="mt-10 pointer-events-none md:mt-0 lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid grid-cols-1 shrink-0 gap-y-6 lg:gap-y-8">
                      <div className="h-64 overflow-hidden rounded-lg w-44 sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://picsum.photos/600?random=1"
                          alt=""
                          className="object-cover object-center w-full h-full bg-indigo-100"
                        />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://picsum.photos/600?random=2"
                          alt=""
                          className="object-cover object-center w-full h-full bg-indigo-100"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 shrink-0 gap-y-6 lg:gap-y-8">
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://picsum.photos/600?random=3"
                          alt=""
                          className="object-cover object-center w-full h-full bg-indigo-100"
                        />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://picsum.photos/600?random=4"
                          alt=""
                          className="object-cover object-center w-full h-full bg-indigo-100"
                        />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://picsum.photos/600?random=5"
                          alt=""
                          className="object-cover object-center w-full h-full bg-indigo-100"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 shrink-0 gap-y-6 lg:gap-y-8">
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://picsum.photos/600?random=6"
                          alt=""
                          className="object-cover object-center w-full h-full bg-indigo-100"
                        />
                      </div>
                      <div className="h-64 overflow-hidden rounded-lg w-44">
                        <img
                          src="https://picsum.photos/600?random=7"
                          alt=""
                          className="object-cover object-center w-full h-full bg-indigo-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
