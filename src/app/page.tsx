import Image from 'next/image'
import fiverrImage from '../../public/fiverr.png'
import cyBorg from '../../public/cyborg.png'

export default function Home() {
  return (
    <div className='text-white max-w-4xl m-auto font-lato'>
        <div className='flex justify-center space-x-2 mt-40' id="about">
            <div className='rounded-md shadow-2xl border-2 border-gray-600 self-center'>
                <Image src={cyBorg} alt="pic"width={100} height={100} />
            </div>
            <div className="flex flex-col">
                <span>
                <h2 className="text-4xl inline-block tracking-tight font-extrabold text-gray-900 dark:text-white">Hiresh Bremanand</h2><h2 className='inline-block ml-3 text-lg tracking-tight font-extrabold text-gray-900 dark:text-white'>/ஹிரேஷ் பிரேமானந்த்/</h2>
                </span>
                <p className="font-light underline text-gray-500 sm:text-xl dark:text-gray-400">Tech/AI enthusiast, Programmer, Freelancer</p>
                <p className="font-light text-gray-600 sm:text-lg">Interested in creating tech for the better. Pitiless on the past and optimistic about the future.</p>
            </div>
        </div>

        <div id="ideas" className='flex flex-col items-center space-y-5 mt-40 text-center'>
            <div className="w-[100%] flex flex-col text-center mt-28">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Ideas</h2>
                <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">I have an idea, and I build it!</p>
            </div>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BookLab (Coming soon)</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Collaborative book reading platform, where you could read and write collaboratively. Ask questions and explore topics like never before.</p>
                </div>
            </a>
        </div>
        
        <div id="projects" className='flex flex-row flex-wrap justify-center mt-40'>
                <div className="w-[100%] flex flex-col text-center mt-28">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Projects</h2>
                    <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">View my live production-ready projects!</p>
                </div>
            <div className="flex flex-col p-6 bg-gradient-to-tr from-indigo-500 from-10 to-sky-500 rounded-lg shadow w-72 m-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Job Agency Website</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Job recruitement agency site, built using Next.js and TailwindCSS. Deployed on Netlify.</p>
                <a target='_blank' href="https://anseljobs.com/" className="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View
                    <svg className="w-3.5 h-3.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            <div className="flex flex-col p-6 bg-gradient-to-tr from-indigo-500 from-10 to-sky-500 rounded-lg shadow w-72 m-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Immigration Services</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Built using Wix website builder. Login feature along with Blogs section implemented. Contact form integrated at bottom.</p>
                <a target='_blank' href="https://www.anselimmigration.com/" className="inline-flex justify-end w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View
                    <svg className="w-3.5 h-3.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            <div className="flex flex-col p-6 bg-gradient-to-tr from-indigo-500 from-10 to-sky-500 rounded-lg shadow w-72 m-5 ">
                <a href="https://github.com/hireshBrem">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Other Projects...</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">All my projects are posted on my Github. Pull the repos, if you like them, star it! Any issues with the recent repos? Let me know.</p>
                <a target='_blank' href="https://github.com/hireshBrem" className="inline-flex w-fit justify-end items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View
                    <svg className="w-3.5 h-3.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>

        </div>
        
        <div className='mt-40'>
        <section id="services" className="bg-white dark:bg-gray-900 text-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Services</h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">View what I have to offer you!</p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div className="border-2 border-sky-500 rounded-md p-5">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Build your Next.js App</h3>
                        <p className="text-gray-500 dark:text-gray-400">Responsive UI/UX applications built with precision. SEO-friendly apps to upgrade your google rankings.</p>
                    </div>
                    <div className="border-2 border-sky-500 rounded-md p-5">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Co-founder</h3>
                        <p className="text-gray-500 dark:text-gray-400">Have a startup idea? Lets collaborate and have fun building!</p>
                    </div>
                    <div className="border-2 border-sky-500 rounded-md p-5">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Mentor</h3>
                        <p className="text-gray-500 dark:text-gray-400">Interested in learning tech and programming but have no experience at all? Let me help you get started! </p>
                    </div>
                </div>
            </div>
            </section>
        </div>

        <div className='mt-40'>
        <section id='testimonials' className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Testimonials</h2>
                    <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Hear what other people say!</p>
                </div> 
                <div className="flex flex-wrap justify-center">
                    <figure className="flex flex-col w-[50%] justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Custom Website</h3>
                            <p className="my-4">"Absolutely Brilliant, I will be recommending him to my friends!."</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <Image className="rounded-full" src={fiverrImage} width={60} height={60} alt="profile picture" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>@knowledgequeen</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Client on Fiverr</div>
                            </div>
                        </figcaption>    
                    </figure>
                    
                </div>
            </div>
            </section>
        </div>

    </div>
  )
}
