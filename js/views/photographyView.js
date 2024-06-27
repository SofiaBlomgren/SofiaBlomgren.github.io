function PhotographyView(props){
    return (
        <div class="photography-view" oncontextmenu="return false;">
        
            <div class="container pv-tabs">

                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-bs-toggle="tab" href="#tab-concerts">Concert</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#tab-weddings">Wedding</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#tab-event">Event</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#tab-published">Published</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#tab-other">Other</a>
                    </li>
{/*                     <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#tab-test">Test</a>
                    </li> */}
                </ul>


                <div class="tab-content">
                    <div class="tab-pane container tabContent active" id="tab-concerts">

                        <div class="pv-row">
                            <div class="pv-column">
                                <img id="GalleryImage" title="Taylor Swift" src="/images/photography/600/TaylorSwift_1_600px.jpg"  data-img="/images/photography/2048/TaylorSwift_1_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Sabrina Carpenter" src="/images/photography/600/SabrinaCarpenter_600px.jpg"  data-img="/images/photography/2048/SabrinaCarpenter_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Little Dragon" src="/images/photography/600/LittleDragon_600px.jpg"  data-img="/images/photography/2048/LittleDragon_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Loreen" src="/images/photography/600/Loreen_2_600px.jpg"  data-img="/images/photography/2048/Loreen_2_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="The Rolling Stones" src="/images/photography/600/TheRollingStones_600px.jpg"  data-img="/images/photography/2048/TheRollingStones_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="HAIM" src="/images/photography/600/HAIM_600px.jpg"  data-img="/images/photography/2048/HAIM_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Jacob Banks" src="/images/photography/600/JacobBanks_600px.jpg"  data-img="/images/photography/2048/JacobBanks_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="BMTH" src="/images/photography/600/BMTH_600px.jpg"  data-img="/images/photography/2048/BMTH_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Kent" src="/images/photography/600/Kent_600px.jpg"  data-img="/images/photography/2048/Kent_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            </div>
                            <div class="pv-column">
                                <img id="GalleryImage" title="Paramore" src="/images/photography/600/Paramore_1_600px.jpg"  data-img="/images/photography/2048/Paramore_1_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Marcus and Martinus" src="/images/photography/600/MarcusMartinus_600px.jpg"  data-img="/images/photography/2048/MarcusMartinus_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Lorde" src="/images/photography/600/Lorde_600px.jpg"  data-img="/images/photography/2048/Lorde_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="KISS" src="/images/photography/600/KISS_600px.jpg"  data-img="/images/photography/2048/KISS_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Fever Ray" src="/images/photography/600/FeverRay_600px.jpg"  data-img="/images/photography/2048/FeverRay_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="James Bay" src="/images/photography/600/JamesBay_2_600px.jpg"  data-img="/images/photography/2048/JamesBay_2_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Florence and The Machine" src="/images/photography/600/Florence_2_600px.jpg"  data-img="/images/photography/2048/Florence_2_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Alice Cooper" src="/images/photography/600/AliceCooper_600px.jpg"  data-img="/images/photography/2048/AliceCooper_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            </div>
                            <div class="pv-column">
                                <img id="GalleryImage" title="Omar Rudberg" src="/images/photography/600/OmarRudberg_1_600px.jpg"  data-img="/images/photography/2048/OmarRudberg_1_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="First Aid Kit" src="/images/photography/600/FirstAidKit_600px.jpg"  data-img="/images/photography/2048/FirstAidKit_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Maneskin" src="/images/photography/600/Maneskin_600px.jpg"  data-img="/images/photography/2048/Maneskin_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="MCR" src="/images/photography/600/MCR_600px.jpg"  data-img="/images/photography/2048/MCR_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Johnny Depp" src="/images/photography/600/JohnnyDepp_600px.jpg"  data-img="/images/photography/2048/JohnnyDepp_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Florence and The Machine" src="/images/photography/600/Florence_1_600px.jpg"  data-img="/images/photography/2048/Florence_1_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Dua Lipa" src="/images/photography/600/DuaLipa_600px.jpg"  data-img="/images/photography/2048/DuaLipa_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Post Malone" src="/images/photography/600/PostMalone_600px.jpg"  data-img="/images/photography/2048/PostMalone_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="LennyKravitz" src="/images/photography/600/LennyKravitz_600px.jpg"  data-img="/images/photography/2048/LennyKravitz_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            </div>
                            <div class="pv-column">
                                <img id="GalleryImage" title="Loreen" src="/images/photography/600/Loreen_1_600px.jpg"  data-img="/images/photography/2048/Loreen_1_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Benjamin Ingrosso" src="/images/photography/600/BenjaminIngrosso_2_600px.jpg"  data-img="/images/photography/2048/BenjaminIngrosso_2_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Sigrid" src="/images/photography/600/Sigrid_600px.jpg"  data-img="/images/photography/2048/Sigrid_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Lil Nas X" src="/images/photography/600/LilNasX_600px.jpg"  data-img="/images/photography/2048/LilNasX_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Klara Hammarstrom" src="/images/photography/600/KlaraHammarstrom_600px.jpg"  data-img="/images/photography/2048/KlaraHammarstrom_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Janice" src="/images/photography/600/Janice_600px.jpg"  data-img="/images/photography/2048/Janice_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Gerd" src="/images/photography/600/Gerd_600px.jpg"  data-img="/images/photography/2048/Gerd_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Iggy Pop" src="/images/photography/600/IggyPop_600px.jpg"  data-img="/images/photography/2048/IggyPop_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Hakan Hellstrom" src="/images/photography/600/HakanHellstrom_600px.jpg"  data-img="/images/photography/2048/HakanHellstrom_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            </div>
                        </div>

                    </div>

                    <div class="tab-pane container tabContent" id="tab-weddings">

                        <div class="pv-row">
                            <div class="pv-column">
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_ja_3_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_ja_3_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_is_3_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_is_3_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_pc_6_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_pc_6_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_ja_6_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_ja_6_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_is_4_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_is_4_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_ja_8_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_ja_8_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_cm_2_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_cm_2_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            </div>
                            <div class="pv-column">
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_ja_2_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_ja_2_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_cm_5_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_cm_5_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_pc_4_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_pc_4_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_ja_5_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_ja_5_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_pc_1_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_pc_1_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_ja_12_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_ja_12_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_pc_5_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_pc_5_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            </div>
                            <div class="pv-column">
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_pc_2_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_pc_2_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_cm_1_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_cm_1_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_ja_10_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_ja_10_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_ja_1_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_ja_1_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_is_2_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_is_2_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_ja_11_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_ja_11_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_cm_3_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_cm_3_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            </div>
                            <div class="pv-column">
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_pc_7_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_pc_7_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_ja_4_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_ja_4_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_is_1_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_is_1_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_ja_7_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_ja_7_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_ja_9_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_ja_9_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_cm_6_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_cm_6_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" src="/images/photography/weddings/600/wedding_pc_8_600px.jpg"  data-img="/images/photography/weddings/2048/wedding_pc_8_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            </div>
                        </div>

                    </div>

                    <div class="tab-pane container tabContent" id="tab-event">

                        <div class="pv-row">
                            <div class="pv-column">
                            <img id="GalleryImage" title="Imaa Queen" src="/images/photography/event/600/ImaaQueen_600px.jpg"  data-img="/images/photography/event/2048/ImaaQueen_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            <img id="GalleryImage" title="Inger Nilsson" src="/images/photography/event/600/IngerNilsson_600px.jpg"  data-img="/images/photography/event/2048/IngerNilsson_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            <img id="GalleryImage" title="Idol 2021 finalists" src="/images/photography/event/600/Idol2021_600px.jpg"  data-img="/images/photography/event/2048/Idol2021_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            <img id="GalleryImage" title="David Hellenius, Malin Åkerman and Edward af Sillén" src="/images/photography/event/600/DavidMalinEdward_600px.jpg"  data-img="/images/photography/event/2048/DavidMalinEdward_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            <img id="GalleryImage" title="Sarah Klang" src="/images/photography/event/600/SarahKlang_600px.jpg"  data-img="/images/photography/event/2048/SarahKlang_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            <img id="GalleryImage" title="Katia Mosally and Kishti Tomita" src="/images/photography/event/600/KatiaKishti_600px.jpg"  data-img="/images/photography/event/2048/KatiaKishti_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>

                            </div>
                            <div class="pv-column">
                                <img id="GalleryImage" title="Miriam Bryant and Veronica Maggio" src="/images/photography/event/600/MaggioBryant_1_600px.jpg"  data-img="/images/photography/event/2048/MaggioBryant_1_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Edvin Ryding and Omar Rudberg" src="/images/photography/event/600/EdvinOmar_600px.jpg"  data-img="/images/photography/event/2048/EdvinOmar_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Thure Lindhardt and Mikael Persbrandt" src="/images/photography/event/600/ThureMikael_600px.jpg"  data-img="/images/photography/event/2048/ThureMikael_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Amie Bramme Sey and Pär Lernström" src="/images/photography/event/600/AmiePar_600px.jpg"  data-img="/images/photography/event/2048/AmiePar_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Fontana and Adam  Risberg" src="/images/photography/event/600/FontanaAdam_600px.jpg"  data-img="/images/photography/event/2048/FontanaAdam_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Almighty Aphroditey" src="/images/photography/event/600/AlmightyAphroditey_600px.jpg"  data-img="/images/photography/event/2048/AlmightyAphroditey_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            </div>
                            <div class="pv-column">
                            <img id="GalleryImage" title="Omar Rudberg" src="/images/photography/event/600/OmarRudberg_1_600px.jpg"  data-img="/images/photography/event/2048/OmarRudberg_1_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            <img id="GalleryImage" title="Rockbjörnen 2023 winners" src="/images/photography/event/600/RockbjornenWinners2023_600px.jpg"  data-img="/images/photography/event/2048/RockbjornenWinners2023_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            <img id="GalleryImage" title="Felicia Maxime, Edvin Ryding and Kardo Razzazi" src="/images/photography/event/600/FeliciaEdvinKardo_600px.jpg"  data-img="/images/photography/event/2048/FeliciaEdvinKardo_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            <img id="GalleryImage" title="Miriam Bryant and Victor Leksell" src="/images/photography/event/600/MiriamVictor_600px.jpg"  data-img="/images/photography/event/2048/MiriamVictor_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            <img id="GalleryImage" title="Lisa Borg" src="/images/photography/event/600/LisaBorg_600px.jpg"  data-img="/images/photography/event/2048/LisaBorg_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            <img id="GalleryImage" title="Stockholm Bloodbath cast" src="/images/photography/event/600/StockholmBloodbath_600px.jpg"  data-img="/images/photography/event/2048/StockholmBloodbath_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>

                            </div>
                            <div class="pv-column">
                                <img id="GalleryImage" title="Daniela Rathana" src="/images/photography/event/600/DanielaRathana_600px.jpg"  data-img="/images/photography/event/2048/DanielaRathana_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Drag Race Sweden" src="/images/photography/event/600/DragRaceSweden_600px.jpg"  data-img="/images/photography/event/2048/DragRaceSweden_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Marcus and Martinus" src="/images/photography/event/600/MarcusMartinus_600px.jpg"  data-img="/images/photography/event/2048/MarcusMartinus_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Victor Leksell" src="/images/photography/event/600/VictorLeksell_600px.jpg"  data-img="/images/photography/event/2048/VictorLeksell_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Stellan Skarsgård" src="/images/photography/event/600/StellanSkarsgard_600px.jpg"  data-img="/images/photography/event/2048/StellanSkarsgard_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                                <img id="GalleryImage" title="Lukas Moodysson" src="/images/photography/event/600/LukasMoodysson_600px.jpg"  data-img="/images/photography/event/2048/LukasMoodysson_2048px.jpg" onclick="fullView(this.getAttribute('data-img'));" draggable="false"></img>
                            </div>
                        </div>
                        
                    </div>

                    <div class="tab-pane container tabContent" id="tab-published">

                        <div class="pv-row">
                            <div class="pv-column">
                                <img src="/images/photography/published/KB_1_2048px.jpg" onclick="fullView(this.src)"></img>
                                <img src="/images/photography/published/KB_2_2048px.jpg" onclick="fullView(this.src)"></img>
                                <img src="/images/photography/published/KB_3_2048px.jpg" onclick="fullView(this.src)"></img>
                                <img src="/images/photography/published/KB_4_2048px.jpg" onclick="fullView(this.src)"></img>
                                <img src="/images/photography/published/KB_5_2048px.jpg" onclick="fullView(this.src)"></img>
                                
                            </div>
                            <div class="pv-column">
                                <img src="/images/photography/published/NG_Stockholmspriset.jpg" onclick="fullView(this.src)"></img>
                                <img src="/images/photography/published/Rockbjornen22_Nominations_2048px.jpg" onclick="fullView(this.src)"></img>
                                
                            </div>
                            <div class="pv-column">
                                <img src="/images/photography/published/Spotify_ICF.PNG" onclick="fullView(this.src)"></img>
                            </div>
                            <div class="pv-column">
                                <img src="/images/photography/published/Spotify_BIB.JPG" onclick="fullView(this.src)"></img>
                            </div>
                        </div>

                    </div>

                    <div class="tab-pane container tabContent" id="tab-other">

                    <div class="pv-row">
                            <div class="pv-column">
                                <img src="/images/photography/other/Linnea2_2048px.jpg" onclick="fullView(this.src)"></img>
                                <img src="/images/photography/other/Linnea_2048px.jpg" onclick="fullView(this.src)"></img>
                                
                            </div>
                            <div class="pv-column">
                                <img src="/images/photography/other/Workshop2_2048px.jpg" onclick="fullView(this.src)"></img>
                                <img src="/images/photography/other/Katthem_2048px.jpg" onclick="fullView(this.src)"></img>
                                <img src="/images/photography/other/Workshop_2048px.jpg" onclick="fullView(this.src)"></img>
                            </div>
                            <div class="pv-column">
                                <img src="/images/photography/other/Amy_2048px.jpg" onclick="fullView(this.src)"></img>
                                <img src="/images/photography/other/Rebecka2_2048px.jpg" onclick="fullView(this.src)"></img>
                            </div>
                            <div class="pv-column">
                                <img src="/images/photography/other/Rebecka3_2048px.jpg" onclick="fullView(this.src)"></img>
                                <img src="/images/photography/other/Rebecka_2048px.jpg" onclick="fullView(this.src)"></img>

                            </div>
                        </div>

                    </div>

                    <div class="tab-pane container tabContent" id="tab-test">

                        <div class="pv-row">
                            <div class="pv-column">
                                <img src="/images/photography/2048/JacobBanks_2048px.jpg" onclick="fullView(this.src)"></img>
                            </div>
                            <div class="pv-column">
                                <img src="/images/photography/2048/BMTH_2048px.jpg" onclick="fullView(this.src)"></img>
                            </div>
                            <div class="pv-column">
                                <img src="/images/photography/2048/FlorenceAndTheMachine_2048px.jpg" onclick="fullView(this.src)"></img>
                            </div>
                            <div class="pv-column">
                                <img src="/images/photography/2048/LennyKravitz_2048px.jpg" onclick="fullView(this.src)"></img>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div id="FullImageView" onclick="closeFullView()">
                <img id="FullImage" draggable="false"></img>
                {/* <div id="ImageInfo"></div> */}
                <span id="CloseButton" onclick="closeFullView()">X</span>
            </div>
        

        </div>
        
    )
}


