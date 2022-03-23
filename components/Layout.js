import Header from "./Header";
function Layout(props) {
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>

            <style jsx global>{`
                .outer{
                    padding: 0 20px;
                }
                .inner{
                    width: 100%;
                    margin: 0 auto;
                }
                @media screen and (min-width: 1440px){
                    .inner{
                    max-width: 1200px;
                    }
                }
                @media screen and (max-width: 767px){
                    .hide-mobile{
                    display: none;
                    }
                }
            `}
            </style>
        </div>
    );
}

export default Layout;
