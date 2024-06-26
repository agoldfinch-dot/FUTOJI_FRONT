

export const Error = () => {
    return (
        <div className="ErrorPage">
            <h1>Страница не найдена</h1>
            <a href="/"><h2>На главную</h2></a>
            <meta name='errorpage' content='true' />
            <meta name='errortype' content='404 - Not Found' />
        </div>
        
    )
}