export const Spin = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);
export const SpinPrimary = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-12 w-12 text-primary"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);
export const Logo = () => (
  <svg className="fill-current" viewBox="0 0 133 141">
    <path
      d="M131.804 140.246c.158-2.647.248-5.313.248-8 0-72.901-59.099-132-132-132v140h131.752z"
      fillRule="nonzero"
    />
  </svg>
);

export const POllNotFound = () => (
  <svg width={250} height={200} viewBox="0 0 250 200">
    <title>{"NoSearchResult"}</title>
    <g fill="none" fillRule="evenodd">
      <path
        d="M207 65a7 7 0 010 14h-40a7 7 0 010 14h22a7 7 0 010 14h-10.174c-4.874 0-8.826 3.134-8.826 7 0 2.577 2 4.91 6 7a7 7 0 010 14H93a7 7 0 010-14H54a7 7 0 010-14h40a7 7 0 000-14H69a7 7 0 010-14h40a7 7 0 010-14h98zm0 28a7 7 0 110 14 7 7 0 010-14z"
        fill="#F3F7FF"
      />
      <g transform="translate(87 66)" strokeWidth={2.5}>
        <circle stroke="#12A5E8" fill="#F3F7FF" cx={33.5} cy={33.5} r={33.5} />
        <path
          d="M28.132 59.494c1.759.325 3.548.493 5.368.506C48.136 60 60 48.136 60 33.5S48.136 7 33.5 7c-3.76 0-7.336.783-10.576 2.195A26.604 26.604 0 009.896 21.442 26.388 26.388 0 007 33.5a26.402 26.402 0 006.684 17.596"
          stroke="#12A5E8"
          fill="#FFF"
          strokeLinecap="round"
        />
        <path
          d="M16.797 54.075a26.473 26.473 0 007.204 4.172"
          stroke="#12A5E8"
          strokeLinecap="round"
        />
        <path
          d="M34 15c-1.723 0-3.392.23-4.979.659C20.943 17.847 15 25.229 15 34"
          stroke="#A4C3FE"
          strokeLinecap="round"
        />
        <path stroke="#12A5E8" d="M61 60l6 6" />
        <path
          d="M69.457 63.61c1.24 0 2.481.474 3.427 1.42h0L83.97 76.116a4.831 4.831 0 011.42 3.427c0 1.24-.474 2.48-1.42 3.427a4.831 4.831 0 01-3.427 1.42c-1.24 0-2.481-.474-3.427-1.42h0L66.03 71.884a4.831 4.831 0 01-1.42-3.427c0-1.24.474-2.48 1.42-3.427a4.831 4.831 0 013.427-1.42z"
          stroke="#12A5E8"
          fill="#E8F0FE"
        />
        <path stroke="#FFF" strokeLinecap="round" d="M71 67l11 11" />
      </g>
      <path
        d="M180.5 92h-17.176m24.176 0h-2.221m-11.103 7.777H166M79.5 113H62.324m-5.824 0h-4.221m31.897 8.777H76"
        stroke="#A4C3FE"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
