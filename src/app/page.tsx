import Interests from "@/markdown/interests.mdx";
import Skills from "@/markdown/skills.mdx";
import Current from "@/markdown/current.mdx";
import Past from "@/markdown/past.mdx";
import Repos from "@/markdown/repos.mdx";

export default function Home() {
  return (
    <main className="container">
      <div className="flex flex-col sections">
        <div className="section">
          <div>
            <h1 className="text-5xl">my homepage heading</h1>
          </div>
        </div>
        <div className="section">
          <Interests />
        </div>
        <div className="section">
          <Skills />
        </div>
        <div className="section">
          <Current />
        </div>
        <div className="section">
          <Past />
        </div>
        <div className="section">
          <Repos />
        </div>
      </div>
    </main>
  );
}
