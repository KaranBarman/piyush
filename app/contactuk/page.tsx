import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const page = () => {
  return (
    <form className="flex items-center gap-4">
      <Label>Email</Label>
      <Input type="email" placeholder="Email" className="w-32" />
    </form>
  );
};

export default page;
