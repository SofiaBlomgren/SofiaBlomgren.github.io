function EngineeringView(props){
    return (

        <div class="engineering-view">
            {/* Modal triggers */}
            <div class="flex-container">
                <div class="flex-column">
                    <div class="flex-row">
                        <div class="flex-item ev-portfolio-item ev-overlay" data-bs-toggle="modal" data-bs-target="#modal-fintastic">
                            <img class="pv-img" src="/images/engineering/fintastic.png"></img>
                        </div>
                        <div class="flex-item ev-portfolio-item" data-bs-toggle="modal" data-bs-target="#modal-osqledaren">
                            <img class="pv-img" src="/images/engineering/osqledaren.png"></img>
                        </div>
                        <div class="flex-item ev-portfolio-item" data-bs-toggle="modal" data-bs-target="#modal-scrollr">
                            <img class="pv-img" src="/images/engineering/scrollr.png"></img>
                        </div>
                    </div>

                    <div class="flex-row">
                        <div class="flex-item ev-portfolio-item" data-bs-toggle="modal" data-bs-target="#modal-perception">
                            <img class="pv-img" src="/images/engineering/perception.png"></img>
                        </div>
                        <div class="flex-item ev-portfolio-item" data-bs-toggle="modal" data-bs-target="#modal-bachelor">
                            <img class="pv-img" src="/images/engineering/kex.png"></img>
                        </div>
{/*                         <div class="flex-item ev-portfolio-item" data-bs-toggle="modal" data-bs-target="#modal-fintastic">
                            <img class="pv-img" src="/images/engineering/budapest.png"></img>
                        </div> */}
                    </div>

{/*                     <div class="flex-row">
                        <div class="flex-item ev-portfolio-item" data-bs-toggle="modal" data-bs-target="#modal-fintastic">
                            <img class="pv-img" src="/images/engineering/fintastic.png"></img>
                        </div>
                        <div class="flex-item ev-portfolio-item" data-bs-toggle="modal" data-bs-target="#modal-fintastic">
                            <img class="pv-img" src="/images/engineering/osqledaren.png"></img>
                        </div>
                        <div class="flex-item ev-portfolio-item" data-bs-toggle="modal" data-bs-target="#modal-fintastic">
                            <img class="pv-img" src="/images/engineering/scrollr.png"></img>
                        </div>
                    </div> */}
                </div>
            </div>

           {/* Modals */}


           {/* Fintastic Modal */}
           <div class="modal ev-modal" id="modal-fintastic" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Fintastic</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Fintastic was created as a school project and is a Virtual Reality game taking place in a beautiful underwater environment at the bottom of the ocean. The player uses a net to catch different fish, which they then collect in a basket next to them.</p>
                            <video width="400" controls poster="/images/engineering/fintastic.png">
                                <source src="/videos/FintasticDemo.mp4" type="video/mp4"/>
                            </video>
                            <div class="modal-footer">
                                <ul class="list-inline">
                                  <li><b>Date:</b> Fall 2019</li>
                                  <li><b>Course:</b> Advanced Graphics and Interaction</li>
                                  <li><b>Tools:</b> Unity</li>
                                  <li><b>Category:</b> Programming, VR</li>
                                  <li><a href="http://sofiablomgren.com/FintasticWebsite/" target="_blank">Fintastic website</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           {/* OsqledARen Modal */}
           <div class="modal ev-modal" id="modal-osqledaren" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">OsqledARen</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>OsqledARen is a school project in which we created a mobile experience combining AR technology and a printed magazine. The AR functions extended the printed information and gave the readers the possibility to interact with the content in several ways.</p>
                            <video width="400" controls poster="/images/engineering/osqledaren.png">
                                <source src="/videos/OsqledARen.mp4" type="video/mp4"/>
                            </video>
                            <div class="modal-footer">
                                <ul class="list-inline">
                                  <li><b>Date:</b> Fall 2018</li>
                                  <li><b>Course:</b> Multimodal Interaction and Interfaces</li>
                                  <li><b>Tools:</b> Unity, Vuforia</li>
                                  <li><b>Category:</b> Programming, AR</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           {/* Scrollr Modal */}
           <div class="modal ev-modal" id="modal-scrollr" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Scrollr</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>This is a school project in which we were supposed to improve the interaction of an already existing app. We created Scrollr, a prototype of a function that lets you scroll the feed in apps by tilting your phone.</p>
                            <video width="400" controls poster="/images/engineering/scrollr.png">
                                <source src="/videos/Scrollr.mp4" type="video/mp4"/>
                            </video>
                            <div class="modal-footer">
                                <ul class="list-inline">
                                  <li><b>Date:</b> Fall 2018</li>
                                  <li><b>Course:</b> Media Technology and Interaction Design</li>
                                  <li><b>Tools:</b> Xcode</li>
                                  <li><b>Category:</b> Interaction design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           {/* Color Perception Modal */}
           <div class="modal ev-modal" id="modal-perception" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Color Perception</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>This is a research about how different color combinations are perceived on the web.</p>
                            <img src="/images/engineering/perception.png"></img>
                            <div class="modal-footer">
                                <ul class="list-inline">
                                  <li><b>Date:</b> Fall 2019</li>
                                  <li><b>Course:</b> Advanced Graphics and Interaction</li>
                                  <li><b>Tools:</b> Unity</li>
                                  <li><b>Category:</b> Programming, VR</li>
                                  <li><a href="pdf/DT2350_PerceptionPoster.pdf" target="_blank">Project poster</a></li>
                                  <li><a href="pdf/DT2350_PerceptionReport.pdf" target="_blank">Project report</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           {/* Bachelor Thesis Modal */}
           <div class="modal ev-modal" id="modal-bachelor" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Bachelor Thesis</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>In our bachelor thesis we exlored the memory technique called Method of Loci and looked at if it could be beneficial to combine this method with VR.</p>
                            <img src="/images/engineering/kex.png"></img>
                            <div class="modal-footer">
                                <ul class="list-inline">
                                  <li><b>Date:</b> Spring 2018</li>
                                  <li><b>Tools:</b> Unity, Blender</li>
                                  <li><b>Category:</b> Theory, VR</li>
                                  <li><a href="pdf/BachelorThesis.pdf" target="_blank">Thesis report</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           {/* Master Thesis Modal */}
           <div class="modal ev-modal" id="modal-bachelor" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Bachelor Thesis</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>In our bachelor thesis we exlored the memory technique called Method of Loci and looked at if it could be beneficial to combine this method with VR.</p>
                            <img src="/images/engineering/kex.png"></img>
                            <div class="modal-footer">
                                <ul class="list-inline">
                                  <li><b>Date:</b> Spring 2018</li>
                                  <li><b>Tools:</b> Unity, Blender</li>
                                  <li><b>Category:</b> Theory, VR</li>
                                  <li><a href="pdf/BachelorThesis.pdf" target="_blank">Thesis report</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           {/* UX Modal */}
           <div class="modal ev-modal" id="modal-bachelor" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Bachelor Thesis</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>In our bachelor thesis we exlored the memory technique called Method of Loci and looked at if it could be beneficial to combine this method with VR.</p>
                            <img src="/images/engineering/kex.png"></img>
                            <div class="modal-footer">
                                <ul class="list-inline">
                                  <li><b>Date:</b> Spring 2018</li>
                                  <li><b>Tools:</b> Unity, Blender</li>
                                  <li><b>Category:</b> Theory, VR</li>
                                  <li><a href="pdf/BachelorThesis.pdf" target="_blank">Thesis report</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           {/* Quizendo Modal */}
           <div class="modal ev-modal" id="modal-bachelor" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Bachelor Thesis</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>In our bachelor thesis we exlored the memory technique called Method of Loci and looked at if it could be beneficial to combine this method with VR.</p>
                            <img src="/images/engineering/kex.png"></img>
                            <div class="modal-footer">
                                <ul class="list-inline">
                                  <li><b>Date:</b> Spring 2018</li>
                                  <li><b>Tools:</b> Unity, Blender</li>
                                  <li><b>Category:</b> Theory, VR</li>
                                  <li><a href="pdf/BachelorThesis.pdf" target="_blank">Thesis report</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           {/* Plant Modal */}
           <div class="modal ev-modal" id="modal-bachelor" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Bachelor Thesis</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>In our bachelor thesis we exlored the memory technique called Method of Loci and looked at if it could be beneficial to combine this method with VR.</p>
                            <img src="/images/engineering/kex.png"></img>
                            <div class="modal-footer">
                                <ul class="list-inline">
                                  <li><b>Date:</b> Spring 2018</li>
                                  <li><b>Tools:</b> Unity, Blender</li>
                                  <li><b>Category:</b> Theory, VR</li>
                                  <li><a href="pdf/BachelorThesis.pdf" target="_blank">Thesis report</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



           <div class="modal" id="exampleModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl"></div>
                </div>
                </div>
                <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                    <div class="modal-body">
                        {/* <!-- Project Details Go Here --> */}
                        <h2>Fintastic</h2>
                        {/* <!--<p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>--> */}
                        <video style="width:100%; height:auto;" controls poster="/images/engineering/fintastic.png">
                            <source src="/videos/FintasticDemo.mp4" type="video/mp4"></source>
                        </video>
                        <p>Fintastic was created as a school project and is a Virtual Reality game taking place in a beautiful underwater environment at the bottom of the ocean. The player uses a net to catch different fish, which they then collect in a basket next to them.</p>
                        <div>
                        <a href="http://sofiablomgren.me/FintasticWebsite/" target="_blank">Fintastic website</a>
                        </div>
                        <ul class="list-inline">
                        <li><b>Date:</b> Fall 2019</li>
                        <li><b>Course:</b> Advanced Graphics and Interaction</li>
                        <li><b>Tools:</b> Unity</li>
                        <li><b>Category:</b> Programming, VR</li>
                        </ul>
                        <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fas fa-times"></i>
                        Close Project</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>

</div>
    )
}



