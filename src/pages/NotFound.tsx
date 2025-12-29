import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted leaf-pattern">
      <div className="text-center p-8">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
          <span className="text-5xl font-black text-primary">٤٠٤</span>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-foreground">الصفحة غير موجودة</h1>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          عذراً، الصفحة التي تبحث عنها غير موجودة. قد تكون قد نُقلت أو حُذفت.
        </p>
        <Button asChild>
          <a href="/">
            <Home className="w-5 h-5" />
            العودة للرئيسية
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;