import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"} className="inline-flex h-8 w-fit items-center gap-1">
      <svg width={32} height={32} viewBox="0 0 48 48" fill="none">
        <g filter="url(#filter0_iii_3051_46879)">
          <g clipPath="url(#clip0_3051_46879)">
            <rect width={48} height={48} rx={12} fill="#7839EE" />
            <rect
              width={48}
              height={48}
              fill="url(#paint0_linear_3051_46879)"
            />
            <g filter="url(#filter1_d_3051_46879)">
              <path
                d="M19.5 12L23.3184 20.1816L31.5 24L23.3184 27.8184L19.5 36L15.6816 27.8184L7.5 24L15.6816 20.1816L19.5 12Z"
                fill="url(#paint1_linear_3051_46879)"
              />
              <path
                opacity={0.5}
                d="M22.5352 29.4964L27.3006 28.6765L30.0006 36L32.7006 28.6765L40.3929 30L35.4006 24L40.3929 18L32.7006 19.3235L30.0006 12L27.3006 19.3235L22.5352 18.5036L23.3183 20.1816L31.4999 24L23.3183 27.8184L22.5352 29.4964Z"
                fill="url(#paint2_linear_3051_46879)"
              />
            </g>
          </g>
          <rect
            x={1}
            y={1}
            width={46}
            height={46}
            rx={11}
            stroke="url(#paint3_linear_3051_46879)"
            strokeWidth={2}
          />
        </g>
        <defs>
          <filter
            id="filter0_iii_3051_46879"
            x={0}
            y={-3}
            width={48}
            height={54}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={-3} />
            <feGaussianBlur stdDeviation={1.5} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_3051_46879"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={3} />
            <feGaussianBlur stdDeviation={1.5} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_3051_46879"
              result="effect2_innerShadow_3051_46879"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius={1}
              operator="erode"
              in="SourceAlpha"
              result="effect3_innerShadow_3051_46879"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_3051_46879"
              result="effect3_innerShadow_3051_46879"
            />
          </filter>
          <filter
            id="filter1_d_3051_46879"
            x={4.5}
            y={5.25}
            width={39}
            height={42}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius={1.5}
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_3051_46879"
            />
            <feOffset dy={2.25} />
            <feGaussianBlur stdDeviation={2.25} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_3051_46879"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_3051_46879"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_3051_46879"
            x1={24}
            y1={5.96047e-7}
            x2={26}
            y2={48}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity={0} />
            <stop offset={1} stopColor="white" stopOpacity={0.12} />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3051_46879"
            x1={19.5}
            y1={12}
            x2={19.5}
            y2={36}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity={0.8} />
            <stop offset={1} stopColor="white" stopOpacity={0.5} />
          </linearGradient>
          <linearGradient
            id="paint2_linear_3051_46879"
            x1={31.4641}
            y1={12}
            x2={31.4641}
            y2={36}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity={0.8} />
            <stop offset={1} stopColor="white" stopOpacity={0.5} />
          </linearGradient>
          <linearGradient
            id="paint3_linear_3051_46879"
            x1={24}
            y1={0}
            x2={24}
            y2={48}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity={0.12} />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </linearGradient>
          <clipPath id="clip0_3051_46879">
            <rect width={48} height={48} rx={12} fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="-white text-xl font-semibold text-neutral-950">
        Tapptree
      </span>
    </Link>
  );
}
