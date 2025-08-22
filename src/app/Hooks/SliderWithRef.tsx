// SliderWithRef.tsx
import React, { forwardRef } from 'react';
import Slider from 'react-slick';

// This wrapper ensures ref works with react-slick in Next.js + TS + React 18/19
const SliderWithRef = forwardRef<any, any>((props, ref) => {
  return <Slider {...props} ref={ref} />;
});

SliderWithRef.displayName = 'SliderWithRef';

export default SliderWithRef;
