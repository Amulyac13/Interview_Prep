import Image from "next/image";
import Link from "next/link";

export const companyLogos = [
  {
    id: "amazon",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/amazon",
  },
  {
    id: "adobe",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/adobe",
  },
  {
    id: "uber",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/uber",
  },
  {
    id: "atlassian",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/atlassian",
  },
  {
    id: "microsoft",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/microsoft",
  },
  {
    id: "oracle",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/oracle",
  },
  {
    id: "accenture",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/accenture",
  },
  {
    id: "volkswagen",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/volkswagen",
  },
  {
    id: "accolite",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/accolite",
  },
  {
    id: "nagarro",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/nagarro",
  },
  {
    id: "capgemini",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/capgemini",
  },
  {
    id: "samsung",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/samsung",
  },
  {
    id: "pwc",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/pwc",
  },
  {
    id: "bandhanBank",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/bandhanBank",
  },
  {
    id: "ibm",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/ibm",
  },
  {
    id: "eleven",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/eleven",
  },
  {
    id: "bosch_img",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/bosch_img",
  },
  {
    id: "mercedes-benz",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/mercedes-benz",
  },
  {
    id: "urban-company",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/urban-company",
  },
  {
    id: "deutsche_telekom",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/deutsche_telekom",
  },
  {
    id: "tcs",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/tcs",
  },
  {
    id: "jio",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/jio",
  },
  {
    id: "expediagroup",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/expediagroup",
  },
  {
    id: "salesforce",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/salesforce",
  },
  {
    id: "juspay",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/juspay",
  },
  {
    id: "siemens",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/siemens",
  },
  {
    id: "americanExpress",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/americanExpress",
  },
  {
    id: "booking",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/booking",
  },
  {
    id: "infoedge",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/infoedge",
  },
  {
    id: "paytm",
    url: "https://res.cloudinary.com/dbepo4xrw/image/upload/w_256,q_100,c_limit,f_auto/paytm",
  },
];

export const data = [
  { id: '1', title: 'Home' },
  { id: '2', title: 'About' },
  { id: '3', title: 'Services' },
  { id: '4', title: 'Contact' },
  { id: '5', title: 'FAQs' },
];

const Home = () => {
  return (
    <div className="mt-4 mx-auto">
      <div className="flex flex-col gap-10">
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-32 justify-center items-center">
          {/* Text Block */}
          <div className="w-full md:w-[40%] text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-[#ce0000] mb-2">
              Who are We
            </h2>
            <h1 className="text-2xl md:text-4xl font-bold leading-9 tracking-tight text-gray-900 mb-4">
              Empowering People, Enabling Dreams
            </h1>
            <p className="mt-4 text-sm md:text-lg text-slate-500 leading-relaxed">
              Unveil the essence of InterviewPrep: a community-driven platform
              dedicated to empowering students and professionals of all levels.
              Discover who we are and how we're shaping the future of education.
            </p>
          </div>

          {/* Image Block */}
          <div className="max-w-[300px] max-h-[350px]">
            <Image
              width={300}
              height={300}
              src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?w=740&t=st=1710936470~exp=1710937070~hmac=9f15d0bc75221c0e89be3213ced3278d8f35d3c33b013c45c365ae5525cdec96"
              alt="icon"
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-gray-100 justify-center items-center p-4 my-4 rounded-md text-center">
          <div className="font-bold text-lg md:text-xl text-gray-500">
            Nervous about interviews? Don’t be. Practice here and level up your
            skills. Click on the dashboard!
          </div>
          <Link href="/dashboard">
            <div className="text-lg md:text-xl font-bold underline text-blue-600 cursor-pointer">
              Dashboard
            </div>
          </Link>
        </div>
        
        <div className="flex flex-col items-center justify-center mb-6 px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Be Consistent To Place At
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 max-w-7xl w-full">
          {companyLogos.map((data, index) => (
      <div
        key={data.id}
        className={`flex justify-center ${
          index >= 12 ? 'hidden md:flex' : ''
        }`}
      >
        <Image
          src={data.url}
          alt="Company logo"
          className="w-[96px] h-[29px] object-contain"
          width={100}
          height={30}
        />
      </div>
    ))}
          </div>
        </div>

        <footer className="hidden bottom-0 md:flex flex-wrap justify-center items-center w-full min-h-[150px] gap-4 md:gap-6 border-t-2 border-[#ebd451] bg-[#fbe463] py-6">
          {data.map((item) => (
              <strong key={item.id} className="text-sm md:text-base text-gray-500">
              {item.title}
              </strong>
          ))}
      </footer>


      </div>
    </div>
  );
};

export default Home;