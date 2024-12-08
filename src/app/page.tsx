import Button from "./components/ui/Button";
import BaseLayout from "./shared/layouts/BaseLayout";

export default function Home() {
    return (
        <BaseLayout>
            {/* Hero */}
            <section className="flex h-screen mt-24 items-center">
                <div className={"w-[800px] mx-auto"}>
                    <h1 className={"mb-10"}>Engage Your Audience with AI-Generated Content</h1>
                    <p className={"subheading mb-20"}>Create compelling content on any topic in seconds. Powered by AI,
                        designed for content creators.</p>
                    <div className={"flex flex-row space-x-5 justify-center"}>
                        <Button className={"w-44"} text={"Try it now"} style={"PRIMARY"}/>
                        <Button className={"w-44"} text={"Learn More"} style={"TERTIARY"}/>
                    </div>
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