## Issue
[link](https://github.com/software-mansion/react-native-svg/issues/2145)

## Setup

If you run `npm run start` and then try clicking on the button, looking at the console you can see that the `<Rect>` element is catching the press event.

Looking at the React devtool and hovering on the `<Rect>` element you can see that the element has been moved up and is covering the button.  
![Overlay Covering Button](https://raw.githubusercontent.com/b-steel/react-native-svg-rotate/main/screenshots/covering.jpg)
If you remove the `rotation={-90}` from the `<G>` tag then the element is where it should be.  
![Overlay Not Covering Button](https://raw.githubusercontent.com/b-steel/react-native-svg-rotate/main/screenshots/not-covering.jpg)
