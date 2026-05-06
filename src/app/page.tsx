import { Button } from "../components/ui/button";


export default function Home() {
  return (
    <div>
      <p>
        home-page
      </p>
      <p className="text-sm tracking-wide p-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Iusto, velit! Ab cupiditate tempore illo, beatae quidem 
         repellat perferendis numquam voluptate provident quo 
         architecto inventore nam, excepturi sit maiores officia
          iusto non ut itaque? Veniam quae, quia architecto laborum
           atque perferendis rerum odio, error, ex totam quod alias
            expedita eaque impedit.</p>
      <Button variant={"secondary"} className="text-black">click_me</Button>
    </div>
    
  );
}
