import dynamic from "next/dynamic";

// Dynamically import your original Page component and disable SSR
const Page = dynamic(() => import("./page"), { ssr: false });

export default Page;
