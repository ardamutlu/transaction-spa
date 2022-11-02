import React from "react";
import Header from "./Header";

type Props = React.HTMLProps<HTMLDivElement>;

const Layout: React.FC<Props> = ({ children }) => (
  <div className="bg-slate-100 h-screen">
    <Header />
    <div className="mx-auto max-w-7xl mt-10">{children}</div>
  </div>
);

export default Layout;
