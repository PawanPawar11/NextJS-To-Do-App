import "@/styles/app.scss";
import Link from "next/link";
import { LogoutBtn } from "@/components/Clients";

const header = () => {
  return (
    <div className="header">
      <div>
        <h2>Todo.</h2>
      </div>
      <article>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <LogoutBtn />
      </article>
    </div>
  );
};

export default header;
