import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';

registerDependencies({
    'mj-column': ['cm-singleline'],
    'mj-hero': ['cm-singleline'],
    'mj-text': ['cm-singleline'],
    'cm-singleline': [],
});

class CmSingleline extends BodyComponent {
    static allowedAttributes = {
        label: 'string',
        repeatertitle: 'string',
    };

    render() {
        return `<singleline ${this.htmlAttributes({
            label: this.getAttribute('label'),
            repeatertitle: this.getAttribute('repeatertitle'),
        })}>${this.getContent()}</singleline>`;
    }
}

export default CmSingleline;
