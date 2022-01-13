import Link from 'next/link';

const Portfolio = () => {
    return (<div>
        <h1>Portfolio</h1>

        <Link href="/">
            <a>Acessar página Home</a>
        </Link>
        <Link href="/portfolio/study">
            <a>Acessar página Estudos</a>
        </Link>
    </div>)
}

export default Portfolio
