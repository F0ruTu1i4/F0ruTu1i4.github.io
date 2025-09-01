import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Coffee, Heart, Hand } from "lucide-react";
import firstDateHero from "@/assets/first-date-hero.jpg";
import firstDateWalking from "@/assets/first-date-walking.jpg";
import firstDateCafe from "@/assets/first-date-cafe.jpg";
import firstDateHug from "@/assets/first-date-hug.jpg";

const FirstDate = () => {
  return (
    <PageLayout className="stage-3-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold stage-3-text mb-4 character-float">
              Our First Date
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The moment we'd both dreamed of finally arrived. Two souls meeting in person, 
              nervous excitement filling the air, and magic happening with every step together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src={firstDateHero} 
                alt="Perfect first date illustration" 
                className="w-full rounded-2xl shadow-2xl character-walking"
              />
              <div className="absolute -bottom-4 -left-4 character-heartbeat">
                <div className="love-glow p-4 rounded-full">
                  <Heart className="w-8 h-8 text-white fill-current" />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="p-6 love-glow border-0 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Walking Together</h3>
                </div>
                <p className="text-white/90">
                  Side by side through the city streets, every step in sync, 
                  discovering that being together felt like coming home.
                </p>
              </Card>

              <Card className="p-6 love-glow border-0 text-white character-hugging">
                <div className="flex items-center gap-4 mb-4">
                  <Hand className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Holding Hands</h3>
                </div>
                <p className="text-white/90">
                  The first touch, fingers intertwining perfectly, 
                  as if they were meant to fit together all along.
                </p>
              </Card>

              <Card className="p-6 love-glow border-0 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Coffee className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Sharing Meals</h3>
                </div>
                <p className="text-white/90">
                  Every bite tasted better shared with you, 
                  conversations flowing as naturally as our connection.
                </p>
              </Card>
            </div>
          </div>

          {/* Image Gallery Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="relative group">
              <img 
                src={firstDateWalking} 
                alt="Walking hand in hand" 
                className="w-full h-64 object-cover rounded-xl shadow-lg character-walking group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl flex items-end">
                <p className="text-white p-4 font-semibold">Our First Walk</p>
              </div>
            </div>
            
            <div className="relative group">
              <img 
                src={firstDateCafe} 
                alt="Sharing meals together" 
                className="w-full h-64 object-cover rounded-xl shadow-lg character-heartbeat group-hover:scale-105 transition-transform duration-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl flex items-end">
                <p className="text-white p-4 font-semibold">Cozy Cafe Moments</p>
              </div>
            </div>
            
            <div className="relative group">
              <img 
                src={firstDateHug} 
                alt="Tender embrace" 
                className="w-full h-64 object-cover rounded-xl shadow-lg character-hugging group-hover:scale-105 transition-transform duration-310"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl flex items-end">
                <p className="text-white p-4 font-semibold">First Embrace</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg" 
              className="joy-radiant text-white border-0 px-8 py-4 text-lg font-semibold"
            >
              <Link to="/happy-together">
                Love Blooms →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FirstDate;