const Footer = () => (
    <div id='footer' className="px-4 py-4 bg-slate-100 dark:bg-gray-800 dark:text-gray-200">
        <div className="container mx-auto flex justify-between ">
            <p className="text-xs">
                Sean, 2024
            </p>
            <p className="text-xs">
                Built with <span className='text-blue-600'>ReactJS</span> and <span className='text-blue-600'>TailwindCSS</span>. <br/> Deployed with <span className='text-blue-600'>AWS</span>.
                <br/> <a href="https://storyset.com/web" className='text-blue-600'>Web illustrations by Storyset</a>
            </p>
        </div>
    </div>
);

export default Footer;
