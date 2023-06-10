import Image from "next/image";

export default function Footer() {
    return (
     
<footer className=" bg-[#040101] xxs:w-[575px] w-full h-full">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center">
                  <Image src={'/logo.png'} 
                  className="h-8 mr-3"
                   alt=" Logo"
                   height={32}
                   width={32} />
                      </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-8 sm:grid-cols-3 xxs:w-[575px] w-full h-full">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Social Links</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://instagram.com/code.hives?igshid=MzRlODBiNWFlZA=="  target="#"                  className="hover:underline">Instagram</a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/code-hives-gecp-0830a9250" target="#" className="hover:underline">LinkeIn </a>
                      </li>
                      <li>
                          <a href="https://youtube.com/@codehives8821"  target="#" className="hover:underline">Youtube </a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Email</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4"> 
                          <a href="mailto:code.hives@gecptan.ac.in"  target="#" className="hover:underline ">code.hives@gecptan.ac.in</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Address</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                       C.S.E. Department, Government Engineering College, Patan -
              384265 At & Post Katpur.
                      </li>
                      <li>
                          <a href="#"  target="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Code Hives</a>. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>

    )
  }