import ListMenu from "./ListMenu";

const Menu = () => {
  return (
    <div className="grid md-grid-cols-1 gap-2">
      <ListMenu
        title="Pemilihan HMP-TI FTI UNISKA"
        description="HMP-TI FTI UNISKA 2024"
        content="pemilihan Ketua Umum HMP-TI UNISKA periode 2024 - 2025"
        href="/bilik/hmpti"
        logo={"/logo-hmpti.png"}
      />
      <ListMenu
        title="Pemilihan HMP-SI FTI UNISKA"
        description="HMP-SI FTI UNISKA 2024"
        content="pemilihan Ketua Umum HMP-SI UNISKA periode 2024 - 2025"
        href="/bilik/hmpsi"
        logo={"/logo-hmpsi.png"}
      />
      <ListMenu
        title="Pemilihan BEM FTI UNISKA"
        description="BEM FTI UNISKA 2024"
        content="pemilihan Gubernur BEM FTI UNISKA periode 2024 - 2025"
        href="/bilik/bem"
        logo={"/bem-fti.png"}
      />
    </div>
  );
};

export default Menu;
