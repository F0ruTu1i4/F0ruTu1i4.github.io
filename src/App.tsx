import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MeetingOnline from "./pages/MeetingOnline";
import GrowingCloser from "./pages/GrowingCloser";
import FirstDate from "./pages/FirstDate";
import HappyTogether from "./pages/HappyTogether";
import Heartbreak from "./pages/Heartbreak";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MeetingOnline />} />
          <Route path="/growing-closer" element={<GrowingCloser />} />
          <Route path="/first-date" element={<FirstDate />} />
          <Route path="/happy-together" element={<HappyTogether />} />
          <Route path="/heartbreak" element={<Heartbreak />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
