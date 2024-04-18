import React from 'react'

const MyHeader = () => {
    return (
        <div className='relative'>
            <div className="max-w-[1440px] mx-auto md:px-[34px] px-4 min-h-[100vh] mt-11 pb-[75px] relative flex flex-col items-start lg:justify-end">
                <a href="#" className='border rounded-full flex items-center gap-x-2 group py-1 px-2 ff-matter max-w-[450px] duration-500 hover:bg-gray-200'> <span className='bg-[#ff6154] -ml-1 px-2 py-1 text-xs font-medium text-white rounded-full'>NEW</span>Cal.com Platform is live on Product Hunt <span className='group-hover:ml-[3px] duration-300'>{">"}</span></a>
                <p className='ff-matter max-w-[556px] mt-5 mb-6 text-[22px]'>Meet <span className='ff-cal'>Cal.com</span>, the event-juggling scheduler for everyone. Focus on meeting, not making meetings. Free for individuals.</p>
                <h1 className='ff-cal leading-[104%] md:text-[75px] lg:text-[79px] text-shadow-gray !text-[clamp(52px,_7.45vw,_114px)] xl:text-[clamp(52px,_7.8vw,_114px)]'><span className='block'>Scheduling</span>
                    infrastructure for <span className='text-shadow-black text-shadow text-gray-50'>everyone.</span></h1>
                    {/*===============Form================= */}
                <form className='mt-5 flex w-full max-w-[450px] flex-col gap-6 md:max-w-none md:flex-row'>
                    <div className="border-black text-[22px] shadow-fill shadow-input-shrink flex h-[63px] w-full overflow-hidden rounded-[32px] border-[2px] bg-gray-50 leading-[26px] transition-all duration-500 ease-in-out will-change-transform active:translate-y-[2px] active:duration-100 md:h-[90px]">
                        <div className="ff-cal border-black flex h-full place-items-center justify-center border-r-2 border-dashed bg-neutral-200 pl-8 pr-6 md:min-w-[209px] md:px-0">
                            <span>cal.com/</span>
                        </div>
                        <input className="ff-matter text-[22px] h-full w-full border-none bg-gray-50 p-0 px-4 pb-[2px] font-medium focus:shadow-none md:px-9" type="text" name="username" placeholder="RickAstley" required />
                    </div>
                    <button className='rounded-[34px] ff-matter text-[18px] flex items-center justify-center px-8 py-4 font-semibold uppercase leading-none border-primary-700 active:shadow-input-shrink border-2 transition-all  ease-in-out will-change-transform hover:translate-y-[-2px] active:translate-y-[2px] active:duration-100 md:h-[90px] text-white group mx-auto h-full w-full bg-[#2C2C30] md:w-auto md:min-w-[220px] lg:min-w-[295px] duration-500'>Claim username <span className='group-hover:ml-[30px] flex duration-500 ml-[25px]'><span className='group-hover:flex hidden'>-</span>{">"}</span></button>
                </form>
                {/*===================== card ==================*/}
                <div className="relative bottom-[43%] mx-auto mt-7 w-full max-w-[450px] rounded-[38px] border-2 border-gray-200 p-1 md:mt-14 md:max-w-[550px] lg:absolute lg:mt-0 lg:w-[38vw] lg:max-w-[705px] xl:w-[45vw] right-[0%] flex text-black">
                    <div className="min-w-32 h-auto border-neutral-200 p-6 md:p-5 lg:w-[40vw] lg:min-w-[42%] lg:!max-w-[286px] lg:border-b-0 lg:p-6 lg:border-r-2">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg></span>
                        <p className='text-sm text-neutral-600 xl:text-base ff-matter'>Rick Astley</p>
                        <h4 className='ff-cal mb-2 block text-lg xl:mb-5 xl:text-2xl'>Get Rickrolled</h4>
                        <div className="flex flex-col gap-2 text-xs font-medium lg:gap-3 xl:text-sm">
                            <div className="flex gap-1 lg:gap-2">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                </svg></span>
                                <p className='ff-matter'>Book me and I will never give you up. Cal will never let you down. Open Source will never run around and desert you.</p>
                            </div>
                            <div className="flex gap-1 lg:gap-2">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                </svg></span>
                                <p className='ff-matter'>30 min</p>
                            </div>
                            <div className="flex gap-1 lg:gap-2">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg></span>
                                <p className='ff-matter'>Zoom</p>
                            </div>
                            <div className="flex gap-1 lg:gap-2">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                </svg></span>
                                <p className='ff-matter'>Europe / Dublin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyHeader
