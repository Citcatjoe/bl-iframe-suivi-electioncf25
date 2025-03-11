import "./style.scss";
import "./main.scss";
import bgLarge from "./img/bg-large.png";
import bgMobile from "./img/bg-mobile.png";
import blickLogo from "./img/blick-trans.svg";
import viteLogo from "/vite.svg";




document.addEventListener("DOMContentLoaded", function () {
  window.blickDataLayer.push({
      event: "iframe_impression",
      iframe_name: "storytelling_suivi_electioncf25",
      iframe_id: "iframe_impression"
  });

});



document.querySelector('#app').innerHTML = `
  <div class="w-full h-full relative">
				<img src="${blickLogo}" alt="" class="logo absolute top-2 left-2 w-24">
				<div class="btns absolute bottom-4 left-4 right-4 ">
					<div class="btns w-full">
						<a href="#" class="">
							<button class="font-inter font-bold uppercase w-full bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 rounded-full">
								Toutes les news
							</button>
						</a>
						<a href="#" class="">
							<button class="font-inter font-bold uppercase w-full bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 rounded-full">
								Nos chroniques
							</button>
						</a>
						<a href="#" class="">
							<button class="font-inter font-bold uppercase w-full bg-white hover:bg-gray-100 text-black font-semibold py-2 px-4 rounded-full">
								Nos reportages
							</button>
						</a>
					</div>
				</div>
				
	</div> 
`;


  

