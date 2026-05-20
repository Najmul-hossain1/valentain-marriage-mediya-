// import BlogItem from "@/components/BlogItem";
// import Bloglist from "@/components/Bloglist";
import Container from "@/components/Container";
import HomePageBlogList from "@/components/HomePageBlogList";
import Packageses from "@/components/Packageses";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <Container className="py-10">
        {/* <BlogItem /> */}
        <HomePageBlogList />
        <Packageses />
        <div className="flex justify-center items-center mt-3">
            <Button
              asChild
              className=" px-4 py-1 text-white/80 hover:text-white bg-blue-600/80 hover:bg-blue-600
          hoverEffect mt-5 md:mt-6"
            >
              <Link href={"/packages"}>View all</Link>
            </Button>
        </div>
        {/* Blog Items */}
        
      </Container>
    </main>
  );
}
