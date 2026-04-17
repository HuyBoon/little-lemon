import React from "react";
import styles from "./CustomersSay.module.css";

const testimonials = [
    {
        id: 1,
        rating: 5,
        name: "Sara Lopez",
        review: "The Greek salad was incredibly fresh and the atmosphere was lovely!",
        image: "/user1.jpg",
    },
    {
        id: 2,
        rating: 4,
        name: "John Doe",
        review: "Great service and authentic Mediterranean flavors. Highly recommended.",
        image: "/user2.jpg",
    },
    {
        id: 3,
        rating: 5,
        name: "Maria Chen",
        review: "The Lemon Dessert is to die for. I'll definitely be back for more!",
        image: "/user3.jpg",
    },
    {
        id: 4,
        rating: 5,
        name: "Alex Smith",
        review: "A hidden gem in Chicago. The Bruschetta is the best I've ever had.",
        image: "/user4.jpg",
    },
];

const CustomersSay = () => {
    return (
        <section className={styles.testimonialsBackground}>
            <div className={styles.testimonialsContainer}>
                <h1 className={styles.title}>Testimonials</h1>
                <div className={styles.testimonialsGrid}>
                    {testimonials.map((item) => (
                        <article key={item.id} className={styles.card}>
                            <div
                                className={styles.rating}
                                aria-label={`Rating: ${item.rating} stars`}
                            >
                                {"★".repeat(item.rating)}
                                {"☆".repeat(5 - item.rating)}
                            </div>
                            <div className={styles.user}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className={styles.userImage}
                                />
                                <h3 className={styles.userName}>{item.name}</h3>
                            </div>
                            <p className={styles.reviewText}>"{item.review}"</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomersSay;
