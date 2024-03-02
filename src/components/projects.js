const LogoList = ({ logos }) => (
    <div className="flex space-x-1 justify-between pt-3 center">
        {logos && Array.isArray(logos) && logos.map((logo, index) => (
            <img key={index} className="w-8 h-8" src={`${logo}.png`} alt={logo} />
        ))}
    </div>
);


const ProjectCard = ({ title, description, imageUrl, content, content1, content2, logos, link }) => (
    <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out dark:bg-slate-800 dark:hover:bg-slate-700 gap-2">
        <div className="mb-2 text-left lg:pl-10 lg:py-10">
            <div className="text-blue-600 font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 dark:text-gray-300 text-base font-semibold">{description}</p>
            <div className="bg-slate-100 dark:bg-sky-900 rounded">
                <li className="text-gray-700 dark:text-gray-300 text-base p-1">{content}</li>
                <li className="text-gray-700 dark:text-gray-300 text-base p-1">{content1}</li>
                <li className="text-gray-700 dark:text-gray-300 text-base p-1">{content2}</li>
            </div>
            {/* logos of tech used here */}
            <LogoList logos={logos} />
        </div>
        <div className="flex-col">
            <img className="rounded-lg mt-4 w-full sm:w-2/3 md:w-2/3 lg:w-4/5 xl:w-4/5 h-3/4 max-w-full" src={imageUrl} alt={title} />
            <div className="mt-4 flex-col justify-end">
                <a href={link} target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">View Project</a>
            </div>
        </div>

    </div>
);

const Projects = () => (
    <div id="projects" className="py-12 dark:bg-slate-900">
        <h2 className="text-4xl lg:text-6xl font-bold mb-12 dark:text-slate-200">My Projects</h2>
        <p className="text-lg dark:text-slate-400 mb-12">
            Here are some of the projects I have worked on during my internships, school or externally. Click on the project to view more details.
        </p>
        <div className="grid grid-cols-1 gap-8 lg:px-20 md:px-20 sm:px-10">
            <ProjectCard
                title="GovTech Singapore"
                description="File Anonymization System"
                content="Created a system that anonymizes CSV, PDF, and Word documents, reducing the time taken to anonymize documents by 80%."
                content1="For CSV files, a Lambda function was used to read and process the file before sending each row to an AWS Simple Queue Service(SQS) which then triggers another Lambda function that reads the messages from the message queue, before calling the analyser and anonymiser endpoints."
                content2="For PDF files, the system converts them to XML files before extracting the text and anonymizing them - preserving the layout of the file."
                imageUrl="govtech.png"
                logos={["react", "aws", "python", "docker", "kubernetes", "terraform", "gitlab"]}
                link="https://www.cloak.gov.sg/"

            />
            <ProjectCard
                title="Disney"
                description="Movies Showtime Widget"
                content="Developed widgets for Disney regional websites using JavaScript and jQuery to display movie showtimes. Movie showtimes were retrieved from a third-party API and displayed on the website, before being sorted by the user's location."
                content1="Adobe Analytics was used to track the number of clicks on the showtimes widget, and the data was stored in a data lake(S3) before being processed by AWS Glue(PySpark) and Athena."
                content2="Salesforce Marketing Cloud Intelligence(Datorama) was used to visualize the data and create reports. "
                imageUrl="showtimes.png"
                logos={["sql", "aws", "python", "javascript", "salesforce", "adobe"]}
                link="https://www.disney.com/movies"
            />
            <ProjectCard
                title="Foodline.sg"
                description="Overseas Expansion"
                content="Expanded Foodline.sg into the Malaysian market, overhauled codebase and implemented new features to cater to the Malaysian market."
                content1="Removed all hardcoded values and implemented a new system to handle multiple currencies and languages."
                content2="Employed the LAMP (Linux, Apache, MySQL, PHP) stack to drive software development and manage the website."
                imageUrl="foodline.png"
                logos={["javascript", "sql", "php", "jquery"]}
                link="https://www.foodline.sg"

            />
            <ProjectCard
                title="Final Year Project"
                description="Nearbyou App"
                content="Nearbyou is a mobile application designed to help users find peaceful and quiet places in urban environments, offering geotagging, path creation, and private chatting functionalities."
                content1="Continuation project from a previous student. Previously, the entire backend was coded in a single file using FastAPI as a monolith, making it difficult to maintain and scale. I used AWS Lambda, API Gateway, DynamoDB and other AWS services to create the microservices."
                content2="Improved the frontend of the app by using Flutter, which allowed for a single codebase to be used for both iOS and Android. The app was previously only available on Android."
                imageUrl="nearbyou.png"
                logos={["flutter", "dart", "aws", "python", "docker"]}
                link="https://github.com/lxuanhui/nearbyou"

            />
            <ProjectCard
                title="Machine Learning Project"
                description="Sberbank Russian Housing Market Kaggle Machine Learning Competition"
                content="Developed a predictive model for the Sberbank Russian Housing Market, leveraging Python, LightGBM, and Optuna, achieving high accuracy in housing price predictions."
                content1="Performed extensive data cleaning and feature engineering, including handling missing values, encoding categorical variables, and creating new features."
                content2="Optimized the model using Optuna, a hyperparameter optimization framework, to achieve the best model performance."
                imageUrl="kaggle.png"
                logos={["python", "pandas", "numpy"]}
                link="https://colab.research.google.com/drive/1QZx4NTGsd1xlNpc7G2c_iY8_f0yTzq-D?usp=sharing"
            />
            {/* ...other projects */}
        </div>
    </div>
);

export default Projects;
