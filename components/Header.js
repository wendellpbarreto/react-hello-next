import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="/blog">
            <a style={linkStyle}>Blog</a>
        </Link>
        <Link href="/shows">
            <a style={linkStyle}>Batman TV Shows</a>
        </Link>
    </div>
);

export default Header;
