import React from "react";

const Badge = ({ children }) => (
    <span className="bg-slate-200 text-sky-700 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-slate-200 dark:text-sky-700">
    {children}
    </span>
  );

const Experience = () => (
    <div id='experience' className="bg-white px-2 sm:px-4 py-6 sm:py-8 dark:bg-slate-900">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 dark:text-slate-200">Experiences</h1>
        <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {/* Card 1 - UOB (Newest) */}
          <div className="w-full lg:w-1/2 px-1 sm:px-2">
            <div className="bg-white hover:bg-gray-100 p-3 sm:p-4 rounded-lg shadow-lg transition duration-300 ease-in-out dark:bg-slate-800 dark:hover:bg-slate-600 h-full">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 dark:text-slate-200 leading-tight">
                DevOps Engineer @ <a href="https://www.uobgroup.com/" target="_blank" rel="noreferrer" className="hover:underline hover:cursor-pointer text-blue-600 dark:text-cyan-600 break-words">United Overseas Bank (UOB)</a>
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base dark:text-slate-400">Apr 2025 - Present</p>
              <div className="text-gray-600 text-xs sm:text-sm dark:text-slate-300 text-left space-y-2">
                <li className="p-1 sm:p-2 leading-relaxed">
                Contributed to enterprise Java Spring Boot applications in production, implementing fixes and enhancements that improved application stability and performance.
                </li>
                <li className="p-1 sm:p-2 leading-relaxed">
                Enhanced Jenkins pipelines to streamline builds, testing, and multi-environment deployments, reducing manual deployment effort.
                </li>
                <li className="p-1 sm:p-2 leading-relaxed">
                Managed system updates and deployments (CRQs, Aldon path mappings) across dev, UAT, and production, ensuring governance and audit compliance.
                </li>
              </div>
              <div className="flex flex-wrap justify-center pt-3 sm:pt-4">
                <Badge>Java</Badge>
                <Badge>Spring Boot</Badge>
                <Badge>Jenkins</Badge>
                <Badge>DevOps</Badge>
              </div>
            </div>
          </div>
          
          {/* Card 2 - Disney */}
          <div className="w-full lg:w-1/2 px-1 sm:px-2">
            <div className="bg-white hover:bg-gray-100 p-3 sm:p-4 rounded-lg shadow-lg transition duration-300 ease-in-out dark:bg-slate-800 dark:hover:bg-slate-600 h-full">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 dark:text-slate-200 leading-tight">
                Data Engineering and Marketing Tech Intern @ <a href="https://www.disney.com/" target="_blank" rel="noreferrer" className="hover:underline hover:cursor-pointer text-blue-600 dark:text-cyan-600 break-words">Disney</a>
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base dark:text-slate-400">Jan 2024 - Present</p>
              <div className="text-gray-600 text-xs sm:text-sm dark:text-slate-300 text-left space-y-2">
                <li className="p-1 sm:p-2 leading-relaxed">
                Engineered ETL processes using AWS Athena and Glue, employing Python and Spark for data transformation, and integrating Datorama and Adobe Analytics to enhance marketing data analytics and visualization.
                </li>
                <li className="p-1 sm:p-2 leading-relaxed">
                Orchestrated ETL pipelines using Apache Airflow, designing and managing DAGs to automate Python scripts for extracting data from TikTok Business Center APIs and Pixels. Extracted data into an AWS S3 data lake, transformed it with AWS Glue, utilized AWS Athena as a data warehouse for querying and analysis.
                </li>
                <li className="p-1 sm:p-2 leading-relaxed">
                Designed and implemented a CI/CD pipeline using GitLab CI/CD, Docker, Kubernetes, and Nginx on AWS.
                </li>
                <li className="p-1 sm:p-2 leading-relaxed">
                Developed dynamic widgets for Disney's regional websites in JavaScript and jQuery to showcase movie showtimes, enhancing user engagement; also expanded site functionality using PHP and ReactJS for various microsites.
                </li>
              </div>
              <div className="flex flex-wrap justify-center pt-3 sm:pt-4">
                <Badge>Web Dev</Badge>
                <Badge>AWS</Badge>
                <Badge>Big Data</Badge>
                <Badge>DevOps</Badge>
              </div>
            </div>
          </div>
          
          {/* Card 3 - GovTech */}
          <div className="w-full lg:w-1/2 px-1 sm:px-2">
            <div className="bg-white hover:bg-gray-100 p-3 sm:p-4 rounded-lg shadow-lg transition duration-300 ease-in-out dark:bg-slate-800 dark:hover:bg-slate-600 h-full">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 dark:text-slate-200 leading-tight">
                Software Engineer Intern at <a href="https://www.tech.gov.sg/" target="_blank" rel="noreferrer" className="hover:underline hover:cursor-pointer text-blue-600 dark:text-cyan-600 break-words">GovTech Singapore</a>
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base dark:text-slate-400">May 2023 - Dec 2023</p>
              <div className="text-gray-600 text-xs sm:text-sm dark:text-slate-300 text-left space-y-2">
                <li className="p-1 sm:p-2 leading-relaxed">
                Engineered an advanced free-text and file anonymization solution deployed across 80 public sector agencies.
                </li>
                <li className="p-1 sm:p-2 leading-relaxed">
                Spearheaded product development using TypeScript, NextJS, Python and AWS services(Lambda, ECR, S3, etc).
                </li>
                <li className="p-1 sm:p-2 leading-relaxed">
                Optimized a PDF anonymizing process by implementing multithreading techniques, achieving an 80% acceleration in processing speed.
                </li>
                <li className="p-1 sm:p-2 leading-relaxed">
                Automated AWS infrastructure deployment and scaling using Terraform, aligning with DevOps principles to enhance CI/CD pipelines and streamline release processes.
                </li>
                <li className="p-1 sm:p-2 leading-relaxed">
                  <a href="https://medium.com/dsaid-govtech/my-internship-journey-in-dsaid-de-cloak-the-central-privacy-toolkit-2b2f9e735a26" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-cyan-600 hover:underline cursor-pointer break-words">Check out my Medium article!</a>
                </li>
              </div>
              <div className="flex flex-wrap justify-center pt-3 sm:pt-4">
                <Badge>React</Badge>
                <Badge>Terraform</Badge>
                <Badge>Python</Badge>
                <Badge>AWS</Badge>
              </div>
            </div>
          </div>
          
          {/* Card 4 - Foodline */}
          <div className="w-full lg:w-1/2 px-1 sm:px-2">
            <div className="bg-white hover:bg-gray-100 p-3 sm:p-4 rounded-lg shadow-lg transition duration-300 ease-in-out dark:bg-slate-800 dark:hover:bg-slate-600 h-full">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 dark:text-slate-200 leading-tight">
                Fullstack Developer Intern @ <a href="https://www.foodline.sg/" target="_blank" rel="noreferrer" className="hover:underline hover:cursor-pointer text-blue-600 dark:text-cyan-600 break-words">Foodline.sg</a>
              </h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base dark:text-slate-400">Dec 2021 - May 2022</p>
              <div className="text-gray-600 text-xs sm:text-sm dark:text-slate-300 text-left space-y-2">
                <li className="p-1 sm:p-2 leading-relaxed">
                Employed the LAMP (Linux, Apache, MySQL, PHP) stack to drive software development and maintain robust web applications; Improved page loading speeds by 100%.
                </li>
                <li className="p-1 sm:p-2 leading-relaxed">
                Pioneered backend and frontend features to accelerate the firm's strategic expansion into the Malaysian market by overhauling the codebase to support multiple countries and currencies.
                </li>
              </div>
              <div className="flex flex-wrap justify-center pt-3 sm:pt-4">
                <Badge>JavaScript</Badge>
                <Badge>PHP</Badge>
                <Badge>JQuery</Badge>
                <Badge>MySQL</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default Experience;
  
  
  