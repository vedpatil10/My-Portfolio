import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button.tsx";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="cursor-pointer">
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer transition-all hover:scale-110"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform" />
      ) : (
        <Moon className="h-5 w-5 rotate-0 scale-100 transition-transform" />
      )}
    </Button>
  );
}
