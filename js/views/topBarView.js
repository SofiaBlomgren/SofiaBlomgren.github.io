function TopBarView(props){
    return (
        
        <div class="topbar-view">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav align-middle ms-auto" style="padding-left: 130px;">
                    <li class="nav-item">
                      <a class="nav-link" href="#engineering">engineering</a>
                    </li>
                    <li>
                        <a class="navbar-brand" href="#"><img src="/images/logo3.png" style="width: 180px; margin-left: 60px; margin-right: 50px;"></img></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#photography">photography</a>
                    </li>
                  </ul>
                  <ul class="navbar-nav ms-auto" style="padding-right: 30px;">
                    <li class="nav-item">
                      <a class="nav-link" href="#about">about me</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div class="under-construction">Welcome! This website is under construction.</div>
        </div>
    )
}

/*

navbar bg: bg-light


    return (
        
        <div class="topbar-view">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav" style="display: inline;">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="#engineering">engineering</a>
                    </li>
                    <li>
                        <a class="navbar-brand" href="#"><img src="/images/logo3.png" style="width: 180px; margin-left: 60px; margin-right: 50px;"></img></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#photography">photography</a>
                    </li>
                  </ul>
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-auto">
                      <a class="nav-link" href="#about">about</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
    )





## Centered logo ##

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li>
            <a class="navbar-brand" href="#"><img src="/images/logo.png" style="width: 200px;"></img></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

####




*/