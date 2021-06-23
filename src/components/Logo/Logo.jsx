import style from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={style.stage}>
      <div className={style.wrapper}>
        <div className={style.slash}></div>
        <div className={style.sides}>
          <div className={style.side}></div>
          <div className={style.side}></div>
          <div className={style.side}></div>
          <div className={style.side}></div>
        </div>
        <div className={style.text}>
          <div className={style.textBacking}>TMA</div>
          <div className={style.textLeft}>
            <div className={style.inner}>TMA</div>
          </div>
          <div className={style.textRight}>
            <div className={style.inner}>TMA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
