import Link from "next/link";

const Navbar = function About() {
    return (
    <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="#">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-item nav-link active" href="/">Home</Link>
                <Link className="nav-item nav-link" href="/blog">Blog</Link>
            </div>
        </div>
        </nav>
    </section>)
}

export default Navbar;