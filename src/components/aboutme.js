import React from "react";

const AboutMe = () => (
    <div id="aboutme" className="bg-white px-4 py-8 mt-10 dark:bg-slate-900">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="flex-1 text-left">
                <p className="text-xl lg:text-xl font-bold dark:text-cyan-600">
                    Hello, I'm{" "}
                </p>
                <h1 className="text-4xl lg:text-6xl font-bold dark:text-slate-200">
                    <span className="text-blue-600 dark:text-slate-200">Xuanhui.</span>
                </h1>
                <p className="text-xl lg:text-2xl mt-3 mb-4 dark:text-slate-200">
                    Or you can call me{" "}
                    <span className="text-blue-600 dark:text-cyan-600">Sean!</span>
                </p>
                <p className="text-lg leading-relaxed dark:text-slate-400">
                    I am a final year computer science major at{" "}
                    <span className="text-blue-600 font-semibold dark:text-cyan-600">
                        Nanyang Technological University
                    </span>
                    . Currently, I am a data engineering intern at{" "}
                    <a
                        href="https://www.disney.com/"
                        target="_blank"
                        className="text-blue-600 text-bold dark:text-cyan-600" rel="noreferrer"
                    >
                        Disney
                    </a>
                    , where I work on building ETL pipielines to process and transform
                    marketing data for analytics and reporting. At Disney, I also work on
                    improving DevOps processes and CI/CD pipelines. Occasionally, I also
                    work on ad-hoc web development projects for Disney.
                </p>
                <div className="mt-4 flex items-center space-x-4">
                    <a href="https://www.linkedin.com/in/xuanhui-lee" target="_blank" rel="noopener noreferrer" className="rounded p-4 dark:hover:bg-slate-800">
                        <img src="icons8-linkedin.svg" alt="LinkedIn" className="w-10 h-10" />
                    </a>
                    <a href="https://github.com/lxuanhui" target="_blank" rel="noopener noreferrer" className="rounded p-4 dark:hover:bg-slate-800">
                        <img src="icons8-github.svg" alt="GitHub" className="w-10 h-10" />
                    </a>
                    <a href="mailto:xuanhui98@email.com" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
                        Contact Me
                    </a>
                </div>

            </div>
            <div className="flex-1 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                <img
                    src="/Programming-pana.svg"
                    alt="test"
                    className="w-full lg:max-w-lg max-w-md object-cover"
                    style={{ height: "auto" }}
                />
            </div>
        </div>
    </div>
);

export default AboutMe;
