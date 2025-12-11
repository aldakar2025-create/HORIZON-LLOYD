import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import About from "@/pages/About";
import Certificates from "@/pages/Certificates";
import PlaceholderPage from "@/components/PlaceholderPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Placeholder Pages */}
      <Route path="/career">
        <PlaceholderPage title="Under Construction" />
      </Route>
      <Route path="/clients">
        <PlaceholderPage title="Under Construction" />
      </Route>
      <Route path="/projects">
        <PlaceholderPage title="Under Construction" />
      </Route>
      <Route path="/services">
        <PlaceholderPage title="Under Construction" />
      </Route>
      <Route path="/certificates" component={Certificates} />
      <Route path="/about" component={About} />

      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
