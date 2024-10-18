import Link from "next/link";

const NavLink = ({ href, icon, ...props }) => {
  return (
    <Link href={href} {...props}>
      <div className="flex flex-col justify-center m-auto items-center">
        <span className="font-bold">{icon}</span>
      </div>
    </Link>
  );
};

export default NavLink;
