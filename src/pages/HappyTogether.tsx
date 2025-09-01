import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Star, Infinity, Sparkles } from "lucide-react";
import stage4Image from "@/assets/stage4-happy-together.jpg";

const HappyTogether = () => {
  return (
    <PageLayout className="stage-4-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold stage-4-text mb-4 character-float">
              Happy Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The golden days when everything felt perfect. Love filled every moment, 
              and the future seemed bright with endless possibilities together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="p-6 joy-radiant border-0 text-white character-heartbeat">
                <div className="flex items-center gap-4 mb-4">
                  <Heart className="w-6 h-6 fill-current" />
                  <h3 className="text-2xl font-semibold">Pure Love</h3>
                </div>
                <p className="text-white/90">
                  Every day felt like a fairy tale. Your love made me believe 
                  in forever, in dreams coming true, in perfect happiness.
                </p>
              </Card>

              <Card className="p-6 joy-radiant border-0 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Star className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Magical Moments</h3>
                </div>
                <p className="text-white/90">
                  Each shared experience became a treasured memory, 
                  stars in the constellation of our beautiful story.
                </p>
              </Card>

              <Card className="p-6 joy-radiant border-0 text-white character-hugging">
                <div className="flex items-center gap-4 mb-4">
                  <Infinity className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Forever Promise</h3>
                </div>
                <p className="text-white/90">
                  We talked about always, about a future painted in colors 
                  so bright they could light up the darkest nights.
                </p>
              </Card>

              <Card className="p-6 joy-radiant border-0 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Sparkles className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Pure Joy</h3>
                </div>
                <p className="text-white/90">
                  Laughter echoed through our days, happiness so complete 
                  it felt like we were living in a beautiful dream.
                </p>
              </Card>
            </div>

            <div className="relative">
              <img 
                src={stage4Image} 
                alt="Happy together illustration" 
                className="w-full rounded-2xl shadow-2xl character-heartbeat"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 rounded-2xl"></div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="heartbreak-shadow text-white border-0 px-8 py-4 text-lg font-semibold opacity-80 hover:opacity-100 transition-opacity"
            >
              <Link to="/heartbreak">
                But then... →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HappyTogether;