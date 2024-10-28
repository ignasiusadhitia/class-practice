import LeaderList from "./leaders/LeaderList";
import PropTypes from "prop-types";
import Section from "./sections/Section";
import SectionHeading from "./sections/SectionHeading";
import Icon from "./commons/Icon";
import Button from "./commons/Button";

const Main = ({ items }) => {
  return (
    <main>
      <Section className="about-section">
        <div className="container">
          <div className="about-inner-wrapper">
            <div>
              <img
                src="https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg"
                alt=""
                className="about-image"
              />
            </div>

            <div className="description-wrapper">
              <SectionHeading
                title="About us"
                subtitle="One of the Fastest Way to Business Growth"
              />
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed.
              </p>
              <div className="call-card">
                <div className="icon-wrapper">
                  <Icon iconClassName="bi-person" />
                </div>
                <div>
                  <div>
                    <h4>Get Instant Professional Advice</h4>
                  </div>
                  <div>
                    <p>
                      Ready to Help:{" "}
                      <span className="phone">+1 356 678 7897</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="heading-wrapper">
          <SectionHeading title="Team" subtitle="Our Leaders" />
        </div>
        <div className="container">
          <LeaderList items={items} />
        </div>
      </Section>

      <Section>
        <div className="container">
          <div className="end-section">
            <p>
              &quot;Some of the History of Our Company is that we are Catching
              up through Video&quot;
            </p>
            <div>
              <Button text="Get In Touch" />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

Main.propTypes = {
  items: PropTypes.array,
};

export default Main;
