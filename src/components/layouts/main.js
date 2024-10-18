const MainLayout = ({ children }) => {
  return (
    <section className="m-auto w-full h-full max-w-xl min-h-screen bg-gray-100/90 relative overflow-x-scroll py-16 px-4">
      {children}
    </section>
  );
};

export default MainLayout;
