import MainLayout from '@/components/layouts/main';
import Menu from '@/components/menu/Menu';
import Navigation from '@/components/navigation';

export default function Home() {
  return (
    <MainLayout>
      <Navigation />
      <Menu />
    </MainLayout>
  );
}
