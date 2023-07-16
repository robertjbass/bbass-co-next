import Layout from "@/components/Layout";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export default function Work() {
  return (
    <Layout>
      <div>
        <Link
          className="flex"
          href="https://github.com/robertjbass"
          target="_blank"
        >
          <AiFillGithub className="my-auto mr-2" />
          <div className="my-auto">Stuff so cool it'll blow your mind</div>
        </Link>
      </div>
    </Layout>
  );
}
