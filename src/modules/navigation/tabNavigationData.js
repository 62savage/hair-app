import HomeScreen from '../home/HomeViewContainer';
import GridsScreen from '../grids/GridsViewContainer';

import TestScreen from '../test/TestViewContainer';
import InfoScreen from '../info/InfoViewContainer';

import AuthScreen from '../auth/AuthViewContainer';
import PagesScreen from '../pages/PagesViewContainer';
import ComponentsScreen from '../components/ComponentsViewContainer';
import NoticeScreen from '../notice/NoticeViewContainer';

const iconHome = require('../../../assets/images/tabbar/home.png');
const iconInfo = require('../../../assets/images/tabbar/info.png');
const iconNotice = require('../../../assets/images/tabbar/notice.png');
const iconResult = require('../../../assets/images/tabbar/result.png');
const coloredIconHome = require('../../../assets/images/tabbar/home-color.png');
const coloredIconInfo = require('../../../assets/images/tabbar/info-color.png');
const coloredIconNotice = require('../../../assets/images/tabbar/notice-color.png');
const coloredIconResult = require('../../../assets/images/tabbar/result-color.png');
const iconCalendar = require('../../../assets/images/tabbar/calendar.png');
const iconGrids = require('../../../assets/images/tabbar/grids.png');
const iconPages = require('../../../assets/images/tabbar/pages.png');
const iconComponents = require('../../../assets/images/tabbar/components.png');

const tabNavigationData = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: iconHome,
    coloredIcon: coloredIconHome,
  },
  {
    name: 'Info',
    component: InfoScreen,
    icon: iconInfo,
    coloredIcon: coloredIconInfo,
  },
  {
    name: 'Notice',
    component: NoticeScreen,
    icon: iconNotice,
    coloredIcon: coloredIconNotice,
  },
  // {
  //   name: 'Pages',
  //   component: PagesScreen,
  //   icon: iconPages,
  // },
  // {
  //   name: 'Components',
  //   component: ComponentsScreen,
  //   icon: iconComponents,
  // },
  {
    name: 'Result',
    component: TestScreen,
    icon: iconResult,
    coloredIcon: coloredIconResult,
  },
];

export default tabNavigationData;
