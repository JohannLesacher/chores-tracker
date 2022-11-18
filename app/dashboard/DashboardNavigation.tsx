import Link from "next/link";

export default function DashboardNavigation() {
    return (
        <header className="banner">
            <div className="container">
                <div className="logo">
                    <img src="http://fakeimg.pl/100x100/" alt="Chores Tracker"/>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li><Link href="/">Accueil</Link></li>
                        <li><Link href='/login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}