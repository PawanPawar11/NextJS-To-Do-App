import "@/styles/app.scss";
import Link from "next/link";

const header = () => {
  return (
    <div className="header">
      <div>
        <h2>Todo.</h2>
      </div>
      <article>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/login"}>Login</Link>
      </article>
    </div>
  );
};

export default header;
