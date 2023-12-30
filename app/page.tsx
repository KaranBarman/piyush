import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button className="flex gap-2" variant={"link"}>
        Delete <Trash2 />
        <Link href={"contactuk"}>Contact me</Link>
      </Button>
    </div>
  );
}
