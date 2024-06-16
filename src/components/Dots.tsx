type DimensionProps = {
  width: number;
  height: number;
};

const Dots = ({ width, height }: DimensionProps) => {
  return (
    <div className="flex gap-3">
      {/* red dot */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 124 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_39_2)">
          <rect x="8" y="8" width="100" height="100" rx="50" fill="#FF5E5E" />
        </g>
        <defs>
          <filter
            id="filter0_d_39_2"
            x="0"
            y="0"
            width="124"
            height="124"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="4"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_39_2"
            />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_39_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_39_2"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      {/* yellow dot */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 124 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_39_2)">
          <rect x="8" y="8" width="100" height="100" rx="50" fill="#FFD25E" />
        </g>
        <defs>
          <filter
            id="filter0_d_39_2"
            x="0"
            y="0"
            width="124"
            height="124"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="4"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_39_2"
            />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_39_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_39_2"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      {/* green dot */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 124 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_39_2)">
          <rect x="8" y="8" width="100" height="100" rx="50" fill="#5EFF64" />
        </g>
        <defs>
          <filter
            id="filter0_d_39_2"
            x="0"
            y="0"
            width="124"
            height="124"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="4"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_39_2"
            />
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_39_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_39_2"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Dots;
