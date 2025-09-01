import { ReactNode } from "react";
import Navigation from "./Navigation";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen ${className}`}>
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;