import { Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';

export function LayoutPrincipal() {
    return (
        <div>
            <aside>
                <h2>ERP Core</h2>
                <Navbar />
            </aside>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
