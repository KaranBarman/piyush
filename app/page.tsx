import { Button } from "@/components/ui/button";
import { Contact2, Instagram, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button className="flex gap-2" variant={"link"}>
        Delete <Trash2 />
        <Link href={"contactuk"}>
          Contact piyush <Contact2 />
        </Link>
        <Link
          href={"https://www.instagram.com/piyushgupta2308/"}
          className="flex gap-4 items-center"
        >
          Find me on instagram <Instagram />
        </Link>
      </Button>
    </div>
  );
}
