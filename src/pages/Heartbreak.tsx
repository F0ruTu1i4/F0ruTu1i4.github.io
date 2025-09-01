import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { CloudRain, Cigarette, HeartCrack, User } from "lucide-react";
import stage5Image from "@/assets/stage5-heartbreak.jpg";

const Heartbreak = () => {
  return (
    <PageLayout className="stage-5-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold stage-5-text mb-4 character-crying">
              She Left My Heart
            </h1>
            <p className="text-xl stage-5-text/80 max-w-2xl mx-auto">
              The end came suddenly, like a storm that destroys everything beautiful. 
              Now I'm left with memories and the echo of what we used to be.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={stage5Image} 
                alt="Heartbreak illustration" 
                className="w-full rounded-2xl shadow-2xl character-crying opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 rounded-2xl"></div>
              <div className="absolute top-4 left-4 tears">
                <div className="w-2 h-8 bg-blue-400/60 rounded-full"></div>
              </div>
              <div className="absolute top-8 left-8 tears" style={{animationDelay: '0.5s'}}>
                <div className="w-2 h-6 bg-blue-400/40 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="p-6 heartbreak-shadow border-0 stage-5-text">
                <div className="flex items-center gap-4 mb-4">
                  <HeartCrack className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">The Breakup</h3>
                </div>
                <p className="stage-5-text/80">
                  Words that shattered everything we built together. 
                  The moment when forever became never again.
                </p>
              </Card>

              <Card className="p-6 heartbreak-shadow border-0 stage-5-text character-crying">
                <div className="flex items-center gap-4 mb-4">
                  <User className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Alone Again</h3>
                </div>
                <p className="stage-5-text/80">
                  Back to the silence I had forgotten, 
                  remembering how heavy loneliness can feel.
                </p>
              </Card>

              <Card className="p-6 heartbreak-shadow border-0 stage-5-text">
                <div className="flex items-center gap-4 mb-4">
                  <CloudRain className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Crying in the Rain</h3>
                </div>
                <p className="stage-5-text/80">
                  Tears that match the falling rain, 
                  each drop carrying pieces of what we used to be.
                </p>
              </Card>

              <Card className="p-6 heartbreak-shadow border-0 stage-5-text">
                <div className="flex items-center gap-4 mb-4">
                  <Cigarette className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Seeking Escape</h3>
                </div>
                <p className="stage-5-text/80">
                  Trying to fill the void with smoke and shadows, 
                  anything to numb the ache where you used to be.
                </p>
              </Card>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="max-w-md mx-auto space-y-4">
              <p className="stage-5-text/60 italic text-lg">
                "Some stories don't have happy endings, but they still matter. 
                They teach us about love, loss, and the courage to feel deeply."
              </p>
              <div className="flex justify-center">
                <div className="character-heartbeat">
                  <HeartCrack className="w-12 h-12 stage-5-text/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Heartbreak;