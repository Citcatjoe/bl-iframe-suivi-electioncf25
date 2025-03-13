import "./style.scss";
import "./main.scss";
import bgLarge from "./img/bg-large.png";
import bgMobile from "./img/bg-mobile.png";
import blickLogo from "./img/blick-trans.svg";
import viteLogo from "/vite.svg";

document.addEventListener("DOMContentLoaded", function () {
  // Initialize the data layer if it doesn't exist
  window.blickDataLayer = window.blickDataLayer || [];
  
  window.blickDataLayer.push({
      event: "iframe_impression",
      iframe_name: "storytelling_suivi_electioncf25",
      iframe_id: "iframe_impression"
  });

  // Add click event listeners for the links
  document.querySelector('#link1').addEventListener('click', function(e) {
    // e.preventDefault();
    window.blickDataLayer.push({
		event: "iframe_click",
		iframe_name: "storytelling_suivi_electioncf25",
		iframe_id: "iframe_link1_clicked"
	});
  });

  document.querySelector('#link2').addEventListener('click', function(e) {
    // e.preventDefault();
    window.blickDataLayer.push({
		event: "iframe_click",
		iframe_name: "storytelling_suivi_electioncf25",
		iframe_id: "iframe_link2_clicked"
	});
  });

  document.querySelector('#link3').addEventListener('click', function(e) {
    // e.preventDefault();
    window.blickDataLayer.push({
		event: "iframe_click",
		iframe_name: "storytelling_suivi_electioncf25",
		iframe_id: "iframe_link3_clicked"
	});
  });

  //console.log(window.blickDataLayer);
});

document.querySelector('#app').innerHTML = `
	
  <div class="w-full h-full relative">
				<!--<img src="${blickLogo}" alt="" class="logo absolute top-2 left-2 w-20">-->
				<div class="btns absolute bottom-4 left-4 right-4 ">
					<div class="btns w-full">
						<a href="https://www.blick.ch/fr/dossiers/la-saga-de-la-succession-de-viola-amherd-au-conseil-federal-id20669097/" id="link1" target="_parent" class="">
							<button class="font-inter font-bold uppercase w-full bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 rounded-full shadow-lg">
								Les candidats
							</button>
						</a>
						<a href="https://www.blick.ch/fr/dossiers/les-scandales-au-ddps-id20669632/" id="link2" target="_parent" class="">
							<button class="font-inter font-bold uppercase w-full bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 rounded-full shadow-lg">
								Les scandales
							</button>
						</a>
						<a href="https://www.blick.ch/fr/suisse/elections-au-conseil-federal-qui-de-martin-pfister-ou-markus-ritter-succedera-a-viola-amherd-id20669844.html" id="link3" target="_parent" class="">
							<button class="font-inter font-bold uppercase w-full bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 rounded-full shadow-lg">
								Notre live
							</button>
						</a>
					</div>
				</div>
				
	</div> 
`;


  

