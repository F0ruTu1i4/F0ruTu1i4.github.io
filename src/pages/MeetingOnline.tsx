import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, Video } from "lucide-react";
import stage1Image from "@/assets/stage1-meeting-online.jpg";

const MeetingOnline = () => {
  return (
    <PageLayout className="stage-1-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold stage-1-text mb-4 character-float">
              We Met Online
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Two hearts connecting through screens, discovering each other across digital spaces. 
              Long conversations that lasted through the night, building something beautiful.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={stage1Image} 
                alt="Meeting online illustration" 
                className="w-full rounded-2xl shadow-2xl character-float"
              />
              <div className="absolute -top-4 -right-4 character-heartbeat">
                <div className="connection-warm p-4 rounded-full">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="p-6 connection-warm border-0 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Video className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Video Calls</h3>
                </div>
                <p className="text-white/90">
                  Hours spent looking into each other's eyes through the screen, 
                  sharing stories, dreams, and building our connection.
                </p>
              </Card>

              <Card className="p-6 connection-warm border-0 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">Endless Messages</h3>
                </div>
                <p className="text-white/90">
                  Texting until sunrise, sharing our deepest thoughts, 
                  learning about each other's worlds, feeling closer with every word.
                </p>
              </Card>

              <div className="text-center pt-6">
                <Button 
                  asChild 
                  size="lg" 
                  className="love-glow text-white border-0 px-8 py-4 text-lg font-semibold"
                >
                  <Link to="/growing-closer">
                    Continue Our Story →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default MeetingOnline;