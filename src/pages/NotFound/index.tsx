import { AlertCircle, ChevronLeft, Home } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground p-4">
      <div className="max-w-lg w-full space-y-8">
        <h1 className="text-8xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          404
        </h1>

        <Alert variant="default">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Page Not Found</AlertTitle>
          <AlertDescription>
            The page you are looking for doesn't exist or has been moved.
          </AlertDescription>
        </Alert>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            className="group"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="h-4 w-4 group-hover:translate-x-[-2px] transition-transform" />
            Go Back
          </Button>

          <Button
            variant="default"
            className="group"
            onClick={() => (window.location.href = "/")}
          >
            <Home className="h-4 w-4 group-hover:scale-110 transition-transform" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
