/* eslint-disable react/prop-types */
const Footer = (props) => {


    return (
        <>
            <div id="contact" className="py-[min(18vw,8rem)] px-[clamp(1rem,4vw,3.4rem)] bg-[var(--light)] text-[var(--dark)] flex flex-col items-center text-center justify-center gap-[min(3vw,3rem)]">
                <div id="contact-text">
                    <p className="text-[min(7vw,8rem)] leading-[1] max-w-[100rem] tracking-[max(-.2vw,-.25rem)] overflow-hidden"><span className="inline-block">You have a beautiful</span></p>
                    <p className="text-[min(7vw,8rem)] leading-[1] max-w-[100rem] tracking-[max(-.2vw,-.25rem)] overflow-hidden"><span className="inline-block">project? Let&#39;s talk</span></p>
                    <p className="text-[min(7vw,8rem)] leading-[1] max-w-[100rem] tracking-[max(-.2vw,-.25rem)] overflow-hidden"><span className="inline-block"><font>around a </font>
                        <a className="underline-text inline-block leading-[.95] relative after:block after:h-[min(.5vw,.5rem)] after:w-full after:bg-[var(--dark)] after:absolute after:left-0 after:top-[96%] after:origin-right after:hover:origin-left after:scale-x-0 after:hover:scale-x-[1] after:transition-transform after:duration-[1.2s]" href="mailto:uncafe@wethinkelastic.com" title="uncafe@wethinkelastic.com" >Good coffee</a></span></p>
                </div>
                <div id="gif" className="h-[clamp(11.25rem,29.779vw,19.5623rem)] w-[clamp(11.25rem,29.779vw,19.5623rem)] pointer-events-none overflow-hidden relative">
                    <img className="absolute left-0 bottom-0 w-[clamp(11.25rem,29.779vw,19.5623rem)] object-cover block" src="https://wethinkelastic.com/assets/images/cafe.gif" />
                </div>
            </div>
            <div className="uppercase text-[var(--light)] flex items-center text-[min(7.5vw,10.4rem)] tracking-[-.15vw] leading-[1] w-screen px-[clamp(1rem,2vw,2.5rem)] pt-[min(18vw,7.5rem)] pb-[min(3.5vw,2.6rem)]">
                <p className="opacity-[.4]">next/</p>
                <a className="underline-text  inline-block leading-[.95] relative after:block after:h-[min(.5vw,.25rem)] after:w-full after:bg-[var(--light)] after:absolute after:left-0 after:top-[96%] after:origin-right after:hover:origin-left after:scale-x-0 after:hover:scale-x-[1] after:transition-transform after:duration-[1.2s]" href="https://wethinkelastic.com/projets.html" title="projects" >{props.data}</a>
            </div>
            <footer className="px-[clamp(1rem,2vw,2.5rem)]">
                <ul className="text-[white] grid grid-cols-1 min-[480px]:grid-cols-2 min-[480px]:gap-x-[6rem] lg:flex lg:flex-row lg:justify-around lg:gap-0  flex-wrap gap-y-[0.7rem] flex-col">
                    <li className="text-[clamp(0.6rem,2vw,0.72rem)] tracking-[.04rem] w-fit cursor-pointer lg:order-2">
                        <a href="https://wethinkelastic.com/assets/pdf/mentions-legales-WTE.pdf " target="_blank">Legal</a></li>
                    <li className="text-[clamp(0.6rem,2vw,0.72rem)] tracking-[.04rem] w-fit lg:order-1">© 2024 WethinkElastic</li>
                    <li className="text-[clamp(0.6rem,2vw,0.72rem)] tracking-[.04rem] w-fit lg:order-3">
                        <a href="mailto:uncafe@wethinkelastic.com">uncafe@wethinkelastic.com</a></li>
                    <li className="text-[clamp(0.6rem,2vw,0.72rem)] tracking-[.04rem] w-fit lg:order-4">
                        <a href="https://www.linkedin.com/company/wethinkelastic/">Our new</a></li>
                    <li className="text-[clamp(0.6rem,2vw,0.72rem)] tracking-[.04rem] w-fit lg:order-5">
                        <a href="https://wethinkelastic.com/#tarteaucitron">Cookies</a></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer