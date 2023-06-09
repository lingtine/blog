import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/avatar.png"
          alt="avatar"
          height={300}
          width={300}
        />
      </div>
      <h1>Hùng Anh</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
}

export default Hero;
