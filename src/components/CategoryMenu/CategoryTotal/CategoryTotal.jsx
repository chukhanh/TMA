import style from "./CategoryTotal.module.scss";

const CategoryTotal = ({ productType, productTotal, typeArray }) => {
  
  return (
    <div className={style.categoryTotal}>
      <h2 className={style.title}>Categories</h2>
      <div className={style.total}>
        <div className={style.categories}>
          <h3>ALL Categories</h3>
          <span>{productTotal.length}</span>
        </div>
        {typeArray.map((e) => {
          return (
            <div className={style.categories}>
              <h3>{e}</h3>
              <span>{productType.get(e)}</span>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export default CategoryTotal;
