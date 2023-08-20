import './Header.css'

export function Header(){
    return (
        <header className="header">
            <div className="balance">
                <h2 className='balanceTitle'>My balance</h2>
                <p className='balanceNumber'>$921.48</p>
            </div>
            <img className='logo' src="/logo.svg"/>
        </header>
    )
}