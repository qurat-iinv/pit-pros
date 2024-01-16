import {ChatTabSvg, HomeTabSvg, ServicesTabSvg, TimeLogTabSvg} from '../assets';
import {ChatStack, HomeStack, ServicesStack, TimelogStack} from './tab-stack';

export const tabData = [
  {
    screenName: 'HomeScreen',
    label: 'Home',
    stack: HomeStack,
    TabIcon: HomeTabSvg,
  },
  {
    screenName: 'ServicesScreen',
    label: 'Services',
    stack: ServicesStack,
    TabIcon: ServicesTabSvg,
  },
  {
    screenName: 'TimelogScreen',
    label: 'Time Log',
    stack: TimelogStack,
    TabIcon: TimeLogTabSvg,
  },
  {
    screenName: 'ChatScreen',
    label: 'Chat',
    stack: ChatStack,
    TabIcon: ChatTabSvg,
  },
];
