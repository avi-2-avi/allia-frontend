import Button from "./components/ui/Button";
import BaseLayout from "./shared/layouts/BaseLayout";
import FeatureCard from "@/app/components/ui/FeatureCard";
import Image from "next/image";
import Generator from "@/app/components/content/Generator";

export default function Home() {

    // Feature data
    const features = [
        {
            title: "AI-Powered Generation",
            description: "Create content automatically from any topic using advanced AI",
            icon: "/icons/Robot.svg",
        },
        {
            title: "Trend Analysis",
            description: "Stay updated with real-time trends and news across various domains",
            icon: "/icons/TrendUp.svg",
        },
        {
            title: "Multi-Domain Coverage",
            description: "Generate content for any industry, niche, or subject matter",
            icon: "/icons/World.svg",
        },
        {
            title: "Multi-format Export",
            description: "Generate content in various formats ready to share on any platform",
            icon: "/icons/Share.svg",
        },
    ]

    return (
        <BaseLayout>
            {/* Hero */}
            <section className="flex min-h-screen items-center py-20">
                <div className={"max-w-[800px] mx-auto px-4"}>
                    <h1 className={"mb-10"}>Engage Your Audience with AI-Generated Content</h1>
                    <p className={"subheading mb-20"}>Create compelling content on any topic in seconds. Powered by AI,
                        designed for content creators.</p>
                    <div
                        className={"flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5 justify-center items-center"}>
                        <Button className={"w-44"} text={"Try it now"} style={"PRIMARY"}/>
                        <Button className={"w-44"} text={"Learn More"} style={"TERTIARY"}/>
                    </div>
                </div>
            </section>
            {/* Features */}
            <section className="min-h-screen py-20">
                <h2 className="text-center">Features</h2>
                <p className={"text-xl text-foreground-secondary text-center mb-16 mt-3 mx-4"}>Everything you need to
                    create
                    engaging content on any topic</p>
                <div
                    className={
                        "grid grid-cols-1 sm:grid-cols-[repeat(2,_minmax(0,_max-content))] xl:grid-cols-[repeat(auto-fit,_minmax(0,_max-content))] justify-items-center justify-center gap-5"
                    }
                >
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={
                                <Image
                                    src={feature.icon}
                                    alt={`${feature.title} logo`}
                                    width={67}
                                    height={67}
                                />
                            }
                        />
                    ))}
                </div>
            </section>
            {/* Content Generator */}
            <section className="min-h-screen">
                <h2 className="text-center">Content Generator</h2>
                <p></p>
                <p className={"text-xl text-foreground-secondary text-center mb-16 mt-3 mx-4"}>Try our AI-powered
                    content generator now</p>
                <Generator/>
            </section>
            {/* Trending */}
            {/* Pricing */}
        </BaseLayout>
    );
}