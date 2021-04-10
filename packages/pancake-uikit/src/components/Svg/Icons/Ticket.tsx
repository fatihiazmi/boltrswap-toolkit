import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="80"
        height="80"
        viewBox="0 0 329 261"
      >
        <defs>
          <radialGradient
            id="radial-gradient"
            cx="0.24"
            cy="0.303"
            r="1.002"
            gradientTransform="translate(0.255 -0.083) rotate(40.664)"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#fff" />
            <stop offset="0.184" stop-color="#e8e8e8" />
            <stop offset="0.837" stop-color="#356295" />
            <stop offset="1" />
          </radialGradient>
        </defs>
        <g id="Group_7" data-name="Group 7" transform="translate(-849 -429)">
          <ellipse
            id="Ellipse_4"
            data-name="Ellipse 4"
            cx="109.5"
            cy="27.5"
            rx="109.5"
            ry="27.5"
            transform="translate(935 611)"
            opacity="0.64"
          />
          <circle
            id="Ellipse_3"
            data-name="Ellipse 3"
            cx="111.5"
            cy="111.5"
            r="111.5"
            transform="translate(849 429)"
            fill="url(#radial-gradient)"
          />
          <text
            id="_5"
            data-name="5"
            transform="translate(936 567)"
            font-size="75"
            font-family="Poppins-Bold, Poppins"
            font-weight="700"
          >
            <tspan x="0" y="0">
              5
            </tspan>
          </text>
          <g
            id="Ellipse_5"
            data-name="Ellipse 5"
            transform="translate(903 483)"
            fill="none"
            stroke="#000"
            stroke-width="4"
          >
            <circle cx="57.5" cy="57.5" r="57.5" stroke="none" />
            <circle cx="57.5" cy="57.5" r="55.5" fill="none" />
          </g>
        </g>
      </svg>
    </Svg>
  );
};

export default Icon;
