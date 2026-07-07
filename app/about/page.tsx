import { createPage } from "@/lib/page-factory";

const { metadata, Page } = createPage({ name: "about", path: "/about/" });
export { metadata };
export default Page;
