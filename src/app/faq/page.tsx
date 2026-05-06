import Faq from "@/components/Faq";


const page = () => {
  return (
    <div>
      <h1 className="flex justify-center items-center py-8 lg:py-10 text-2xl lg:text-4xl">Your Question Our Answer
         <span className="text-2xl md:text-3xl text-lightSky">.</span></h1>
      <Faq />
    </div>
  )
}

export default page
