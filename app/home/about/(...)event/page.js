import Image from "next/image";
import Link from "next/link";

export default function eventPage() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h1
            className="text-center text-4xl lg:text-5xl font-bold text-black font-heading mb-4"
            data-config-id="auto-txt-1-2"
          >
            Join our events
          </h1>
          <p
            className="text-center text-gray-600 text-lg mb-24 max-w-2xl mx-auto"
            data-config-id="auto-txt-2-2"
          >
            Engage in our events to chat about learning trends and experience
            our collaborative online learning platform first-hand.
          </p>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 p-4">
              <Link href="#">
                <div className="border border-gray-100 hover:border-orange-500 transition duration-200 rounded-2xl h-full">
                  <div className="relative" style={{ height: "220px" }}>
                    <div className="absolute top-0 left-0 z-10">
                      <svg
                        className="rounded-tl-2xl"
                        xmlns="http://www.w3.org/2000/svg"
                        width="154"
                        height="154"
                        viewBox="0 0 154 154"
                        fill="none"
                        data-config-id="auto-svg-6-2"
                      >
                        <path
                          d="M-35 79.9324V153.361C-35 153.714 -34.7141 154 -34.3615 154H16.62C16.9724 154 17.2585 153.714 17.2585 153.361V94.299C17.2585 55.5087 55.5087 17.2585 94.299 17.2585H153.361C153.714 17.2585 154 16.9724 154 16.62V-34.3615C154 -34.7139 153.714 -35 153.361 -35H79.9324C16.4572 -35 -35 16.4572 -35 79.9324Z"
                          fill="#FF7100"
                        ></path>
                      </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="152"
                        height="153"
                        viewBox="0 0 152 153"
                        fill="none"
                        data-config-id="auto-svg-7-2"
                      >
                        <path
                          d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z"
                          fill="#FF7100"
                        ></path>
                      </svg>
                    </div>
                    <Image
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-t-2xl"
                      src="/picture3.png"
                      alt=""
                      width={1000}
                      height={1000}
                      data-config-id="auto-img-3-2"
                    />
                  </div>
                  <div className="p-6">
                    <h2
                      className="font-bold font-heading mb-2"
                      data-config-id="auto-txt-11-2"
                    >
                      Online Learning Engagement
                    </h2>
                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      <p
                        className="text-gray-500 text-sm"
                        data-config-id="auto-txt-12-2"
                      >
                        August 4, 2023
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                        data-config-id="auto-svg-8-2"
                      >
                        <circle cx="2" cy="2" r="2" fill="#D1D1D1"></circle>
                      </svg>
                      <p
                        className="text-gray-500 text-sm"
                        data-config-id="auto-txt-13-2"
                      >
                        9:00 AM − 10:00 AM (1h)
                      </p>
                    </div>
                    <div
                      className="inline-block rounded-md px-2 py-1 border border-gray-100 text-gray-700 text-xs font-medium"
                      data-config-id="auto-txt-14-2"
                    >
                      Chats
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <Link href="#">
                <div className="border border-gray-100 hover:border-orange-500 transition duration-200 rounded-2xl h-full">
                  <div className="relative" style={{ height: "220px" }}>
                    <div className="absolute top-0 left-0 z-10">
                      <svg
                        className="rounded-tl-2xl"
                        xmlns="http://www.w3.org/2000/svg"
                        width="154"
                        height="154"
                        viewBox="0 0 154 154"
                        fill="none"
                        data-config-id="auto-svg-9-2"
                      >
                        <path
                          d="M-35 79.9324V153.361C-35 153.714 -34.7141 154 -34.3615 154H16.62C16.9724 154 17.2585 153.714 17.2585 153.361V94.299C17.2585 55.5087 55.5087 17.2585 94.299 17.2585H153.361C153.714 17.2585 154 16.9724 154 16.62V-34.3615C154 -34.7139 153.714 -35 153.361 -35H79.9324C16.4572 -35 -35 16.4572 -35 79.9324Z"
                          fill="#530031"
                        ></path>
                      </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="152"
                        height="153"
                        viewBox="0 0 152 153"
                        fill="none"
                        data-config-id="auto-svg-10-2"
                      >
                        <path
                          d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z"
                          fill="#530031"
                        ></path>
                      </svg>
                    </div>
                    <Image
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-t-2xl"
                      src="/picture4.png"
                      width={1000}
                      height={1000}
                      alt=""
                      data-config-id="auto-img-4-2"
                    />
                  </div>
                  <div className="p-6">
                    <h2
                      className="font-bold font-heading mb-2"
                      data-config-id="auto-txt-15-2"
                    >
                      Journaling
                    </h2>
                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      <p
                        className="text-gray-500 text-sm"
                        data-config-id="auto-txt-16-2"
                      >
                        August 4, 2023
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                        data-config-id="auto-svg-11-2"
                      >
                        <circle cx="2" cy="2" r="2" fill="#D1D1D1"></circle>
                      </svg>
                      <p
                        className="text-gray-500 text-sm"
                        data-config-id="auto-txt-17-2"
                      >
                        9:00 AM − 10:00 AM (1h)
                      </p>
                    </div>
                    <div
                      className="inline-block rounded-md px-2 py-1 border border-purple-100 bg-purple-50 text-purple-400 text-xs font-medium"
                      data-config-id="auto-txt-18-2"
                    >
                      Wellness
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <Link href="#">
                <div className="border border-gray-100 hover:border-orange-500 transition duration-200 rounded-2xl h-full">
                  <div className="relative" style={{ height: "220px" }}>
                    <div className="absolute top-0 left-0 z-10">
                      <svg
                        className="rounded-tl-2xl"
                        xmlns="http://www.w3.org/2000/svg"
                        width="154"
                        height="154"
                        viewBox="0 0 154 154"
                        fill="none"
                        data-config-id="auto-svg-12-2"
                      >
                        <path
                          d="M-35 79.9324V153.361C-35 153.714 -34.7141 154 -34.3615 154H16.62C16.9724 154 17.2585 153.714 17.2585 153.361V94.299C17.2585 55.5087 55.5087 17.2585 94.299 17.2585H153.361C153.714 17.2585 154 16.9724 154 16.62V-34.3615C154 -34.7139 153.714 -35 153.361 -35H79.9324C16.4572 -35 -35 16.4572 -35 79.9324Z"
                          fill="#FF7100"
                        ></path>
                      </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="152"
                        height="153"
                        viewBox="0 0 152 153"
                        fill="none"
                        data-config-id="auto-svg-13-2"
                      >
                        <path
                          d="M189 74.0676V0.638514C189 0.286054 188.714 0 188.361 0H137.38C137.028 0 136.742 0.286054 136.742 0.638514V59.701C136.742 98.4913 98.4914 136.742 59.701 136.742H0.638514C0.286054 136.742 0 137.028 0 137.38V188.361C0 188.714 0.286054 189 0.638514 189H74.0676C137.543 189 189 137.543 189 74.0676Z"
                          fill="#FF7100"
                        ></path>
                      </svg>
                    </div>
                    <Image
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-t-2xl"
                      src="/picture5.png"
                      alt=""
                      data-config-id="auto-img-5-2"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="p-6">
                    <h2
                      className="font-bold font-heading mb-2"
                      data-config-id="auto-txt-19-2"
                    >
                      Learners Method
                    </h2>
                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      <p
                        className="text-gray-500 text-sm"
                        data-config-id="auto-txt-20-2"
                      >
                        August 4, 2023
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                        data-config-id="auto-svg-14-2"
                      >
                        <circle cx="2" cy="2" r="2" fill="#D1D1D1"></circle>
                      </svg>
                      <p
                        className="text-gray-500 text-sm"
                        data-config-id="auto-txt-21-2"
                      >
                        9:00 AM − 10:00 AM (1h)
                      </p>
                    </div>
                    <div
                      className="inline-block rounded-md px-2 py-1 border border-orange-100 bg-orange-50 text-orange-500 text-xs font-medium"
                      data-config-id="auto-txt-22-2"
                    >
                      Producvitity
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
