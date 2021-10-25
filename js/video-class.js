/* eslint-disable import/prefer-default-export */
export class VideoMedia {
  constructor(media) {
    this.photographer = media.photographerId;
    this.id = media.id;
    this.title = media.title;
    this.video = media.video;
    this.likes = media.likes;
    this.tags = media.tags;
    this.alt = media.alt;
  }

  displayList() {
    return `
          <div class="media-element" data-tag="${this.tags}">
            <a class="focus" data-id="${this.id}" href="./images/${this.photographer}/${this.video}">
              <video title="${this.alt}" src="images/${this.photographer}/${this.video}" class="media-element__thumb"></video>
            </a>
            <div class="media-element__info">
              <p class="media-element__title">${this.title}</p>
              <div tabindex="0" class="media-likes focus">
                <p class="media-likes__number">${this.likes}</p>
                <i class="fas fa-heart media-likes__icon" aria-label="j'aime"></i>
              </div>
            </div>
          </div>`;
  }

  displayLightbox() {
    return `
    <button class="lightbox__close">Fermer la fenêtre</button>
    <button class="lightbox__prev">Média précédent</button>
    <div class = "lightbox-media">
      <video title="${this.alt}" controls="">
          <source src="./images/${this.photographer}/${this.video}" type="video/mp4"/>
      </video>
      <p>${this.title}</p>
    </div>
    <button class="lightbox__next">Média suivant</button>
          `;
  }
}
