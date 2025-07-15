import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Phases } from '@/components/Phases';
import { Footer } from '@/components/Footer';
import FlowchartAnimation from '@/components/FlowchartAnimation';
import ChatAnimation from '@/components/ChatAnimation';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The Phased HR Maturity Model
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Hairpin AI provides a clear, structured path for your HR needs. Our model is designed to scale with you, ensuring you have the right frameworks at every stage of your growth.
              </p>
            </div>
            <div className="mt-16">
              <FlowchartAnimation />
            </div>
          </div>
        </section>
        <Phases />
        <section className="py-20 sm:py-32 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your AI-Powered HR Co-Pilot
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                From complex compliance questions to routine HR tasks, Hairpin AI is always ready to assist. See how our AI can streamline your workflow and provide instant, accurate HR guidance.
              </p>
            </div>
            <div className="mt-16">
              <ChatAnimation />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 