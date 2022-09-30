/** Components */
import { FirstSection } from "../../components/FirstSection";
import { FourthSection } from "../../components/FourthSection";
import { SecondSection } from "../../components/SecondSection";
import { ThirdSection } from "../../components/ThirdSection";

/** React Hook */
import { useEffect } from "react";

/** Redux */
import { useDispatch } from "react-redux";
import { changeIsHome } from "../../store/actions";

export const Home = () => {
  const dispatch = useDispatch();

  // Notify you are on the home page
  useEffect(() => {
    dispatch(changeIsHome(true));
  }, []);
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </>
  );
};
