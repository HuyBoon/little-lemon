import React from "react";
import styles from "./Specials.module.css";

const specialsData = [
    {
        id: 1,
        title: "Greek Salad",
        price: "$12.99",
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        image: "/greek-salad.jpg",
    },
    {
        id: 2,
        title: "Bruchetta",
        price: "$5.99",
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: "/bruchetta.svg",
    },
    {
        id: 3,
        title: "Lemon Dessert",
        price: "$5.00",
        description:
            "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: "/lemon-dessert.jpg",
    },
];

const Specials = () => {
    return (
        <section className={styles.specialsContainer}>
            <div className={styles.specialsHeader}>
                <h1>This week specials!</h1>
                <button className="btn-primary">Online menu</button>
            </div>
            <div className={styles.specialsGrid}>
                {specialsData.map((item) => (
                    <article key={item.id} className={styles.card}>
                        <img src={item.image} alt={item.title} />
                        <div className={styles.cardBody}>
                            <div className={styles.cardHeader}>
                                <h3>{item.title}</h3>
                                <span className={styles.price}>
                                    {item.price}
                                </span>
                            </div>
                            <p>{item.description}</p>
                            <button className={styles.deliveryBtn}>
                                Order A Delivery 🛵
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Specials;
