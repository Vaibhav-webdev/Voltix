import { auth } from "../auth";
import { redirect } from "next/navigation"
import CheckoutClient from "./CheckoutClient"

const page = async () => {
    const session = await auth();
    if (!session) {
        redirect("/login");
    }
    return (
        <CheckoutClient />
    )
}
export default page