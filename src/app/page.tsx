import Button from "./components/ui/Button";
import BaseLayout from "./shared/layouts/BaseLayout";
import FeatureCard from "@/app/components/ui/FeatureCard";
import Image from "next/image";
import ContentCard from "@/app/components/ui/ContentCard";

export default function Home() {

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
                <p className={"text-xl text-foreground-secondary text-center mb-16 mt-3 mx-4"}>Everything you need to create
                    engaging content on any topic</p>
                <div
                    className={
                        "grid grid-cols-1 sm:grid-cols-[repeat(2,_minmax(0,_max-content))] xl:grid-cols-[repeat(auto-fit,_minmax(0,_max-content))] justify-items-center justify-center gap-5"
                    }
                >
                    <FeatureCard
                        title={"AI-Powered Generation"}
                        description={
                            "Create content automatically from any topic using advanced AI"
                        }
                        icon={
                            <Image
                                src={"/icons/Robot.svg"}
                                alt={"Robot logo"}
                                width={67}
                                height={67}
                            />
                        }
                    />
                    <FeatureCard
                        title={"Trend Analysis"}
                        description={
                            "Stay updated with real-time trends and news across various domains"
                        }
                        icon={
                            <Image
                                src={"/icons/TrendUp.svg"}
                                alt={"Trend logo"}
                                width={67}
                                height={67}
                            />
                        }
                    />
                    <FeatureCard
                        title={"Multi-Domain Coverage"}
                        description={
                            "Generate content for any industry, niche, or subject matter"
                        }
                        icon={
                            <Image
                                src={"/icons/World.svg"}
                                alt={"World logo"}
                                width={67}
                                height={67}
                            />
                        }
                    />
                    <FeatureCard
                        title={"Multi-format Export"}
                        description={
                            "Generate content in various formats ready to share on any platform"
                        }
                        icon={
                            <Image
                                src={"/icons/Share.svg"}
                                alt={"Share logo"}
                                width={67}
                                height={67}
                            />
                        }
                    />
                </div>
            </section>
            {/* Content Generator */}
            <section className="min-h-screen">
                <h2 className="text-center">Content Generator</h2>
                <p></p>
                <p className={"text-xl text-foreground-secondary text-center mb-16 mt-3 mx-4"}>Try our AI-powered content generator now</p>
                <div
                    className={
                        "grid grid-cols-1 sm:grid-cols-[repeat(2,_minmax(0,_max-content))] xl:grid-cols-[repeat(auto-fit,_minmax(0,_max-content))] justify-items-center justify-center gap-5"
                    }
                >
                    <ContentCard isSelected title={"Text Content"} icon={
                        <Image
                            src={"/icons/Text.svg"}
                            alt={"Text logo"}
                            width={45}
                            height={45}
                        />
                    }
                    />
                    <ContentCard isPremium title={"Short Video"} icon={
                        <Image
                            src={"/icons/Video.svg"}
                            alt={"Video logo"}
                            width={40}
                            height={40}
                        />
                    }
                    />
                    <ContentCard isPremium title={"X Thread"} icon={
                        <Image
                            src={"/icons/X.svg"}
                            alt={"X logo"}
                            width={45}
                            height={45}
                        />
                    }
                    />
                    <ContentCard title={"Meme"} icon={
                        <Image
                            src={"/icons/Ghost.svg"}
                            alt={"Ghost logo"}
                            width={45}
                            height={50}
                        />
                    }
                    />
                </div>

            </section>
            {/* Trending */}
            {/* Pricing */}
        </BaseLayout>
    );
}