/*

            <div class="flex-container">
                <div class="flex-item pv-development">
                    <img src="/images/concert_dark.jpg"></img>
                    <div class="pv-title">
                        <h1>Photography Portfolio</h1>
                        <i class="fas fa-code fa-2x"></i>
                        <h3>is under construction</h3>
                    </div>
                </div>
            </div>



<img class="gallery-img" src="/images/photography/2048/JacobBanks_2048px.jpg" onclick="FullView(this.src)"></img>
<img src="/images/photography/2048/JacobBanks_2048px.jpg" alt="Jacob Banks" onclick="fullView(this.src, this.alt)"></img>
<p id="ImageInfo"></p>

<img id="GalleryImage" src="/images/photography/2048/JacobBanks_1000px.jpg"  title="/images/photography/2048/JacobBanks_2048px.jpg" onclick="fullView(this.title)" draggable="false"></img>

<img id="GalleryImage" title="Jacob Banks" src="/images/photography/2048/JacobBanks_1000px.jpg"  data-img="/images/photography/2048/JacobBanks_2048px.jpg" onclick="fullView(this.getAttribute('data-img'), this.title);" draggable="false"></img>

                        <div class="gallery-img img1">
                            <div><a href="#">This is a title</a></div>
                        </div>
                        <div class="gallery-img img2">
                            <div><a href="#">This is a title</a></div>
                        </div>
                        <div class="gallery-img img3">
                            <div><a href="#">This is a title</a></div>
                        </div>
                        <div class="gallery-img img4">
                            <div><a href="#">This is a title</a></div>
                        </div>
                        <div class="gallery-img img5">
                            <div><a href="#">This is a title</a></div>
                        </div>
                        <div class="gallery-img img6">
                            <div><a href="#">This is a title</a></div>
                        </div>
                        <div class="gallery-img img7">
                            <div><a href="#">This is a title</a></div>
                        </div>






*/