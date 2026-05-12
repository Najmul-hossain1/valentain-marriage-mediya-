import Container from "@/components/Container";
import Image from "next/image";
import contactImage from "@/images/image.png";
import profileImage from "@/images/OtkT23103127.jpg";
import successImage from "@/images/hA4F23110122.jpg";
import groupMettingImage from "@/images/CN4v23110154.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaUserEdit } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";

const page = () => {
  return (
    <Container>
      <div className="py-8">

        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 tracking-tighter font-bold">
          How Our Matchmaking Service Works?
        </h1>
        <h3 className="text-xl md:text-2xl pt-2 tracking-tighter leading-6 md:mb-4">
          Valentain Marriage Media Offers a Personalized Macthmaking Service for
          you.
        </h3>
        <h2 className="text-2xl font-bold py-5 md:pb-6 tracking-tighter">
          . Personal Matchmaking Advisor
        </h2>
        <p className="text-sm opacity-80 tracking-tight">
          A skilled matchmaker will help you for find a life partner as per your
          choice. He will do the job responsibly on your behalf. And he will
          understand your inner preference for the life partner.
        </p>

        <div className="py-8">
          <Image
            className="p-4 w-100 md:w-1/2"
            src={contactImage}
            alt="contactImage"
          />
          <Button
            className="px-4 py-2 text-white/80 hover:text-white bg-blue-600/80 hover:bg-blue-600
          hoverEffect ml-2 mt-2 md:mt-4"
          >
            <Link className="flex gap-2 text-center" href={"/contact"}><LuPhoneCall /> Contact Us</Link>
          </Button>
        </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold py-5 tracking-tighter">
            . Profile Creation
          </h2>
          <p className="text-sm opacity-80 tracking-tight py-4 md:pb-6">
            Our Expert team will create your Pefect Profile for the Matchmaking.
            They will take your personal and family information to make the
            Verified Profile. We really care about our clients Profile Details
            and Privacy. We are committed to take our clients details safe.
          </p>
          <Image
            className="p-4 w-100 md:w-1/2"
            src={profileImage}
            alt="profileImage"
          />
          <Button
            className="px-4 py-2 text-white/80 hover:text-white bg-blue-600/80 hover:bg-blue-600
          hoverEffect ml-2 mt-2 md:mt-4"
          >
            <Link className="flex gap-2" href={"/login"}><FaUserEdit /> Register Now</Link>
          </Button>
        </div>

        <div className="pt-6">
          <h2 className="text-3xl font-bold py-5 tracking-tighter">
            . Handpick Profile Selection
          </h2>
          <p className="text-sm opacity-80 tracking-tight py-4 md:pb-6">
            According to your preferance and profile we matched the perfect
            profile for matchmaking. They are always ready to give the expected
            profile to the clients. Our Matchmakers is really experienced and
            expert to define the perfect profile for you. Our team is consious
            about every clients preferance for choosing the life partner.
          </p>
          <Image
            className="p-4 w-100 md:w-1/2"
            src={successImage}
            alt="successImage"
          />
          <Button
            className="px-4 py-3 text-white/80 hover:text-white bg-blue-600/80 hover:bg-blue-600
          hoverEffect ml-2 mt-2 md:mt-4"
          >
            <Link className="flex gap-2" href={"/success"}> <GiClick /> See our success</Link>
          </Button>
        </div>

        <div className="py-6">
          <h2 className="text-3xl font-bold py-5 tracking-tighter">
            . Arranging Meetings
          </h2>
          <p className="text-sm opacity-80 tracking-tight py-4 md:pb-6">
            After Matching the Profiles we arrange the meetings between Bride
            and Grooms Family. Mainly we arrange the meetings in our Official
            special Meeting Zone.{" "}
            <span className="font-extrabold opacity-100">
              We bear all the costs responsibilites of the meeting. We really
              care about our clients privacy first. Our dedicated team will
              arrange the safe and qualityfull meeting environment for you.{" "}
            </span>
          </p>
          <Image
            className="p-4 w-100 md:w-1/2"
            src={groupMettingImage}
            alt="groupMettingImage"
          />
          <Button
            className="px-4 py-2 text-white/80 hover:text-white bg-blue-600/80 hover:bg-blue-600
          hoverEffect ml-2 mt-2 md:mt-4"
          >
            <Link className="flex gap-2" href={"/contact"}><FaLocationDot /> Visit Us</Link>
          </Button>
        </div>
        
      </div>
    </Container>
  );
};

export default page;
