
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 px-4 mt-auto text-center text-sm text-muted-foreground">
      <div className="flex items-center justify-center gap-1">
        <span>Created with</span>
        <Heart className="h-3 w-3 fill-red-500 text-red-500" />
        <span>using Lovable</span>
      </div>
    </footer>
  );
};

export default Footer;
