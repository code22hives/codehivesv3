export default function About() {
    return (
      <div className=" flex flex-col justify-center items-center w-full h-full pl-10 pr-20 pt-10 pb-20 box-border  bg-[rgba(69,67,69,1)]" id="aboutUs">
        <div className=" flex flex-col justify-center items-center w-full h-full box-border">
          <p className="  border-[#ffffffff]max-lg:text-4xl max-sm:text-2xl max-xl:text-5xl max-2xl:text-6xl leading-relaxed text-8xl   font-poppins  font-[800]  tracking-[4.8px]">
            About Us
          </p>
          <p className="text-xl font-light leading-[2] mt-6 mb-4  ">    Code Hives began with a mindset of encouraging beginner hackers to build unique projects regardless of the tech or field; the only focus was to create something meaningful and enjoy building while also solving the shared struggles of our surroundings.

          The community encouragesInclusion and Diversityat its core and has various events and happenings around the same as well to keep hackers engaged in a meaningful way. All in all, we want hackers to not just participate but experience a a good use of git and github in a true sense.
          </p>
        </div>
      </div>
    )
  }