/*

        <div class="photography-view">
            <div class="flex-container">
                <div class="flex-item pv-development">
                    <img class="pv-img" src="/images/code_dark.jpg"></img>
                    <div class="pv-title">
                        <h1>Engineering Portfolio</h1>
                        <i class="fas fa-code fa-2x"></i>
                        <h3>is under construction</h3>
                    </div>
                </div>
            </div>
        </div>

*/

/*

            Modal triggers
            <div>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal">button</button>
            </div>


            Modals
            <div class="modal" id="exampleModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

*/


{/*

Projects Section
<section id="portfolio">
<div class="container-fluid p-0">
  <div class="row no-gutters">
    <div class="col-lg-4 col-sm-6">
      <a class="portfolio-box" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
        <img class="img-fluid" src="/images/code_dark.jpg" alt=""></img>
        <div class="portfolio-box-caption p-3">
          <div class="project-category text-white-50">
            Open
          </div>
          <div class="project-name">
            Fintastic
          </div>
        </div>
      </a>
    </div>
    <div class="col-lg-4 col-sm-6">
      <a class="portfolio-box" data-toggle="modal" href="#portfolioModal2">
        <img class="img-fluid" src="img/osqledaren.png" alt=""></img>
        <div class="portfolio-box-caption">
          <div class="project-category text-white-50">
            Open
          </div>
          <div class="project-name">
            OsqledARen
          </div>
        </div>
      </a>
    </div>
    <div class="col-lg-4 col-sm-6">
      <a class="portfolio-box" data-toggle="modal" href="#portfolioModal3">
        <img class="img-fluid" src="img/scrollr.png" alt=""></img>
        <div class="portfolio-box-caption">
          <div class="project-category text-white-50">
            Open
          </div>
          <div class="project-name">
            Scrollr
          </div>
        </div>
      </a>
    </div>
    <div class="col-lg-4 col-sm-6">
      <a class="portfolio-box" data-toggle="modal" href="#portfolioModal4">
        <img class="img-fluid" src="img/perception.png" alt=""></img>
        <div class="portfolio-box-caption">
          <div class="project-category text-white-50">
            Open
          </div>
          <div class="project-name">
            Color perception
          </div>
        </div>
      </a>
    </div>
    <div class="col-lg-4 col-sm-6">
      <a class="portfolio-box" data-toggle="modal" href="#portfolioModal5">
        <img class="img-fluid" src="img/kex.png" alt=""></img>
        <div class="portfolio-box-caption">
          <div class="project-category text-white-50">
            Open
          </div>
          <div class="project-name">
            Bachelor thesis
          </div>
        </div>
      </a>
    </div>
    <div class="col-lg-4 col-sm-6">
      <a class="portfolio-box" data-toggle="modal" href="#portfolioModal6">
        <img class="img-fluid" src="img/budapest.png" alt=""></img>
        <div class="portfolio-box-caption">
          <div class="project-category text-white-50">
            Open
          </div>
          <div class="project-name">
            Budapest video
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
</section>

*/}