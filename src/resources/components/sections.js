export class TextSection {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }

    render() {
        return `
            <div class="text-section">
                <p>${this.text}</p>
            </div>
        `;
    }
}

export class CodeSection {
    constructor(title, code, text) {
        this.title = title;
        this.code = code;
        this.text = text;
    }

    render() {
        return `
            <div class="code-section">
                <pre><code>${this.code}</code></pre>
            </div>
        `;
    }
}

export class ImageSection {
    constructor(image, description) {
        this.image = image;
        this.description = description;
    }

    render() {
        return `
            <div class="image-section">
                <img src="${this.image}" alt="Image">
            </div>
        `;
    }
}

export class VideoSection {
    constructor(video, description) {
        this.video = video;
        this.description = description;
    }

    render() {
        return `
            <div class="video-section">
                <video src="${this.video}" controls></video>
            </div>
        `;
    }
}

export class LinkSection {
    constructor(link, description) {
        this.link = link;
        this.description = description;
    }

    render() {
        return `
            <div class="link-section">
                <a href="${this.link}">${this.description}</a>
            </div>
        `;
    }
}

export class CorrelatedItemSection {
    constructor(title, items) {
        this.title = title;
        this.items = items;
    }

    render() {
        return `
            <div class="correlated-item-section">
                <h3>${this.title}</h3>
                <ul>
                    ${this.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    }
}

export class CorrelatedSection {

    constructor(title, items) {
        this.title = title;
        this.items = items;
    }

    render() {
        return `
            <div class="correlated-section">
                <h3>${this.title}</h3>
                <ul>
                    ${this.items.map(item => item.render()).join('')}
                </ul>
            </div>
        `;
    }
}

export class SearchItem {
    constructor(title, language, description, author, last_update) {
        this.title = title;
        this.language = language;
        this.description = description;
        this.author = author;
        this.last_update = last_update;
    }

    render() {
        return `
            <div class="search-item">
                <div class="search-item-header">
                    <div class="search-item-title-container">
                        <h3 class="search-item-title-text">
                            ${this.title}
                        </h3>
                    </div>

                    <div class="search-item-language-container">
                        <p class="search-item-language-text">
                            ${this.language}
                        </p>
                    </div>
                </div>

                <div class="search-item-body">
                    <div class="search-item-description-container">
                        <p class="search-item-description-text">
                            ${this.description}
                        </p>
                    </div>
                </div>

                <div class="search-item-footer">
                    <div class="search-item-author-container">
                        <p class="search-item-author-text">
                            ${this.author}
                        </p>
                    </div>

                    <div class="search-item-last-update-container">
                        <p class="search-item-last-update-text">
                            ${this.last_update}
                        </p>
                    </div>
                </div>
            </div>
        `
    }
}

