export const ChevronSvg = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_704_39)" filter="url(#filter0_d_704_39)">
        <path
          d="M10.2499 12.125C10.0443 12.125 9.83855 12.0465 9.68185 11.8896L4.86042 7.06815C4.54653 6.75425 4.54653 6.24574 4.86042 5.93185L9.68185 1.11042C9.99574 0.796526 10.5043 0.796526 10.8181 1.11042C11.132 1.42432 11.132 1.93283 10.8181 2.24672L6.56475 6.5L10.8187 10.7539C11.1325 11.0678 11.1325 11.5763 10.8187 11.8902C10.6617 12.0472 10.4558 12.125 10.2499 12.125Z"
          fill="#3294F8"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_704_39"
          x="-2"
          y="0.5"
          width="20"
          height="20"
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
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_704_39" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_704_39"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_704_39">
          <rect width="12" height="12" fill="white" transform="translate(2 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};
