
import "./services.css";

function Services() {
  const url3 =
    "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1406&q=80";
  const url2 =
    "https://images.unsplash.com/photo-1558659616-7742131dcfbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";
  const url1 =
    "https://images.unsplash.com/photo-1622279488670-123d0fd161cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80";
  return (
    <>
      <div className="service-heading">
        <h1>Services</h1>
      </div>
      <div className="services-row">
        <div className="service-box">
          <img src={url1} />
          <h1>Community Outreach Programs</h1>
          <p>
            Our temple offers various community outreach programs to educate and
            engage individuals of all ages about Hinduism, culture, and
            traditions. From language and music classes to religion and history
            seminars, our programs aim to foster a better understanding of our
            values and beliefs.
          </p>
          <button>More Info</button>
        </div>
        <div className="service-box">
          <img src={url2} />
          <h1>Traditional Wedding Services</h1>
          <p>
            Our temple offers various community outreach programs to educate and
            engage individuals of all ages about Hinduism, culture, and
            traditions. From language and music classes to religion and history
            seminars, our programs aim to foster a better understanding of our
            values and beliefs.
          </p>
          <button>More Info</button>
        </div>
        <div className="service-box">
          <img src={url3} />
          <h1>
            Spiritual Retreats <br /> Events
          </h1>
          <p>
            Our temple offers various community outreach programs to educate and
            engage individuals of all ages about Hinduism, culture, and
            traditions. From language and music classes to religion and history
            seminars, our programs aim to foster a better understanding of our
            values and beliefs.
          </p>
          <button>More Info</button>
        </div>
      </div>
    </>
  );
}
export default Services;
