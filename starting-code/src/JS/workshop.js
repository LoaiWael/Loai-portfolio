function overlay(close = false, content) {
	const overLay = document.querySelector('.overlay');
	const overlayContent = document.querySelector('.overlay-content');
	if (close) {
		overlayContent.classList.remove('js-pop-up');
		overlayContent.classList.add('js-pop-out');
		backButton(true);
		return $(overLay).fadeOut(200);
	} else {
		overlayContent.classList.remove('js-pop-out');
		overlayContent.classList.add('js-pop-up');
		$(overLay).fadeIn();
	}

	const srcButton = chooseButton(content);

	fetch("public/data.json").then(data => data.json()).then(data => {
		const category = data.myWork[content];
		const works = category.content;

		let figures = '';
		works.forEach(work => {
			let stringWork = JSON.stringify(work);
			figures += `
					<figure>
							<img loading="lazy" draggable="false" src="${work.photoPrev}" alt="${work.title}">
							<div class="about-product">
									<figcaption>${work.title}</figcaption>
									<span>${work.quickDoc}</span>
							</div>
							<div class="figure-buttons">
									<a target="_blank" href="${work.src[0]}">${srcButton}</a>
									<a class="secondary-button" onclick="overlayDetails('${content}',${JSON.stringify(work).replace(/"/g, '&quot;')})">Read more</a>
							</div>
					</figure>
			`;
		})

		overlayContent.innerHTML = `
		<button class="close-button" onclick="overlay(true)" title="Close"><span></span><span></span></button>
			<h1>${category.categoryName}</h1>
			<section>
				${figures}
			</section>`;
	})
}

function overlayDetails(categ, work) {
	backButton(false);

	const overlayDetails = document.querySelector('.overlay-content-details');

	fetch('public/data.json').then(res => res.json()).then(data => {

		const contributors = data.contributors;
		const technologies = data.technologies;

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

		const srcButton = chooseButton(categ);

		let buttons = '';
		work.src.forEach(button => {
			if (categ === 'websites' || categ === 'open-source') {
				buttons = `<a target="_blank" href="${work.src[0]}">${srcButton}</a> <a target="_blank" href="${work.src[1]}">Main repo <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder2-open" viewBox="0 0 16 16"><path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z"/></svg></a>`
			}
			else {
				buttons += `<a target="_blank" href="${button}">${srcButton}</a>`
			}
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
		imgContentHover();
	});
	function imgContentHover() {
		const photos = document.querySelectorAll('ul.photos li img');
		const markers = document.querySelector('ul.markers');
		photos.forEach(photo => {
			photo.addEventListener('mouseenter', () => {
				markers.style.opacity = '0.25';
			});
			photo.addEventListener('mouseleave', () => {
				markers.style.opacity = '1';
			});
		})
	}
}

function backButton(back = false) {
	const details = document.querySelector('.overlay-content-details');
	if (back) {
		details.classList.remove('js-pop-up');
		details.classList.add('js-pop-out');
		return $(details).fadeOut(200);
	} else {
		details.classList.remove('js-pop-out');
		details.classList.add('js-pop-up');
		$(details).fadeIn(200);
	}
}