
workshop_openSource_hover();
workshop_uiux_hover();
workshop_3d_hover();

function workshop_openSource_hover() {
	const openSourceLi = document.querySelector("#open-source");
	const websitesLi = document.querySelector("#websites");

	openSourceLi.addEventListener("mouseenter", () => {
		websitesLi.style.top = "calc(var(--top) - 2.5%)";
		websitesLi.style.right = "calc((var(--top) / 16 + var(--right)) + 2.5%)";
	});

	openSourceLi.addEventListener("mouseleave", () => {
		websitesLi.style.top = "";
		websitesLi.style.right = "";
	});
}
function workshop_uiux_hover() {
	const uiux = document.querySelector("#ui-ux");
	const openSourceLi = document.querySelector("#open-source");
	const websitesLi = document.querySelector("#websites");

	uiux.addEventListener("mouseenter", () => {
		openSourceLi.style.top = "calc(var(--top) - 2.5%)";
		openSourceLi.style.right = "calc((var(--top) / 16 + var(--right)) - 1%)";
		websitesLi.style.top = "calc(var(--top) - 2.5%)";
		websitesLi.style.right = "calc((var(--top) / 16 + var(--right)) + 2.5%)";
	});

	uiux.addEventListener("mouseleave", () => {
		openSourceLi.style.top = "";
		openSourceLi.style.right = "";
		websitesLi.style.top = "";
		websitesLi.style.right = "";
	});
}
function workshop_3d_hover() {
	const modeling = document.querySelector("#modeling");
	const uiux = document.querySelector("#ui-ux");
	const openSourceLi = document.querySelector("#open-source");
	const websitesLi = document.querySelector("#websites");

	modeling.addEventListener("mouseenter", () => {
		uiux.style.top = "calc(var(--top) - 2.5%)";
		uiux.style.right = "calc((var(--top) / 16 + var(--right)) - 4%)";
		openSourceLi.style.top = "calc(var(--top) - 2.5%)";
		openSourceLi.style.right = "calc((var(--top) / 16 + var(--right)) - 1%)";
		websitesLi.style.top = "calc(var(--top) - 2.5%)";
		websitesLi.style.right = "calc((var(--top) / 16 + var(--right)) + 2.5%)";
	});

	modeling.addEventListener("mouseleave", () => {
		uiux.style.top = "";
		uiux.style.right = "";
		openSourceLi.style.top = "";
		openSourceLi.style.right = "";
		websitesLi.style.top = "";
		websitesLi.style.right = "";
	});
}
function overlay(close = false, content) {
	const overLay = document.querySelector('.overlay');
	const overlayContent = document.querySelector('.overlay-content');
	if (close) {
		overlayContent.classList.add('js-pop-out');
		overlayContent.classList.remove('js-pop-up');
		backButton(true);
		return $(overLay).fadeOut(200);
	} else {
		overlayContent.classList.add('js-pop-up');
		overlayContent.classList.remove('js-pop-out');
		$(overLay).fadeIn();
	}


	if (content === '3d') {
		overlayContent.innerHTML = `
			<button class="close-button" onclick="overlay(true)" title="Close"><span></span><span></span></button>
			<h1>3D Models.</h1>
			<section>
					<figure id="mug">
							<img loading="lazy" draggable="false" src="./public/My workshop/3D/photo 4.webp" alt="3d mug">
							<div class="about-product">
									<figcaption>3D Mug</figcaption>
									<span>3D mug was made for Allam coffee website.</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank" href="https://www.instagram.com/p/DCsoEJTInh6/?img_index=1">View post
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
															d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
													<path fill-rule="evenodd"
															d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
											</svg></a>
									<a class="secondary-button" onclick="overlayDetails('threeD','mug')">Read more</a>
							</div>
					</figure>
					<figure id="perfume">
							<img loading="lazy" draggable="false"
									src="./public/My workshop/3D/perfume/perfume 3 - preview.webp" alt="3d perfume">
							<div class="about-product">
									<figcaption>3D Perfume</figcaption>
									<span>3D perfume model for Miss Dior.</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank" href="https://www.instagram.com/p/C3RAiXtt5Da/?img_index=1">View post
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
															d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
													<path fill-rule="evenodd"
															d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
											</svg></a>
									<a class="secondary-button" onclick="overlayDetails('threeD','perfume')">Read more</a>
							</div>
					</figure>
					<figure id="smart-watch">
							<img loading="lazy" draggable="false"
									src="./public/My workshop/3D/Smart watch/smart watch preview.webp" alt="3d smart-watch">
							<div class="about-product">
									<figcaption>3D Smart watch</figcaption>
									<span>3D smart watch model was made to simulate a real smart watch.</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank" href="https://www.instagram.com/p/C28cU4jNiAL/?img_index=1">View post
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
															d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
													<path fill-rule="evenodd"
															d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
											</svg></a>
									<a class="secondary-button" onclick="overlayDetails('threeD','smartWatch')">Read more</a>
							</div>
					</figure>
					<figure id="silver-iphone">
							<img loading="lazy" draggable="false"
									src="./public/My workshop/3D/silver iphone/silver iphone 1 - preview.webp"
									alt="siver iphone">
							<div class="about-product">
									<figcaption>3D Iphone</figcaption>
									<span>3D silver Iphone model was made to simulate the real one.</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank" href="https://www.instagram.com/p/C2TAz9gteIG/?img_index=1">View post
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
															d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
													<path fill-rule="evenodd"
															d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
											</svg></a>
									<a class="secondary-button" onclick="overlayDetails('threeD','silverIphone')">Read more</a>
							</div>
					</figure>
					<figure id="red-iphone">
							<img loading="lazy" draggable="false"
									src="./public/My workshop/3D/Red iphone/red iphone 1 - preview.webp" alt="red iphone">
							<div class="about-product">
									<figcaption>3D Iphone</figcaption>
									<span>3D red Iphone model was made to simulate the real one.</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank" href="https://www.instagram.com/p/C2TBIDvtkR-/?img_index=1">View post
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
															d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
													<path fill-rule="evenodd"
															d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
											</svg></a>
									<a class="secondary-button">Read more</a>
							</div>
					</figure>
					<figure id="bronze-iphone">
							<img loading="lazy" draggable="false"
									src="./public/My workshop/3D/Orange iphone/bronze iphone 1 - preview.webp"
									alt="bronze iphone">
							<div class="about-product">
									<figcaption>3D Iphone</figcaption>
									<span>3D bronze Iphone model was made to simulate the real one.</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank" href="https://www.instagram.com/p/C2TBjXXNwcn/?img_index=1">View post
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
															d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
													<path fill-rule="evenodd"
															d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
											</svg></a>
									<a class="secondary-button">Read more</a>
							</div>
					</figure>
					<figure id="green-iphone">
							<img loading="lazy" draggable="false"
									src="./public/My workshop/3D/Green Iphone/green iphone 1 - preview.webp" alt="green iphone">
							<div class="about-product">
									<figcaption>3D Iphone</figcaption>
									<span>3D green Iphone model was made to simulate the real one.</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank" href="https://www.instagram.com/p/C2TB36ztRjZ/?img_index=1">View post
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
															d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
													<path fill-rule="evenodd"
															d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
											</svg></a>
									<a class="secondary-button">Read more</a>
							</div>
					</figure>
					<figure id="donuts">
							<img loading="lazy" draggable="false"
									src="./public/My workshop/3D/donuts falling with pink background.webp" alt="donuts">
							<div class="about-product">
									<figcaption>3D Donut</figcaption>
									<span>3D donut candy was made to feel like a real candy.</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank" href="https://www.instagram.com/p/C0fEXEArWt1/?img_index=1">View post
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
															d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
													<path fill-rule="evenodd"
															d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
											</svg></a>
									<a class="secondary-button">Read more</a>
							</div>
					</figure>
					<figure id="roblox">
							<img loading="lazy" draggable="false" src="./public/My workshop/3D/roblox-model.webp"
									alt="roblox model">
							<div class="about-product">
									<figcaption>Roblox Render</figcaption>
									<span>A banner was made for a youtuber.</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank" href="https://www.instagram.com/p/Com73dYq-MJ/">View post <svg
													xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
															d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
													<path fill-rule="evenodd"
															d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
											</svg></a>
									<a class="secondary-button">Read more</a>
							</div>
					</figure>
					<figure id="minecraft-nethier">
							<img loading="lazy" draggable="false" src="./public/My workshop/3D/minecraft-neither.webp"
									alt="minecraft-neither">
							<div class="about-product">
									<figcaption>Minecraft Render</figcaption>
									<span>A banner was made for Minecraft communication app.</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank" href="https://www.instagram.com/p/CokWwptqAW-/?img_index=1">View post
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
															d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
													<path fill-rule="evenodd"
															d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
											</svg></a>
									<a class="secondary-button" onclick="overlayDetails('threeD','minecraftNethier')">Read more</a>
							</div>
					</figure>
					<figure id="minecraft">
							<img loading="lazy" draggable="false" src="./public/My workshop/3D/minecraft 1 - preview.webp"
									alt="minecraft">
							<div class="about-product">
									<figcaption>Minecraft Render</figcaption>
									<span>A render was made for a Minecraft youtuber.</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank" href="https://www.instagram.com/p/CoikIijq9SM/?img_index=1">View post
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
															d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
													<path fill-rule="evenodd"
															d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
											</svg></a>
									<a class="secondary-button">Read more</a>
							</div>
					</figure>
					<figure id="loai-logo">
							<img loading="lazy" draggable="false" src="./public/My workshop/3D/loai big logo.webp"
									alt="loai logo">
							<div class="about-product">
									<figcaption>Logo Render</figcaption>
									<span>A render was made for me after learning a new skills.</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank" href="https://www.instagram.com/p/CoqP_AmqobM/?img_index=1">View post
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
															d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
													<path fill-rule="evenodd"
															d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
											</svg></a>
									<a class="secondary-button">Read more</a>
							</div>
					</figure>
			</section>
	`;
	} else if (content === 'ui-ux') {
		overlayContent.innerHTML = `
			<button class="close-button" onclick="overlay(true)" title="Close"><span></span><span></span></button>
			<h1>UI UX.</h1>
			<section>
					<figure id="allam-ui-ux">
							<img loading="lazy" draggable="false" src="./public/My workshop/UI UX/allam/photo 1.webp"
									alt="allam coffee">
							<div class="about-product">
									<figcaption>Allam coffee app</figcaption>
									<span>UI UX design for allam coffee application.</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank"
											href="https://www.behance.net/gallery/213196697/Allam-Arabic-coffee-UI-UX-App-design">Behance
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
															d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
													<path fill-rule="evenodd"
															d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
											</svg></a>
									<a class="secondary-button">Read more</a>
							</div>
					</figure>
					<figure id="music-platform">
							<img loading="lazy" draggable="false"
									src="./public/My workshop/UI UX/music platform/music player.webp" alt="music platform">
							<div class="about-product">
									<figcaption>Music platform</figcaption>
									<span>UI UX design for a virtual music platform.</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank"
											href="https://www.behance.net/gallery/208943153/Music-platform-UI-UX-designn">Behance
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
															d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
													<path fill-rule="evenodd"
															d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
											</svg></a>
									<a class="secondary-button">Read more</a>
							</div>
					</figure>
			</section>
			`;
	}
	else if (content === 'open-source') {
		overlayContent.innerHTML = `
			<button class="close-button" onclick="overlay(true)" title="Close"><span></span><span></span></button>
			<h1>Open Source.</h1>
			<section
					style="display: flex; justify-content: center; align-items: center; height: calc(100% - 4.5em);">
					<p>Empty.</p>
			</section>
	`;
	}
	else if (content === 'websites') {
		overlayContent.innerHTML = `
			<button class="close-button" onclick="overlay(true)" title="Close"><span></span><span></span></button>
			<h1>Websites.</h1>
			<section>
					<figure id="allam-website">
							<img loading="lazy" draggable="false" src="./public/My workshop/websites/allam.webp"
									alt="Allam website">
							<div class="about-product">
									<figcaption>Allam coffee app</figcaption>
									<span>Small website to improve the accessibility at the coffee shop.</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank" href="https://loaiwael.github.io/Allam-coffee/">Live view
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
													class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
													<path fill-rule="evenodd"
															d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
													<path fill-rule="evenodd"
															d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
											</svg></a>
									<a class="secondary-button">Read more</a>
							</div>
					</figure>
			</section>
	`;
	}
}

