import type { NextPage } from "next";
import { useCallback } from "react";

const AboutMe: NextPage = () => {
  const onHomeTextClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  const onWorkTextClick = useCallback(() => {
    // Please sync "Work" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-darkslateblue font-italiana">
      <img
        className="absolute top-[-48px] left-[195px] w-[1906.2px] h-[2060.14px] object-contain opacity-[0.84]"
        alt=""
        src="/vector-1.svg"
      />
      <div className="absolute top-[38px] left-[60px]">Vasiliki Minou</div>
      <div
        className="absolute top-[38px] left-[1082px] cursor-pointer"
        onClick={onHomeTextClick}
      >
        Home
      </div>
      <div className="absolute top-[38px] left-[1187px]">About Me</div>
      <div
        className="absolute top-[38px] left-[1326px] cursor-pointer"
        onClick={onWorkTextClick}
      >
        Work
      </div>
      <div className="absolute top-[198px] left-[370px] font-khmer whitespace-pre-wrap inline-block w-[548px] h-[514px] text-base">
        <p className="m-0">
          <span>
            <span>
              I have spent a fairly large amount of time procrastinating.
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className="m-0 text-xl">
          <span>
            <span>
              This is where I mention all the marvellous things I have achieved
              so far,
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              the struggles, the pain, and of course corporate life that taught
              me so much [eek].
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              More stuff here, more, more, and more. Just need to see what it
              looks like so that I can adjust the position of the resume button.
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>{`I should probably need to make it slightly bigger - definitely find a way to implement the dash, it looks fuckin awesome. `}</span>
          </span>
        </p>
        <p className="m-0 text-black">&nbsp;</p>
      </div>
      <div className="absolute top-[814px] left-[370px] rounded-4xs bg-hotpink w-48 h-[51px] opacity-[0.9]" />
      <div className="absolute top-[823px] left-[411px] font-khmer">
        My Resume
      </div>
      <img
        className="absolute top-[198px] left-[60px] rounded-4xs w-[116px] h-[155px] object-cover"
        alt=""
        src="/prof3-1@2x.png"
      />
    </div>
  );
};

export default AboutMe;
