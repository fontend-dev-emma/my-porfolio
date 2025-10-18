import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border border-white/5 bg-white/10 backdrop-blur-md shadow-sm hover:bg-slate/300 dark:bg-[#0b1221]/60 dark:border-white/10 dark:hover:bg-[#0b1221]/80 transition-all duration-300"
        >
          <Sun className="h-6 w-6 text-yellow-400 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="h-6 w-6 text-slate-300 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="mt-2 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md text-sm shadow-lg dark:bg-[#0b1221]/70 dark:border-white/10 transition-all duration-300"
      >
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer hover:bg-white/20 dark:hover:bg-white/10">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer hover:bg-white/20 dark:hover:bg-white/10">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer hover:bg-white/20 dark:hover:bg-white/10">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ModeToggle;
