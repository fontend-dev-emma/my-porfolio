import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function Header() {
  return (
    <header className="">
      <MobileHeader />
      <DesktopHeader />
    </header>
  );
}

export default Header;
