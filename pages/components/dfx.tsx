import type { NextPage } from "next";
import styles from './styles/dfx.module.css'

const DFX: NextPage = () => {
  return (
    <div className={styles.dfx}>
      <div className={styles.dfxChild} />
      <img className={styles.dfxItem} alt="" src="/vector-5.svg" />
      <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
      <div className={styles.aboutDrMartens}>About Dr Martens</div>
      <div className={styles.skillsUserResearchContainer}>
        <p className={styles.skillsUserResearchCustome}>
          <span className={styles.skills}>Skills</span>
          <span>: User Research, Customer Journey Map, Personas,</span>
        </p>
        <p
          className={styles.skillsUserResearchCustome}
        >{`Market Research, Mockup  `}</p>
        <p className={styles.skillsUserResearchCustome}>&nbsp;</p>
        <p className={styles.skillsUserResearchCustome}>
          <span className={styles.skills}>Tools:</span>
          <span> After Effects, Illustrator, Procreate, Miro, Figma</span>
        </p>
      </div>
      <div className={styles.designForExperiences}>Design for Experiences</div>
      <div className={styles.researchApproach}>{`Research & Approach`}</div>
      <div className={styles.drMartensAlso}>
        Dr. Martens, also commonly known as Doc Martens, Docs or DMs, is a
        footwear and clothing brand with a range of accessories – such as shoe
        care products, clothing, and bags. Dr. Martens aim to inspire Rebellious
        Self Expression, ground product innovation in icons and year-round
        consumer relevance, and lead in sustainability through their product
        durability and innovation.
      </div>
      <div className={styles.theCompanysOriginalContainer}>
        <p className={styles.skillsUserResearchCustome}>
          The company’s original offering is leather goods with a focus on
          design, quality, and aesthetics. With the progress of time, Dr Martens
          has maintained its unique design characteristics, like the yellow
          stitching and the AirWair tag, but has shifted to more sustainable
          processes and collaborations with popular and upcoming brands, such as
          Marc Jacobs, Bodega, Lazy Oaf and many more.
        </p>
        <p className={styles.skillsUserResearchCustome}>&nbsp;</p>
        <p className={styles.skillsUserResearchCustome}>
          Their products are sold online and in the 135 official stores, as well
          as in the 203 third party stores across the globe. Our aim is to
          maintain the company’s strategy and goals while enhancing the
          exceptional brand love they have managed to build throughout the
          years. Dr Martens is all about self expression and this is what we
          want for their customers. Express, Don’t stress!
        </p>
      </div>
      <div
        className={styles.personaCustomer}
      >{`Persona & Customer Journey Map`}</div>
      <div className={styles.whileTheCompany}>
        While the company aims to appeal to a diverse audience of all ages,
        genders, and professions, our focal point for this project centers on a
        persona that aligns with the brand's primary customer base—primarily
        young individuals in the creative industries. Meet Alex, a 38-year-old
        flute teacher residing in Paris and proud owner of the iconic Dr.
        Martens 1460 boots.
      </div>
      <div className={styles.dfxInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.dfxChild1} />
      <div className={styles.alexHasAContainer}>
        <p className={styles.skillsUserResearchCustome}>
          Alex has a preference for versatile footwear that effortlessly
          complement various outfits on different occasions. With a style that
          transcends traditional gender norms, they aim to express themselves
          through a wardrobe that reflects their unique identity.
        </p>
        <p className={styles.skillsUserResearchCustome}>&nbsp;</p>
        <p className={styles.skillsUserResearchCustome}>
          Furthermore, Alex values brands that actively embrace inclusive design
          and foster self-expression, appreciating those that go the extra mile
          to create products that resonate with a diverse range of individuals.
        </p>
      </div>
      <div className={styles.oneDayAs}>
        One day, as Alex strolls past a window display, their attention is
        captivated by a pair of boots that instantly trigger a nostalgic
        connection—they're the very Docs their favorite singer once flaunted
        during a concert. Filled with excitement, Alex enters the store, eager
        to try them on. However, a hint of concern lingers about the price and
        comfort, given their previous experience with a less-than-perfect fit.
        Fortunately, the attentive shop assistant steps in, assisting Alex in
        finding the ideal size. Soon enough, Alex discovers the perfect pair and
        leaves the store beaming with satisfaction. Eager to showcase their
        latest acquisition, Alex promptly shares a snapshot on Instagram,
        piquing the interest of a friend who is now contemplating getting a pair
        for himself!
      </div>
      <img
        className={styles.customerJourneyMap3}
        alt=""
        src="/customer-journey-map-3@2x.png"
      />
      <div className={styles.solutions}>Solutions</div>
      <div className={styles.insertAnimation}>Insert Animation</div>
      <div className={styles.whenAddressingTheContainer}>
        <p className={styles.skillsUserResearchCustome}>
          When addressing the needs of online shoppers who seek a comprehensive
          experience with Dr. Martens, our solution revolves around comfort and
          ensuring the perfect fit. As part of the official Dr. Martens app, the
          cornerstone of our approach is the online fitting room feature. This
          innovative extension enables potential customers to effortlessly
          measure their foot dimensions using their mobile phones or tablets.
          Subsequently, the app intelligently recommends the correct shoe size
          based on these measurements.
        </p>
        <p className={styles.skillsUserResearchCustome}>&nbsp;</p>
        <p className={styles.skillsUserResearchCustome}>
          For those who prefer the in-store shopping experience, we present the
          virtual fitting room. This interactive space incorporates a screen
          functioning as a mirror, allowing customers to experiment with a
          diverse array of styles and outfits. This hands-on feature assists
          customers in making informed decisions about their desired pair of
          shoes by visualizing how they complement different looks.
        </p>
      </div>
      <img className={styles.arrowIcon} alt="" src="/arrow-3.svg" />
      <img className={styles.persona1Icon} alt="" src="/persona-1@2x.png" />
      <div className={styles.mainPainPoints}>Main Pain Points</div>
      <div className={styles.differentNeedsForContainer}>
        <p className={styles.skillsUserResearchCustome}>&nbsp;</p>
        <ul className={styles.differentNeedsForOnlineAnd}>
          <li className={styles.uncertaintyAboutWhetherShoe}>
            <span>Different needs for online and in-store shoppers</span>
          </li>
          <li className={styles.uncertaintyAboutWhetherShoe}>
            <span>
              Uncertainty about whether shoes complement various outfits
            </span>
          </li>
          <li>
            <span>Concerns about discomfort of certain boots</span>
          </li>
        </ul>
      </div>
      <img className={styles.vfr31Icon} alt="" src="/vfr3-1@2x.png" />
      <img className={styles.vfr11Icon} alt="" src="/vfr-11@2x.png" />
      <div className={styles.onlineFittingRoom}>Online Fitting Room</div>
      <div className={styles.virtualFittingRoom}>Virtual Fitting Room</div>
    </div>
  );
};

export default DFX;
