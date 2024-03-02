import React from "react";

const Badge = ({ children }) => (
    <span className="bg-slate-200 text-sky-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-slate-200 dark:text-sky-700">
    {children}
    </span>
  );

const Experience = () => (
    <div id='experience' className="bg-white px-4 py-8 dark:bg-slate-900">
      <div className="container mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-12 dark:text-slate-200">Experiences</h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-2">
            <div className="bg-white hover:bg-gray-100 p-4 rounded-lg shadow-lg transition duration-300 ease-in-out dark:bg-slate-800 dark:hover:bg-slate-600">
              <h2 className="text-xl font-semibold mb-2 dark:text-slate-200">Data Engineering and Marketing Tech Intern @ <a href="https://www.disney.com/" target="_blank" className="hover:underline hover:cursor-pointer text-blue-600 dark:text-cyan-600">Disney</a></h2>
              <p className="text-gray-700 mb-4 dark:text-slate-400">Jan 2024 - Present</p>
              <div className="text-gray-600 text-sm dark:text-slate-300 text-left">
                <li className="p-2">
                Leveraged AWS(Athena, Glue) for ETL scripting, utilizing Python and Spark for marketing data processing and analytics.
                </li>
                <li className="p-2">
                Orchestrated robust CI/CD pipelines with GitLab, managing containerized applications using Docker, Kubernetes (EKS), and Nginx on AWS, ensuring optimal system performance and reliability.                </li>
                <li className="p-2">
                Developed widgets for Disney regional websites using JavaScript and jQuery to display movie showtimes.
                </li>
              </div>
              <div className="flex flex-wrap justify-center pt-2">
                <Badge>Web Dev</Badge>
                <Badge>AWS</Badge>
                <Badge>Big Data</Badge>
                <Badge>DevOps</Badge>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-2">
            <div className="bg-white hover:bg-gray-100 p-4 rounded-lg shadow-lg transition duration-300 ease-in-out dark:bg-slate-800 dark:hover:bg-slate-600">
              <h2 className="text-xl font-semibold mb-2 dark:text-slate-200">Software Engineer Intern at <a href="https://www.tech.gov.sg/" target="_blank"  className="hover:underline hover:cursor-pointer text-blue-600 dark:text-cyan-600">GovTech Singapore</a></h2>
              <p className="text-gray-700 mb-4 dark:text-slate-400">May 2023 - Dec 2023</p>
              <div className="text-gray-600 text-sm dark:text-slate-300 text-left">
                <li className="p-2">
                Engineered an advanced free-text and file anonymization solution deployed across 80 public sector agencies.
                </li>
                <li className="p-2">
                Spearheaded product development using TypeScript, NextJS, Python and AWS services(Lambda, ECR, S3, etc).
                </li>
                <li className="p-2">
                Optimized a PDF anonymizing process by implementing multithreading techniques, achieving an 80% acceleration in processing speed.
                </li>
                <li className="p-2">
                Automated AWS infrastructure deployment and scaling using Terraform, aligning with DevOps principles to enhance CI/CD pipelines and streamline release processes.
                </li>
                <li className="p-2">
                  <a href="https://medium.com/dsaid-govtech/my-internship-journey-in-dsaid-de-cloak-the-central-privacy-toolkit-2b2f9e735a26" target="_blank" className="text-blue-600 dark:text-cyan-600 hover:underline cursor-pointer">Check out my Medium article!</a>
                </li>
              </div>
              <div className="flex justify-center pt-2">
                <Badge>React</Badge>
                <Badge>Terraform</Badge>
                <Badge>Python</Badge>
                <Badge>AWS</Badge>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-2">
            <div className="bg-white hover:bg-gray-100 p-4 rounded-lg shadow-lg transition duration-300 ease-in-out dark:bg-slate-800 dark:hover:bg-slate-600">
              <h2 className="text-xl font-semibold mb-2 dark:text-slate-200">Fullstack Developer Intern @ <a href="https://www.foodline.sg/" target="_blank"  className="hover:underline hover:cursor-pointer text-blue-600 dark:text-cyan-600">Foodline.sg</a></h2>
              <p className="text-gray-700 mb-4 dark:text-slate-400">Dec 2021 - May 2022</p>
              <div className="text-gray-600 text-sm dark:text-slate-300 text-left">
                <li className="p-2">
                Employed the LAMP (Linux, Apache, MySQL, PHP) stack to drive software development and maintain robust web applications; Improved page loading speeds by 100%.
                </li>
                <li className="p-2">
                Pioneered backend and frontend features to accelerate the firm's strategic expansion into the Malaysian market by overhauling the codebase to support multiple countries and currencies.
                </li>
              </div>
              <div className="flex justify-center pt-2">
                <Badge>JavaScript</Badge>
                <Badge>PHP</Badge>
                <Badge>JQuery</Badge>
                <Badge>MySQL</Badge>
              </div>
            </div>
          </div>
  
          {/* Repeat for other cards */}
        </div>
      </div>
    </div>
  );
  
  export default Experience;
  
  
  