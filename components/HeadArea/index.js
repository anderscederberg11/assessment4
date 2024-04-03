export default function HeadArea ({ title, description }) {
    return(
        <>
                <title>{title}</title>
                <meta name="author" content="Anders Cederberg" />
                <meta name="description" content={description}></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
        </>
    )
}