import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Sun, Moon } from "lucide-react";
import stage2Image from "@/assets/stage2-growing-closer.jpg";

const GrowingCloser = () => {
  return (
    <PageLayout className="stage-2-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold stage-2-text mb-4 character-float">
              Sometimes Later
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Days turned into weeks, weeks into months. Our connection deepened, 
              growing stronger with each passing moment. Distance meant nothing when hearts were so close.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="p-6 connection-warm border-0 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Sun className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Good Morning Texts</h3>
                </div>
                <p className="text-white/90">
                  Every sunrise brought your message, making each day brighter. 
                  Your words became the coffee that awakened my soul.
                </p>
              </Card>

              <Card className="p-6 connection-warm border-0 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Countless Hours</h3>
                </div>
                <p className="text-white/90">
                  Time became meaningless when we talked. Hours felt like minutes, 
                  and every conversation left me wanting more.
                </p>
              </Card>

              <Card className="p-6 connection-warm border-0 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Moon className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Goodnight Wishes</h3>
                </div>
                <p className="text-white/90">
                  Even in sleep, you were my last thought. 
                  Your voice became the lullaby that carried me to dreams.
                </p>
              </Card>
            </div>

            <div className="relative">
              <img 
                src={stage2Image} 
                alt="Growing closer illustration" 
                className="w-full rounded-2xl shadow-2xl character-heartbeat"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="love-glow text-white border-0 px-8 py-4 text-lg font-semibold"
            >
              <Link to="/first-date">
                Our First Meeting →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default GrowingCloser;