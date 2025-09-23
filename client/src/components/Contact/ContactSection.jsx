import { Clock, MapPinCheckInside, Phone } from "lucide-react";

const ContactForm = () => (
    <form className="flex w-full flex-col gap-5 md:w-1/2">
        <div>
            <label className="mb-2 block font-poppins text-base font-medium" htmlFor="name">Your Name</label>
            <input className="block w-full rounded-md border border-[#9f9f9f] p-5 outline-none" id="name" type="text" placeholder="Abc" />
        </div>
        <div>
            <label className="mb-2 block font-poppins text-base font-medium" htmlFor="email">Email Address</label>
            <input className="block w-full rounded-md border border-[#9f9f9f] p-5 outline-none" id="email" type="email" placeholder="Abc@gmail.com" />
        </div>
        <div>
            <label className="mb-2 block font-poppins text-base font-medium" htmlFor="subject">Subject</label>
            <input className="block w-full rounded-md border border-[#9f9f9f] p-5 outline-none" id="subject" type="text" placeholder="This is an optional field" />
        </div>
        <div>
            <label className="mb-2 block font-poppins text-base font-medium" htmlFor="message">Message</label>
            <textarea className="block min-h-[100px] w-full resize-none rounded-md border border-[#9f9f9f] p-5 outline-none" id="message" placeholder="Hi! I’d like to ask about..." />
        </div>
        <button className="mt-5 w-full rounded-md bg-primary px-5 py-3 font-poppins text-base font-semibold text-white transition-colors duration-200 hover:bg-[#bd9946]">Submit</button>
    </form>
);

const ContactInfo = () => (
    <div className="flex w-full flex-col gap-10 md:w-1/2">
        <div>
            <div className="flex items-center gap-2">
                <MapPinCheckInside />
                <h2 className="font-poppins text-lg font-semibold text-black md:text-2xl">
                    Address
                </h2>
            </div>
            <p className="mt-2 pl-10 font-poppins text-base text-[#9f9f9f]">
                236 5th SE Avenue, New York NY10000, United States
            </p>
        </div>
        <div>
            <div className="flex items-center gap-2">
                <Phone />
                <h2 className="font-poppins text-lg font-semibold text-black md:text-2xl">
                    Phone
                </h2>
            </div>
            <p className="mt-2 pl-10 font-poppins text-base text-[#9f9f9f]">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
            </p>
        </div>
        <div>
            <div className="flex items-center gap-2">
                <Clock />
                <h2 className="font-poppins text-lg font-semibold text-black md:text-2xl">
                    Working Time
                </h2>
            </div>
            <p className="mt-2 pl-10 font-poppins text-base text-[#9f9f9f]">
                Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
            </p>
        </div>
    </div>

);

const ContactSection = () => (
    <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col gap-2 text-center">
            <h1 className="font-poppins text-2xl font-semibold text-black md:text-[36px]">Get In Touch With Us</h1>
            <p className="text-text-xs md:text-text-sm mx-auto max-w-[644px] font-poppins text-base text-[#9F9F9F]">
                For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
        </div>
        <div className="mt-5 flex flex-col gap-10 md:flex-row md:gap-5">
            <ContactInfo />
            <ContactForm />
        </div>
    </div>
);

export { ContactSection };
