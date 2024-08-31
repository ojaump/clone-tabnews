function Home() {
    function redir() {
        window.location.href = "https://www.youtube.com/watch?v=17_ucZl7MVo"
    }
    function styles() {
        backgroundColor: "#ccc"
        flex: "1"
        fontSize: "20px"
        margin: "10px"
        textDecoration: "none"
    }
    return (
        <>
            <div style={{ backgroundColor: "#ccc", flex: "1" }}>
                <h1>Oi Ana, to usando meu pedacinho de internet pra te dizer</h1>
                <div style={{ fontSize: "20px", fontWeight:"bold" }}>que eu gosto muito de você e de sua amizade.
                </div>
                <div style={{ fontSize: "20px", fontWeight:"bold" }}>Adoro sua timeline maluca que sempre me tira umas boas gaitadas, suas otimas indicações de jogos e os papos de nerd ☝️🤓</div>
                <div style={{ fontSize: "20px", fontWeight:"bold" }}>Fica bem! Te adoro ❤️✨</div>
                <button onClick={redir} style={{ margin: "10px", textDecoration: "none" }}> Clica aqui.</button>
            </div>
        </>
    )
}

export default Home; 