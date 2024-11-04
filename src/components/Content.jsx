import React from "react";
import styles from "./content.module.css";

const Content = () => {
  return (
    <main className={styles.wholeSection}>
      <div className={styles.contentArea}>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.
        </p>
        <div className={styles.btnArea}>
            <button>Shop Now</button>
            <button className={styles.secondaryBtn}>Category</button>
        </div>
        <div className={styles.avialabeArea}>
            <p>Also Available On</p>
            <div className={styles.brandIcons}>
            <img src="/images/flipkart.png" alt="flipkart-logo" />
            <img src="/images/amazon.png" alt="amazon-logo" />
            </div>
        </div>
           
      </div>
      <div className={styles.imgArea}>
        <img src="/images/shoe_image.png" alt="shoeImage" />
      </div>
    </main>
  );
};

export default Content;
