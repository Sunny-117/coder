import React from "react";
import { NavLink } from "react-router-dom";
export function Home() {
  return <h1>Home</h1>;
}

export function News() {
  return <h1>News</h1>;
}
export function Personal() {
  return <h1>Personal</h1>;
}
export function NavBar() {
  return (
    <div className="header">
      <NavLink to="/" exact>
        首页
      </NavLink>
      <NavLink to="/news" exact>
        新闻
      </NavLink>
      <NavLink to="/personal" exact>
        个人中心
      </NavLink>
    </div>
  );
}