function overlayDetails(categ, product) {
	backButton(false);

	const overlayDetails = document.querySelector('.overlay-content-details');

	fetch('src/JS/data.json').then(res => res.json()).then(data => {
		const contributors = data.contributors;
		const technologies = data.technologies;
		const work = data.myWork[categ][product];

		// dynamic elements
		let images = '';
		work.images.forEach(image => {
			images += `<li><img src="${image}" alt=""></li>`;
		})

		let imagesMarker = '';
		for (let i = 0; i < work.numOfImages; i++) {
			imagesMarker += `<li><a href="#" style="--i:${i};"></a></li>`;
		}

		let tech = '';
		work.technologies.forEach(elem => {
			tech += `<div><span id="${technologies[elem.name].id}"><img src="${technologies[elem.name].icon}" alt="">${technologies[elem.name].name}</span><small>${elem.techUsage}</small></div>`;
		})

		let creators = '';
		work.contributors.forEach(creator => {
			creators += `<a target="_blank"
							href="${contributors[creator].communication}">
							<img src="${contributors[creator].photo}" alt="${contributors[creator].name}" draggable="false" loading="lazy">
							<div class="contributor-info">
									<span class="contributor-info-name">${contributors[creator].name}</span>
									<small class="contributor-info-position">${contributors[creator].position}</small>
							</div>
					</a>`;
		})

		let buttons = '';
		work.src.forEach(button => {
			buttons += `<a target="_blank" href="${button}">View post
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
							class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
							<path fill-rule="evenodd"
									d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
							<path fill-rule="evenodd"
									d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
					</svg></a>`;
		})

		overlayDetails.innerHTML = `<div class="header">
	<button class="back-button" onclick="backButton(true)" title="Back"><span></span></button>
	<button class="close-button" onclick="overlay(true)"
			title="Close"><span></span><span></span></button>
</div>
<div class="scrolling-area">
	<section class="photos-area" style="--num-photos:${work.numOfImages};">
			<ul class="photos">
					${images}
			</ul>
			<ul class="markers">
					${imagesMarker}
			</ul>
	</section>
	<section class="doc">
			<h1>${work.title}</h1>
			<small>${work.creationDate}</small>
			<p class="details-info">${work.doc}
			</p>
	</section>
	<section class="technologies">
			<h2>Technologies:</h2>
			<div class="details-info">
			${tech}
			</div>
	</section>
	<section class="contributors">
			<h2>Contributors:</h2>
			<div class="details-info">
					${creators}
			</div>
	</section>
	<div class="figure-buttons">
			${buttons}
	</div>
</div>`;

		document.querySelectorAll('.markers a').forEach(marker => {
			marker.addEventListener('click', function (event) {
				event.preventDefault();

				let index = getComputedStyle(this).getPropertyValue('--i').trim();
				let image = document.querySelectorAll('.photos li')[index];
				let container = document.querySelector('.photos');

				container.scrollTo({
					left: image.offsetLeft,
				});
			});
		});
	});

}

function backButton(back = false) {
	const details = document.querySelector('.overlay-content-details');
	if (back) {
		details.classList.add('js-pop-out');
		details.classList.remove('js-pop-up');
		return $(details).fadeOut(200);
	} else {
		details.classList.add('js-pop-up');
		details.classList.remove('js-pop-out');
		$(details).fadeIn(200);
	}
}