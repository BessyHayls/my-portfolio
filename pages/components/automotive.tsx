import type { NextPage } from "next";
import styles from "./styles/automotive.module.css";

const Automotive: NextPage = () => {
  return (
    <div className={styles.automotive}>
      <div className={styles.automotiveChild} />
      <div className={styles.formulaStudent}>Formula Student</div>
      <div className={styles.aerodynamicsDesign}>Aerodynamics Design</div>
      <div className={styles.ergonomicsDesign}>Ergonomics Design</div>
      <div className={styles.asAMechanical}>
        As a Mechanical Design Engineer and CFD Analyst at Aristurtle, a Formula
        Student team, I had the privilege of contributing to the innovative
        world of motorsports engineering. Over the course of two years, I played
        a crucial role in designing key mechanical components, including the
        front wing, seat, and steering wheel. This hands-on experience not only
        honed my skills in mechanical design but also provided me with the
        opportunity to apply Computational Fluid Dynamics (CFD) analysis to
        optimize the performance and aerodynamics of our vehicle. Being a part
        of Aristurtle was a transformative experience that deepened my
        understanding of precision engineering and instilled in me the
        importance of collaboration and ingenuity in the pursuit of excellence.
      </div>
      <div className={styles.utilisingSolidworksI}>
        Utilising Solidworks, I designed the front wing assembly, a fusion of
        Carbon Fibre Reinforced Plastic and PVC foam meticulously chosen for
        their optimal blend of durability and lightweight properties. The
        integration of 3D printed airfoil-shaped mounts seamlessly attaches the
        endplates to the airfoils. The result is a front wing with a total
        weight of 6.2 kg, embodying the pursuit of both robustness and
        efficiency.
      </div>
      <div className={styles.asPartOfContainer}>
        <p className={styles.asPartOf}>
          As part of the Formula Student project, I also created an
          ergonomically optimized driver's seat, as well as the steering wheel
          and the dashboard, which are all made of carbon fibres and epoxy
          resin. The designs prioritise versatility, ensuring accommodation for
          drivers of varying heights and weights.
        </p>
        <p className={styles.asPartOf}>&nbsp;</p>
        <p className={styles.asPartOf}>
          Within the dashboard configuration, key buttons take centre stage as
          vital controls managed by the driver. Notably, the SHUTDOWN, START,
          and RESET buttons bear significant importance, as they play a vital
          role in ensuring both the driver's safety and the well-being of their
          immediate environment.
        </p>
      </div>
      <div className={styles.automotiveItem} />
      <div className={styles.automotiveInner} />
      <img className={styles.fw1Icon} alt="" src="/fw-1@2x.png" />
      <img className={styles.car1Icon} alt="" src="/car-1@2x.png" />
      <div className={styles.grayscaleFilter} />
      <img
        className={styles.aeroAssembly1}
        alt=""
        src="/aero-assembly-1@2x.png"
      />
      <img className={styles.seat1Icon} alt="" src="/seat-1@2x.png" />
      <img className={styles.dashboard1Icon} alt="" src="/dashboard-1@2x.png" />
      <img
        className={styles.steeringWheel1}
        alt=""
        src="/steering-wheel-1@2x.png"
      />
    </div>
  );
};

export default Automotive;
