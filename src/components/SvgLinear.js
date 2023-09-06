import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { store } from '../redux/store';

const SvgLinear = ({ linearStart, linearEnd }) => {
  const { tree } = store.getState().tree;
  const { curAnalysis } = store.getState().analysisState;

  let curBranch = tree.filter(item => item.id == curAnalysis)[0];
  console.log('curBranch =>', curBranch.startGradient, curBranch.endGradient);

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
  const modifiedSvgXml = svgXml
    .replace(
      /<stop stop-color="#[0-9A-F]{6}"/g,
      `<stop stop-color="${
        linearStart ? linearStart : curBranch.startGradient
      }"`,
    )
    .replace(
      /<stop offset="1" stop-color="#[0-9A-F]{6}"/g,
      `<stop offset="1" stop-color="${
        linearEnd ? linearEnd : curBranch.endGradient
      }"`,
    );

  return <SvgXml xml={modifiedSvgXml} width="100%" height="100%" />;
};

export default SvgLinear;
