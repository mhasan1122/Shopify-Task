import React from 'react'
import Logo from "../assets/img/expert.png"
import Fb from "../assets/img/fb.png"
import Ins from "../assets/img/ins.png"
import Tw from "../assets/img/tw.png"
import Ln from "../assets/img/link.png"
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <div>
      <div className="mt-8 bg-white pt-9">
        <div className="mx-auto w-full max-w-7xl px-4 xl:px-0">
          <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
            <div className="md:w-[316px] ">
              <p className="text-[18px] font-medium text-black">
                <h1 className="text-black font-extrabold">
                  <img src={Logo} alt='Logo' height={100} width={100} />
                </h1>
              </p>
              <p className="mt-[18px] text-[15px] font-normal  text-[#475467] ">Scan a Turning Hearts Medallion to learn about and interact  with those who have passed on. You can also begin documenting the legacy you wish to leave behind.</p>

              <p className='mt-8 text-[#344054]'>Social Media</p>
              <div className="mt-[18px] flex gap-4">
                <Link to=""><img src={Tw} alt="X" height={24} width={24} /> </Link>
                <Link to=""><img src={Ins} alt="Instagram" height={24} width={24} /> </Link>
                <Link to=""><img src={Ln} alt="Linkedin" height={24} width={24} /> </Link>



                <Link to=""><img src={Fb} alt="Facebook" height={24} width={24} /> </Link>


              </div>
            </div>
            <div className="md:w-[316px]">
              <div className="mt-[23px] flex">

                <div className="ml-[18px]">
                  <h1 className="font-Inter text-lg  font-semibold text-black mt-8">Quick Link</h1>
                  <p className="font-Inter text-sm  text-[#344054] mt-2 "><Link to=''>Home</Link></p>
                  <p className="font-Inter text-sm  text-[#344054] mt-2 "><Link to=''>FAQ</Link></p>
                  <p className="font-Inter text-sm  text-[#344054] mt-2"><Link to=''>Country Search</Link></p>
                  <p className="font-Inter text-sm  text-[#344054] mt-2"><Link to=''>Register</Link></p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col justify-between text-black sm:flex-row md:mt-0 md:max-w-[341px]">
              <div className=" mt-16">

                <ul>
                  <li className="mt-[15px]"><a
                    className="text-[#34054] font-inter text-[15px]"
                    href="/">(316) 555-0116</a></li>
                  <li className="mt-[15px]"><a
                    className="text-[#34054]  font-inter text-[15px] "
                    href="/our-tutors">deanna.curtis@example.com</a></li>

                </ul>
              </div>

            </div>
          </div>
        </div>
        <hr className="mt-[30px] text-[#344054] font-semibold text-4xl" />
        <div className="mx-auto w-full max-w-5xl px-4 xl:px-0 text-4xl">
          <div></div> {/* Optional: Leave this empty or add something else here */}
          <p className="text-[10px] font-normal text-[#344054] md:text-[12px] text-right ">
            © [2024] Ash and Fire. All Rights Reserved
          </p>
        </div>
      </div>
    </div>




  )
}
