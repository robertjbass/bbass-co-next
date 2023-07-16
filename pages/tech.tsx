import { useState } from "react";
import Layout from "@/components/Layout";

const allTechnologies = [
  {
    name: "TypeScript",
    preferred: true,
    tags: ["frontend", "backend", "language", "web"],
    description: "favorite and most used language",
  },
  {
    name: "JavaScript",
    preferred: true,
    tags: ["frontend", "backend", "language", "web"],
    description: "proficient but prefer typescript",
  },
  {
    name: "React",
    preferred: true,
    tags: ["frontend", "framework", "web"],
    description: "favorite frontend framework",
  },
  {
    name: "Vue.js",
    preferred: true,
    tags: ["frontend", "framework", "web"],
    description: "years of professional experience",
  },
  {
    name: "Node.js",
    preferred: true,
    tags: ["backend", "web"],
    description: "favorite and most used runtime",
  },
  {
    name: "Express",
    preferred: true,
    tags: ["backend", "web", "framework"],
    description: "favorite backend framework",
  },
  {
    name: "Next.js",
    preferred: false,
    tags: ["frontend", "backend", "framework", "web"],
    description: "used for this website",
  },
  {
    name: "Nuxt.js",
    preferred: false,
    tags: ["frontend", "backend", "framework", "web"],
    description: "used professionally",
  },
  {
    name: "Tailwind CSS",
    preferred: true,
    tags: ["frontend", "web", "framework"],
    description: "favorite way to style",
  },
  {
    name: "MySQL",
    preferred: true,
    tags: ["database"],
    description: "most used relational database",
  },
  {
    name: "PostgreSQL",
    preferred: true,
    tags: ["database"],
    description: "first pick for relational databases",
  },
  {
    name: "Firestore",
    preferred: true,
    tags: ["database"],
    description: "favorite document database",
  },
  {
    name: "Firebase",
    preferred: true,
    tags: ["platform"],
    description: "favorite platform for auth",
  },
  {
    name: "AWS",
    preferred: false,
    tags: ["platform"],
    description: "used professionally",
  },
  {
    name: "Zeet",
    preferred: true,
    tags: ["platform"],
    description: "favorite devops and containerization platform",
  },
  {
    name: "Python",
    preferred: false,
    tags: ["language"],
    description: "some experience, willing to learn more",
  },
  {
    name: "Golang",
    preferred: false,
    tags: ["language"],
    description: "some experience, willing to learn more",
  },
  {
    name: "SQL",
    preferred: false,
    tags: ["language"],
    description: "comfortable with relational databases",
  },
  {
    name: "OpenAI",
    preferred: true,
    tags: ["platform"],
    description: "experienced with chat and autocomplete apis",
  },
  {
    name: "GitHub",
    preferred: true,
    tags: ["platform"],
    description: "favorite git platform",
  },
  {
    name: "CSS",
    preferred: false,
    tags: ["frontend", "web"],
    description: "comfortable but prefer tailwind",
  },
  {
    name: "HTML",
    preferred: false,
    tags: ["frontend", "web"],
    description: "competent",
  },
  {
    name: "Docker",
    preferred: false,
    tags: ["platform"],
    description: "comfortable enough, willing to learn more",
  },
  {
    name: "Linux",
    preferred: false,
    tags: ["platform"],
    description: "comfortable enough, willing to learn more",
  },
  {
    name: "Electron",
    preferred: false,
    tags: ["framework"],
    description: "most used desktop app framework",
  },
  {
    name: "Bash",
    preferred: false,
    tags: ["language"],
    description: "comfortable to get around",
  },
];

const tags = [
  "all",
  "web",
  "frontend",
  "backend",
  "language",
  "framework",
  "database",
  "platform",
];

export default function Tech() {
  const [filter, setFilter] = useState<null | string>(null);
  const technologies = allTechnologies.filter((item) => {
    if (filter === null || filter === "all") {
      return true;
    }
    return item.tags.includes(filter);
  });

  return (
    <Layout>
      <div
        style={{
          height: "calc(100dvh - 5rem)",
          paddingTop: "5rem",
        }}
        className="w-full flex flex-col sm:items-start md:items-center transition-all"
      >
        <div className="mb-8">
          <div className="w-full flex flex-wrap">
            <label className="my-auto mr-2 font-semibold">Filter:</label>
            <select
              className="bg-black focus:outline-none text-white text-xs w-24 m-4 text-left"
              onChange={(e) => setFilter(e.target.value)}
            >
              {tags.map((tag) => (
                <option key={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex">
          <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((item) => (
              <div key={item.name} className="col-span-1 p-2 w-72">
                <div className="">
                  <div className="text-2xl font-bold">{item.name}</div>
                  {item.preferred ? (
                    <div className="text-sm text-pink-200 h-6">Preferred</div>
                  ) : (
                    <div id="spacer" className="block h-6" />
                  )}
                </div>
                Experience:
                <div className="text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
