import CallToAction from "../components/hero/CallToAction";
import Specials from "../components/specials/Specials";
import Chicago from "../components/about/Chicago";

function Homepage() {
    return (
        <main>
            <CallToAction />
            <Specials />
            <section id="about">
                <Chicago />
            </section>
        </main>
    );
}

export default Homepage;
