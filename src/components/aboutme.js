import React from "react";

const AboutMe = () => (
    <div id="aboutme" className="bg-white px-2 sm:px-4 py-6 sm:py-8 mt-10 dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center">
            <div className="flex-1 text-left">
                <p className="text-lg sm:text-xl font-bold dark:text-cyan-600">
                    Hello, I'm{" "}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold dark:text-slate-200">
                    <span className="text-blue-600 dark:text-slate-200">Xuanhui.</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl mt-3 mb-4 dark:text-slate-200">
                    Or you can call me{" "}
                    <span className="text-blue-600 dark:text-cyan-600">Sean!</span>
                </p>
                <p className="text-base sm:text-lg leading-relaxed dark:text-slate-400">
                    I am currently a software engineer at{" "}
                    <span className="text-blue-600 font-semibold dark:text-cyan-600">
                        United Overseas Bank
                    </span>
                    . My passion lies in{" "}
                    <span className="text-blue-600 font-semibold dark:text-cyan-600">
                        software engineering
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-600 font-semibold dark:text-cyan-600">
                        data engineering
                    </span>
                    .
                </p>
                <p className="text-base sm:text-lg leading-relaxed dark:text-slate-400 mt-3">
                    I love building data pipelines, creating web applications, and turning complex problems into elegant solutions. When I'm not coding, you'll find me exploring new technologies and working on personal projects that combine my interests in data and web development.
                </p>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <a href="https://www.linkedin.com/in/xuanhui-lee" target="_blank" rel="noreferrer" className="rounded p-3 sm:p-4 dark:hover:bg-slate-800 transition duration-300">
                        <img src="icons8-linkedin.svg" alt="LinkedIn" className="w-8 h-8 sm:w-10 sm:h-10" />
                    </a>
                    <a href="https://github.com/lxuanhui" target="_blank" rel="noreferrer" className="rounded p-3 sm:p-4 dark:hover:bg-slate-800 transition duration-300">
                        <img src="icons8-github.svg" alt="GitHub" className="w-8 h-8 sm:w-10 sm:h-10" />
                    </a>
                    <a href="mailto:xuanhui98@email.com" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 text-sm sm:text-base">
                        Contact Me
                    </a>
                </div>
            </div>
            <div className="flex-1 mt-6 sm:mt-8 lg:mt-0 flex justify-center lg:justify-end">
                <img
                    src="/Programming-pana.svg"
                    alt="Programming illustration"
                    className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
                    style={{ height: "auto" }}
                />
            </div>
        </div>
    </div>
);

export default AboutMe;
