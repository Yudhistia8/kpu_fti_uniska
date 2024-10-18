import MainLayout from "@/components/layouts/main";
import Menu from "@/components/menu/Menu";
import Navigation from "@/components/navigation";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <MainLayout>
      <Navigation />
      <Menu />
      <Navbar />
    </MainLayout>
  );
}
