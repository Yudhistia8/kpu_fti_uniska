import MainLayout from "@/components/layouts/main";
import Navigation from "@/components/navigation";

const BilikLayout = ({ children }) => {
  return (
    <MainLayout>
      <div className="w-full mt-14 p-4">{children}</div>
      <Navigation />
    </MainLayout>
  );
};

export default BilikLayout;
