import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'web-share',
  styleUrl: 'web-share.scss'
})
export class WebShare {

  @Prop() title: string;
  @Prop() text: string;
  @Prop() url: string;

  share() {
    // have to cast to any
    // as built in ts types do
    // not have share on navigator yet
    if ((navigator as any).share) {
      (navigator as any).share({
        title: this.title,
        text: this.text,
        url: this.url,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      // fallback to sharing to twitter
      window.open(`http://twitter.com/share?text=${this.text}&url=${this.url}`)
    }
  }

  render() {
    return (
      <button onClick={() => this.share()}>
        <ion-icon name='share'></ion-icon>
      </button>
    );
  }
}