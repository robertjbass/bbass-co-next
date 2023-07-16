import Layout from "@/components/Layout";
import { AiOutlineMail, AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout>
      <div>
        <Link className="flex" href="mailto:bob@bbass.co">
          <AiOutlineMail className="my-auto mr-2" />
          <div className="my-auto">bob@bbass.co</div>
        </Link>

        <Link
          className="flex"
          href="https://linkedin.com/in/bbass9490"
          target="_blank"
        >
          <AiOutlineLinkedin className="my-auto mr-2" />
          <div className="my-auto">LinkedIn</div>
        </Link>

        <Link
          className="flex"
          href="https://github.com/robertjbass"
          target="_blank"
        >
          <AiFillGithub className="my-auto mr-2" />
          <div className="my-auto">GitHub</div>
        </Link>
      </div>
    </Layout>
  );
}
