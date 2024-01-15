import type { NextPage } from "next";
import { useCallback } from "react";
import AboutMe from "./aboutme";

const LandingPage: NextPage = () => {
  const onAboutMeTextClick = useCallback(() => {
    // Please sync "About Me" to the project
  }, []);

  const onWorkTextClick = useCallback(() => {
    // Please sync "Work" to the project
  }, []);

  const onHereTextClick = useCallback(() => {
    // Please sync "Work" to the project
  }, []);

  const onLinkedInTextClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/vasiliki-minou-b322a8106/");
  }, []);

  const onEmailTextClick = useCallback(() => {
    window.location.href = "mailto:vasilikiminou|@gmail.com";
  }, []);

  const onRectangle1Click = useCallback(() => {
    // Please sync "About Me" to the project
  }, []);

  return (
    <>
    <div className="relative bg-white w-full h-[1582px] overflow-y-auto text-left text-xl text-darkslateblue font-khmer">
      <div className="absolute top-[-28px] left-[-16px] bg-blueviolet w-[1484px] h-[1610px] opacity-[0.3]" />
      <img
        className="absolute top-[80px] left-[0px] w-[1440px] h-[711px] object-cover"
        alt=""
        src="/vector-1-7@2x.png"
      />
      <div className="absolute top-[38px] left-[60px] font-italiana">
        Vasiliki Minou
      </div>
      <div className="absolute top-[38px] left-[1082px] font-italiana">
        Home
      </div>
      <div
        className="absolute top-[38px] left-[1187px] font-italiana cursor-pointer"
        onClick={onAboutMeTextClick}
      >
        About Me
      </div>
      <div
        className="absolute top-[38px] left-[1326px] font-italiana cursor-pointer"
        onClick={onWorkTextClick}
      >
        Work
      </div>
      <div className="absolute top-[228px] left-[60px] text-[16px]">
        <p className="m-0">
          <span>
            <span>Hey! I’m Vasiliki</span>
          </span>
        </p>
        <p className="m-0 text-[40px]">
          <span>
            <span>I design user</span>
            <span className="text-black">{` `}</span>
            <span className="text-blueviolet">experiences</span>
            <span className="text-darkslateblue">
              . Sometimes, I code, too.
            </span>
          </span>
        </p>
      </div>
      <div className="absolute top-[1008px] left-[60px]">{`You can browse my work `}</div>
      <div
        className="absolute top-[1022px] left-[296px] text-hotpink cursor-pointer"
        onClick={onHereTextClick}
      >
        here
      </div>
      <div
        className="absolute top-[1400px] left-[60px] text-17xl text-hotpink cursor-pointer"
        onClick={onLinkedInTextClick}
      >
        LinkedIn
      </div>
      <div
        className="absolute top-[1400px] left-[256px] text-17xl text-hotpink cursor-pointer"
        onClick={onEmailTextClick}
      >
        Email
      </div>
      <div
        className="absolute top-[347px] left-[808px] rounded-[9px] bg-hotpink w-48 h-[51px] opacity-[0.9] cursor-pointer"
        onClick={onRectangle1Click}
      />
      <div className="absolute top-[355px] left-[858px]">About Me</div>
      <img
        className="absolute top-[1024px] left-[48px] w-[257px] h-[1.04px] object-contain"
        alt=""
        src="/line-32.svg"
      />
    </div>
    <AboutMe />
    </>
  );
};

export default LandingPage;
