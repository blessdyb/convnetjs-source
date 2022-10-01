const keyframes = {
  loaderScale:
    "@keyframes loaderscale { 0% { transform: scale(1); opacity: 1; } 45% { transform: scale(0.1); opacity: 0.7; } 80% { transform: scale(1); opacity: 1; }}",
  loaderRipple:
    "@keyframes ripple { 0% { opacity: 1; transform: scale(0); stroke-width: 4; } 100% { opacity: 0; stroke-width: 2; }}",
  loaderBalance:
    "@keyframes balance { 0% { transform: rotate(0deg); } 100% { transform: rotate(180deg); }}",
  loaderCascade:
    "@keyframes cascade { 0% { opacity: 1; } 100% { opacity: 0; }}",
  loaderBlink:
    "@keyframes blink { 0%, 100% { opacity: 0; } 50% { opacity: 1; }}",
};

export default keyframes;
