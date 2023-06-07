import { ComponentProps, createElement } from 'react';
import Image from 'next/image';

export const ImageComponent = (props: ComponentProps<typeof Image>) => {
  return process.env.NEXT_PUBLIC_TARGET === 'next' ? (
    <Image {...props} />
  ) : (
    createElement('img', {
      // nextのImageコンポーネントライク
      ...{
        loading: 'lazy',
        decoding: 'async',
        'data-nimg': '1',
        style: { color: 'transparent' },
      },
      ...props,
    })
  );
};
