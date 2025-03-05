export const Footer = () => {
    return (
        <footer className="footer text-base-content p-4 " style={{position:'fixed' , marginBottom:'0px'}}>
            <aside>
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved by ACME
                    Industries Ltd
                </p>
            </aside>
        </footer>
    );
};
