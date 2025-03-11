import s from './Header.module.css'

export const Header = () => {


    return(
        <div className={s.head}>
            <div className={s.name}>
            <h1>Книжный год</h1>
            </div>
            <p>Какую книгу ты читал сегодня?</p>
        </div>
    )
}