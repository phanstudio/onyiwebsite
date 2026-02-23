import { Header } from './Header';
import { Footer } from './Footer';
import { SocialRail } from "./SocialRail";
import { Outlet } from 'react-router-dom';

export function Layout() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
        <SocialRail />
      </>
    );
  }