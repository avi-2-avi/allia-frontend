import Button from "./components/ui/Button";
import Alert from "@/app/components/data-display/Alert";
import BaseLayout from "./shared/layouts/BaseLayout";

export default function Home() {
  return (
      <BaseLayout>
        {/* Hero */}
        <section className="mt-24">
          <h1>Engage Your Audience with AI-Generated Content</h1>
          <p className={"subheading"}>Create compelling content on any topic in seconds. Powered by AI, designed for content creators.</p>
          <Button text={"Butoncito"} style={"PRIMARY"}/>
          <div className={"flex flex-col space-y-2 p-2"}>
            <Alert label={"Esto es tan xdddd"} type={"warning"}/>
            <Alert label={"Esto es tan xdddd"} type={"error"}/>
          </div>
        </section>
        {/* Features */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center">Features</h2>
          <h3>AI-Powered Generation</h3>
            <h4>xDDD</h4>
        </section>
        {/* Features */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center">Content Generator</h2>
        </section>
      </BaseLayout>
    );
}