export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul className="NVB__ul">
        <li className="NVB__ulli" onClick={() => setMenuOpen(false)}>
          <a
            className="NVB__navitem"
            id="homeNVB"
            data-page="intro"
            href="#intro"
          >
            Home
          </a>
        </li>
        <li className="NVB__ulli" onClick={() => setMenuOpen(false)}>
          <a
            className="NVB__navitem"
            id="portfolioNVB"
            data-page="portfolio"
            href="#portfolio"
          >
            Portfolio
          </a>
        </li>
        <li className="NVB__ulli" onClick={() => setMenuOpen(false)}>
          <a
            className="NVB__navitem"
            id="worksNVB"
            data-page="works"
            href="#works"
          >
            Works
          </a>
        </li>
        <li className="NVB__ulli" onClick={() => setMenuOpen(false)}>
          <a
            className="NVB__navitem"
            id="testimonialsNVB"
            data-page="testimonials"
            href="#testimonials"
          >
            Testimonials
          </a>
        </li>
        <li className="NVB__ulli" onClick={() => setMenuOpen(false)}>
          <a
            className="NVB__navitem"
            id="contactNVB"
            data-page="contact"
            href="#contactid"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
