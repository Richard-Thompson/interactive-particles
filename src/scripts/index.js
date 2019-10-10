import ready from 'domready';

import App from './App';

const initParticlesEffect = () => {
	window.app = new App();
	window.app.init();
};

window.initParticlesEffect = initParticlesEffect;
