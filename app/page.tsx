import { redirect } from "next/navigation";
import { BASE_PATH } from "@/lib/affiliate";

export default function Root() {
  redirect(BASE_PATH);
}
