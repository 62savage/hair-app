let selectedId = 480;

const apiRequestUrl =
  'http://ec2-user@ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080/node/478';
const apiRequestUrl2 = `http://ec2-user@ec2-43-201-111-38.ap-northeast-2.compute.amazonaws.com:8080/${selectedId}/children`;

const mockData = {
  ID: 478,
  CreatedAt: '2023-07-14T06:51:37.831032Z',
  UpdatedAt: '2023-07-14T07:02:20.850465Z',
  DeletedAt: null,
  Name: '당신의 퍼스널 컬러는?\t',
  Deps: 0,
  ParentID: null,
  Parent: null,
  ChildrenIDs: [
    {
      imgUrl: '',
      name: '봄웜',
      id: 480,
    },
    {
      imgUrl: '',
      name: '가을웜',
      id: 481,
    },
    {
      imgUrl: '',
      name: '여름쿨',
      id: 482,
    },
    {
      imgUrl: '',
      name: '겨울쿨',
      id: 483,
    },
  ],
  Position: {
    X: 472,
    Y: -174,
  },
  ImgUrl: '',
  IsFinal: false,
  Grouping: 0,
  Category: 2,
  NextCategory: 3,
};

export { mockData };
