/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

import { ElementType, FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  as?: ElementType;
  href: string;
  imageUri: string;
  type: string;
}

const Card: FC<CardProps> = ({
  as: Tag = 'li',
  children,
  href,
  imageUri,
  type,
}) => {
  const size = type === 'SMALL_CARD' ? 128 : 512;

  return (
    <Tag>
      <Link href={href}>
        <a>
          <div className='group transition-[background-color,transform,box-shadow] duration-[0.125s] ease-linear rounded-lg p-3 hover:shadow-high hover:-translate-y-2 bg-secondary hover:bg-tertiary'>
            <div className='relative aspect-square w-full h-auto mb-2'>
              <Image
                className='rounded-lg w-full h-full'
                src={imageUri + '?size=' + size}
                width={size}
                height={size}
                alt='Card Image'
              />
            </div>
            <div className='overflow-hidden text-center whitespace-nowrap text-ellipsis text-interactive-normal group-hover:text-interactive-hover'>
              {children}
            </div>
          </div>
        </a>
      </Link>
    </Tag>
  );
};

export default Card;
