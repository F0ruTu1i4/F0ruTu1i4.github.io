import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const stages = [
    { path: "/", label: "Meeting Online", number: 1 },
    { path: "/growing-closer", label: "Growing Closer", number: 2 },
    { path: "/first-date", label: "First Date", number: 3 },
    { path: "/happy-together", label: "Happy Together", number: 4 },
    { path: "/heartbreak", label: "Heartbreak", number: 5 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Love Story
          </h1>
          
          <div className="flex gap-2">
            {stages.map((stage) => (
              <Button
                key={stage.path}
                variant={location.pathname === stage.path ? "default" : "ghost"}
                size="sm"
                asChild
                className={cn(
                  "transition-all duration-300",
                  location.pathname === stage.path && "shadow-md"
                )}
              >
                <Link to={stage.path}>
                  <span className="hidden sm:inline">{stage.label}</span>
                  <span className="sm:hidden">{stage.number}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;