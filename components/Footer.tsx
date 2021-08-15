import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a href="#"><i className="fab fa-facebook-square"></i></a>
        <a href="#"><i className="fab fa-instagram-square"></i></a>
      </div>

      <div className="footer-left">
        <p className="footer-links">
          {/* <Link href="/faq">
            <a>Usein kysytyt kysymykset</a>
          </Link> */}
          <Link href="/contact">
            <a>Yhteystiedot</a>
          </Link>
        </p>

        <p>dianacare &copy; 2021</p>
      </div>
    </footer>
  )
}