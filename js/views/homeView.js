function HomeView(props){
    return (
        <div class="home-view">
            <div class="flex-container">
                <div class="flex-item portfolio-card" onclick={()=>{window.location.hash="#engineering";}}>
                    <img class="pc-img" src="/images/code_dark.jpg"></img>
                    <div class="pc-title">ENGINEERING</div>
                </div>

                <div class="flex-item portfolio-card">
                    <img class="pc-img" src="/images/concert_dark.jpg" onclick={()=>{window.location.hash="#photography";}}></img>
                    <div class="pc-title">PHOTOGRAPHY</div>
                </div>
            </div>
        </div>
    )
}



/*

## Split image on hover ##

<div class="flex-item card-img-container card-engineering">
    <div class="card-img">
        <span></span><span></span><span></span><span></span><span></span>
    </div>
    <div class="card-content-wrapper">
        <h3>View engineering portfolio</h3>
    </div>
</div>

<div class="flex-item card-img-container card-photography">
    <div class="card-img">
        <span></span><span></span><span></span><span></span><span></span>
    </div>
    <div class="card-content-wrapper">
        <h3>View photography portfolio</h3>
    </div>
</div>

####


## TILT ##

<div class="container">
    <div class="tilt-box-wrap">
        <span class="t_over"></span>
        <span class="t_over"></span>
        <span class="t_over"></span>
        <span class="t_over"></span>
        <span class="t_over"></span>
        <span class="t_over"></span>
        <span class="t_over"></span>
        <span class="t_over"></span>
        <span class="t_over"></span>

        <img src="/images/concert.jpg" class="tilt-box">
            <strong>Tilt Effect</strong>
        </img>
    </div>
</div>

####



*/