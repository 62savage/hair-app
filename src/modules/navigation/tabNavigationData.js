import HomeScreen from '../home/HomeViewContainer';
import GridsScreen from '../grids/GridsViewContainer';

import TestScreen from '../test/TestViewContainer';
import InfoScreen from '../info/InfoViewContainer';

import AuthScreen from '../auth/AuthViewContainer';
import ComponentsScreen from '../components/ComponentsViewContainer';
import NoticeScreen from '../notice/NoticeViewContainer';
import ResultScreen from '../result/ResultViewContainer';

const iconHome = require('../../../assets/images/tabbar/home.png');
const iconInfo = require('../../../assets/images/tabbar/info.png');
const iconNotice = require('../../../assets/images/tabbar/notice.png');
const iconCounsel = require('../../../assets/images/tabbar/counseling.png');
const coloredIconHome = require('../../../assets/images/tabbar/home-color.png');
const coloredIconInfo = require('../../../assets/images/tabbar/info-color.png');
const coloredIconNotice = require('../../../assets/images/tabbar/notice-color.png');
const coloredIconCounsel = require('../../../assets/images/tabbar/counseling-color.png');
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
    component: ResultScreen,
    icon: iconCounsel,
    coloredIcon: coloredIconCounsel,
  },
  // {
  //   name: 'Test',
  //   component: TestScreen,
  //   icon: iconResult,
  //   coloredIcon: coloredIconResult,
  // },
];

export default tabNavigationData;
