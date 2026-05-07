import Faq from "@/components/Faq";
import Container from './../../components/Container';


const page = () => {
  return (
    <div className="">
      <Container>
        <h1 className="flex justify-center items-center py-8 lg:py-10 text-xl lg:text-4xl">Your Question Our Answer
         <span className="text-2xl md:text-3xl text-lightSky">.</span></h1>
      </Container>
       <Faq />
    </div>
  )
}

export default page
