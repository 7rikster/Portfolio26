import About from "@/components/about";

export default function AboutPage() {
    return (
        <main
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ background: "black" }}
        >
            <About showMoreButton={false} />
        </main>
    );
}