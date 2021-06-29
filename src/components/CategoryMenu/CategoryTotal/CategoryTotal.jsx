import style from "./CategoryTotal.module.scss";

const CategoryTotal = ({productType}) => {
  console.log(productType);
  return (
    <div className={style.categoryTotal}>
      <h2 className={style.title}>Categories</h2>
      <div className={style.total}>
        <div className={style.categories}>
          <h3>ALL Categories</h3>
          <span>{productType.length}</span>
        </div>
        <div className={style.categories}>
          <h3>Macbook</h3>
          <span>{productType.filter(elem => elem === 'Macbook').length}</span>
        </div>
        <div className={style.categories}>
          <h3>Asus</h3>
          <span>{productType.filter(elem => elem === 'Asus').length}</span>
        </div>
        <div className={style.categories}>
          <h3>HP</h3>
          <span>{productType.filter(elem => elem === 'HP').length}</span>
        </div>
        <div className={style.categories}>
          <h3>Lenovo</h3>
          <span>{productType.filter(elem => elem === 'Lenovo').length}</span>
        </div>
        <div className={style.categories}>
          <h3>Acer</h3>
          <span>{productType.filter(elem => elem === 'Acer').length}</span>
        </div>
        <div className={style.categories}>
          <h3>Dell</h3>
          <span>{productType.filter(elem => elem === 'Dell').length}</span>
        </div>
        <div className={style.categories}>
          <h3>LG</h3>
          <span>{productType.filter(elem => elem === 'LG').length}</span>
        </div>
        <div className={style.categories}>
          <h3>MSI</h3>
          <span>{productType.filter(elem => elem === 'MSI').length}</span>
        </div>
       
      </div>
    </div>
  );
};

export default CategoryTotal;
