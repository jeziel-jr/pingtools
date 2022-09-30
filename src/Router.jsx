import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Email } from "./pages/Email";
import { Serp } from "./pages/Serp";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { GoogleMobile } from "./components/GoogleMobile";
import { GoogleDesktop } from "./components/GoogleDesktop";
import { IphoneXsMax } from "./components/IphoneXsMax";
import { Iphone8 } from "./components/Iphone8";
import { Ipad10 } from "./components/Ipad10";
import { GooglePixel3Xl } from "./components/GooglePixel3Xl";
import { SamsungGalaxyS9 } from "./components/SamsungGalaxyS9";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/email" element={<Email />}>
          <Route path="iphone-xs-max" element={<IphoneXsMax />} />
          <Route path="iphone-8" element={<Iphone8 />} />
          <Route path="ipad-10" element={<Ipad10 />} />
          <Route path="google-pixel-3-xl" element={<GooglePixel3Xl />} />
          <Route path="samsung-galaxy-s9" element={<SamsungGalaxyS9 />} />
        </Route>
        <Route path="/serp" element={<Serp />}>
          <Route path="desktop" element={<GoogleDesktop />} />
          <Route path="mobile" element={<GoogleMobile />} />
        </Route>
      </Route>
    </Routes>
  );
};
