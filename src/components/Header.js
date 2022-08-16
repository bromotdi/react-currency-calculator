import './Header.css'

function Header({ data: { code='', ask='', codein='' } }) {
    return (
        <div className="stats">
            <div>
                <p>1 {code} = {ask} {codein}</p>
            </div>
        </div>
        
    )
}

export default Header