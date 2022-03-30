function App(props){
    return (
    <div class="appDiv">
        <TopBarPresenter model = {props.model}/>

        <div class="main-content">

            <Show hash="#home"><HomePresenter model = {props.model}/></Show>
            <Show hash="#engineering"><EngineeringPresenter model = {props.model}/></Show>
            <Show hash="#photography"><PhotographyPresenter model = {props.model}/></Show>
            <Show hash="#about"><AboutPresenter model = {props.model}/></Show>

        </div>

    </div>
    )
}



function defaultRoute(){
    if(!["#home", "#engineering", "#photography", "#about"].find((knownRoute)=> knownRoute === window.location.hash)) window.location.hash="#home";
}
defaultRoute(); // when the application loads, set the default route!

window.addEventListener("hashchange", e => defaultRoute());