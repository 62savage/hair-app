import React from 'react';
import { SvgXml } from 'react-native-svg';
import { store } from '../redux/store';
import { colors } from '../styles';

const SvgLinear = ({ linearStart, linearEnd, isQuestion }) => {
  // console.log('linearStart', linearStart, 'linearEnd', linearEnd);
  const { tree } = store.getState().tree;
  const { curAnalysis } = store.getState().analysisState;

  let curBranch = tree.filter(item => item.id == curAnalysis)[0];

  const questionXml = `
  <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_4_101)">
  <path d="M52 104C23.3245 104 0 80.6755 0 52C0 23.3245 23.3245 0 52 0C80.6755 0 104 23.3245 104 52C104 80.6755 80.6755 104 52 104ZM52 1.67032C24.2547 1.68032 1.68032 24.2547 1.68032 52C1.68032 79.7453 24.2547 102.33 52.01 102.33C79.7653 102.33 102.34 79.7553 102.34 52C102.34 24.2447 79.7553 1.68032 52 1.68032V1.67032Z" fill="url(#paint0_linear_4_101)"/>
  <path d="M50.9202 81.9057C52.9906 81.9057 54.651 80.2454 54.651 78.175C54.651 76.1046 52.9906 74.4443 50.9202 74.4443C48.8498 74.4443 47.1895 76.1046 47.1895 78.175C47.1895 80.2454 48.7698 81.9057 50.9202 81.9057ZM48.6798 66.1427H53.0807C53.0807 53.4503 69.1738 49.5495 69.1738 37.0271C69.1738 27.2352 61.3723 22.0942 52.0805 22.0942C44.449 22.0942 37.3976 25.7449 34.8271 33.0463L38.5579 35.1167C40.3782 29.3056 45.6092 26.3251 52.0805 26.3251C59.6319 26.3251 64.6929 30.0558 64.6929 37.0271C64.6929 48.0592 48.6798 51.5399 48.6798 66.1427Z" fill="url(#paint1_linear_4_101)"/>
  </g>
  <defs>
  <linearGradient id="paint0_linear_4_101" x1="6.08117" y1="6.08117" x2="110.791" y2="110.791" gradientUnits="userSpaceOnUse">
  <stop stop-color="#F9FA50"/>
  <stop offset="1" stop-color="#29FC4B"/>
  </linearGradient>
  <linearGradient id="paint1_linear_4_101" x1="34.8271" y1="52" x2="69.1738" y2="52" gradientUnits="userSpaceOnUse">
  <stop stop-color="#F9FA50"/>
  <stop offset="1" stop-color="#29FC4B"/>
  </linearGradient>
  <clipPath id="clip0_4_101">
  <rect width="104" height="104" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  `;

  const svgXml = `
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_3_2421)">
        <path d="M22.4312 33.9741L15.2005 26.7434C14.7665 26.3094 14.7665 25.6075 15.2005 25.1735L16.7704 23.6036C17.2044 23.1696 17.9063 23.1696 18.3403 23.6036L23.2161 28.4795L33.6512 18.0444C34.0853 17.6104 34.7871 17.6104 35.2211 18.0444L36.791 19.6143C37.225 20.0483 37.225 20.7501 36.791 21.1842L23.9919 33.9833C23.5578 34.4173 22.856 34.4173 22.422 33.9833L22.4312 33.9741Z" fill="url(#paint0_linear_3_2421)"/>
        <path d="M25.9954 52C11.6633 52 0 40.3367 0 25.9954C0 11.6541 11.6633 0 25.9954 0C40.3275 0 51.9908 11.6633 51.9908 25.9954C51.9908 40.3275 40.3275 51.9908 25.9954 51.9908V52ZM25.9954 0.840348C12.125 0.840348 0.840348 12.125 0.840348 25.9954C0.840348 39.8657 12.125 51.1597 26.0046 51.1597C39.8842 51.1597 51.1689 39.875 51.1689 25.9954C51.1689 12.1158 39.875 0.840348 25.9954 0.840348Z" fill="url(#paint1_linear_3_2421)"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear_3_2421" x1="14.8681" y1="25.9954" x2="37.1234" y2="25.9954" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F9FA50"/>
          <stop offset="1" stop-color="#29FC4B"/>
        </linearGradient>
        <linearGradient id="paint1_linear_3_2421" x1="3.03818" y1="3.03818" x2="55.3891" y2="55.3891" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F9FA50"/>
          <stop offset="1" stop-color="#29FC4B"/>
        </linearGradient>
        <clipPath id="clip0_3_2421">
          <rect width="52" height="52" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `;

  // Change the color by modifying the XML
  const toModifySvgXml = isQuestion ? questionXml : svgXml;
  const modifiedSvgXml = toModifySvgXml
    .replace(
      /<stop stop-color="#[0-9A-F]{6}"/g,
      `<stop stop-color="${
        linearStart
          ? linearStart
          : curBranch
          ? curBranch.startGradient
          : colors.primaryGradientStart
      }"`,
    )
    .replace(
      /<stop offset="1" stop-color="#[0-9A-F]{6}"/g,
      `<stop offset="1" stop-color="${
        linearEnd
          ? linearEnd
          : curBranch
          ? curBranch.endGradient
          : colors.primaryGradientEnd
      }"`,
    );

  return <SvgXml xml={modifiedSvgXml} width="100%" height="100%" />;
};

export default SvgLinear;
