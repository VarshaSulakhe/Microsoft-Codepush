import { Navigation } from 'react-native-navigation';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

export default () => {
	Navigation.registerComponent('Screen1', () => Screen1);
	Navigation.registerComponent('Screen2', () => Screen2);

	Navigation.startSingleScreenApp({
		screen: {
			screen: 'Screen1',
			title: 'Screen1',
			navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    		navigatorButtons: {} 
		}
	});
};
